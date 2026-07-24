import { useState, type FormEvent } from 'react';
import { useTranslation } from '../i18n/useTranslation';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const ENDPOINT = '/.netlify/functions/ask-cv';
const MAX_TURNS = 12;

export function AskCV() {
  const { t } = useTranslation();
  const ref = useScrollReveal<HTMLDivElement>();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const raw = new FormData(form).get('question');
    const question = typeof raw === 'string' ? raw.trim() : '';
    if (!question || status === 'sending') return;

    const next = [...messages, { role: 'user' as const, content: question }].slice(-MAX_TURNS);
    setMessages(next);
    setStatus('sending');
    form.reset();

    void fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: next }),
    })
      .then(async (response) => {
        if (!response.ok) throw new Error(`Ask CV failed: ${response.status}`);
        const data = (await response.json()) as { reply: string | null };
        if (!data.reply) throw new Error('Ask CV returned no reply');
        setMessages([...next, { role: 'assistant', content: data.reply }]);
        setStatus('idle');
      })
      .catch(() => setStatus('error'));
  };

  return (
    <div className="askcv reveal" ref={ref}>
      <h3>{t.ai.chat.title}</h3>
      <p className="askcv-note">{t.ai.chat.note}</p>
      {messages.length > 0 && (
        <div className="askcv-thread" aria-live="polite">
          {messages.map((message, i) => (
            <p key={i} className={`askcv-msg ${message.role}`}>
              {message.content}
            </p>
          ))}
          {status === 'sending' && <p className="askcv-msg assistant">{t.ai.chat.sending}</p>}
        </div>
      )}
      {status === 'error' && (
        <p className="form-status error" role="alert">
          {t.ai.chat.error}
        </p>
      )}
      <form className="askcv-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="question"
          maxLength={1000}
          placeholder={t.ai.chat.placeholder}
          aria-label={t.ai.chat.title}
          required
        />
        <button type="submit" className="btn" disabled={status === 'sending'}>
          {status === 'sending' ? t.ai.chat.sending : t.ai.chat.send}
        </button>
      </form>
    </div>
  );
}
