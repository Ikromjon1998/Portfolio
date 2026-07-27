import { useRef, useState, type FormEvent } from 'react';
import { useTranslation } from '../i18n/useTranslation';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { personal } from '../data/personal';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const ENDPOINT = '/.netlify/functions/ask-cv';
const MAX_TURNS = 12;

type Status = 'idle' | 'sending' | 'unavailable' | 'rate_limited' | 'error';

export function AskCV() {
  const { t } = useTranslation();
  const ref = useScrollReveal<HTMLDivElement>();
  const inputRef = useRef<HTMLInputElement>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [status, setStatus] = useState<Status>('idle');

  const send = (thread: ChatMessage[]) => {
    setMessages(thread);
    setStatus('sending');

    void fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: thread }),
    })
      .then(async (response) => {
        if (response.status === 429) {
          setStatus('rate_limited');
          return;
        }
        if (response.status === 503) {
          setStatus('unavailable');
          return;
        }
        if (!response.ok) {
          setStatus('error');
          return;
        }
        const data = (await response.json()) as { reply: string | null };
        if (!data.reply) {
          setStatus('error');
          return;
        }
        setMessages([...thread, { role: 'assistant', content: data.reply }]);
        setStatus('idle');
      })
      .catch(() => setStatus('error'));
  };

  const ask = (question: string) => {
    if (!question || status === 'sending') return;
    const thread = [...messages, { role: 'user' as const, content: question }].slice(-MAX_TURNS);
    // The API requires the first message to be a user turn; trimming to the
    // last MAX_TURNS entries can leave an assistant reply at the front.
    while (thread[0]?.role === 'assistant') thread.shift();
    send(thread);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const raw = new FormData(form).get('question');
    const question = typeof raw === 'string' ? raw.trim() : '';
    if (!question || status === 'sending') return;
    form.reset();
    ask(question);
  };

  const errorText =
    status === 'unavailable'
      ? t.ai.chat.error
      : status === 'rate_limited'
        ? t.ai.chat.errorRateLimited
        : t.ai.chat.errorGeneric;

  return (
    <div className="askcv reveal" ref={ref}>
      <h3>{t.ai.chat.title}</h3>
      <p className="askcv-note">
        {t.ai.chat.note}{' '}
        <a href={personal.portfolioRepo} target="_blank" rel="noreferrer">
          {t.ai.chat.viewSource}
        </a>
      </p>
      {messages.length === 0 && (
        <div className="askcv-chips">
          {t.ai.chat.suggestions.map((question) => (
            <button
              key={question}
              type="button"
              className="chip"
              onClick={() => {
                // The chips unmount once the thread starts; park focus on the
                // input so keyboard and screen-reader users keep their place.
                inputRef.current?.focus();
                ask(question);
              }}
            >
              {question}
            </button>
          ))}
        </div>
      )}
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
      {/* Always mounted so the first turn's status change is announced. */}
      <p className="sr-only" role="status">
        {status === 'sending' ? t.ai.chat.sending : ''}
      </p>
      {(status === 'unavailable' || status === 'rate_limited' || status === 'error') && (
        <div className="askcv-error">
          <p className="form-status error" role="alert">
            {errorText}
          </p>
          {status !== 'unavailable' && (
            <button
              type="button"
              className="askcv-retry"
              onClick={() => {
                inputRef.current?.focus();
                send(messages);
              }}
            >
              {t.ai.chat.retry}
            </button>
          )}
        </div>
      )}
      <form className="askcv-form" onSubmit={handleSubmit}>
        <input
          ref={inputRef}
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
