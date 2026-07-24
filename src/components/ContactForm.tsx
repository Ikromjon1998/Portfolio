import { useState, type FormEvent } from 'react';
import { useTranslation } from '../i18n/useTranslation';

type Status = 'idle' | 'sending' | 'success' | 'error';

export function ContactForm() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const body = new URLSearchParams();
    for (const [key, value] of new FormData(form)) {
      if (typeof value === 'string') body.append(key, value);
    }

    setStatus('sending');
    void fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    })
      .then((response) => {
        if (!response.ok) throw new Error(`Form POST failed: ${response.status}`);
        setStatus('success');
        form.reset();
      })
      .catch(() => setStatus('error'));
  };

  if (status === 'success') {
    return (
      <p className="form-status success" role="status">
        {t.contact.form.success}
      </p>
    );
  }

  return (
    <form
      className="contact-form"
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
    >
      <h3>{t.contact.form.title}</h3>
      <input type="hidden" name="form-name" value="contact" />
      <p className="hp" aria-hidden="true">
        <label>
          Don’t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <div className="form-row">
        <label>
          {t.contact.form.name}
          <input type="text" name="name" required autoComplete="name" maxLength={120} />
        </label>
        <label>
          {t.contact.form.email}
          <input type="email" name="email" required autoComplete="email" maxLength={200} />
        </label>
      </div>
      <label>
        {t.contact.form.message}
        <textarea name="message" required rows={5} maxLength={4000} />
      </label>
      <div className="form-actions">
        <button type="submit" className="btn" disabled={status === 'sending'}>
          {status === 'sending' ? t.contact.form.sending : t.contact.form.send}
        </button>
        {status === 'error' && (
          <p className="form-status error" role="alert">
            {t.contact.form.error}
          </p>
        )}
      </div>
    </form>
  );
}
