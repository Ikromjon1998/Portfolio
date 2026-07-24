import { describe, expect, it, vi } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactForm } from './ContactForm';
import { renderWithI18n } from '../test/i18n';
import { en } from '../i18n/en';

async function fillAndSubmit() {
  const user = userEvent.setup();
  await user.type(screen.getByLabelText(en.contact.form.name), 'Jane Doe');
  await user.type(screen.getByLabelText(en.contact.form.email), 'jane@example.com');
  await user.type(screen.getByLabelText(en.contact.form.message), 'Please build me a platform.');
  await user.click(screen.getByRole('button', { name: en.contact.form.send }));
}

describe('ContactForm', () => {
  it('posts url-encoded form data including the form name and shows the success state', async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(null, { status: 200 }));
    vi.stubGlobal('fetch', fetchMock);
    renderWithI18n(<ContactForm />);

    await fillAndSubmit();

    await waitFor(() =>
      expect(screen.getByRole('status')).toHaveTextContent(en.contact.form.success)
    );
    const [url, init] = fetchMock.mock.calls[0] as [string, { body: string }];
    expect(url).toBe('/');
    const body = new URLSearchParams(init.body);
    expect(body.get('form-name')).toBe('contact');
    expect(body.get('email')).toBe('jane@example.com');
    expect(body.get('message')).toBe('Please build me a platform.');
  });

  it('shows the error state and keeps the form when the POST fails', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(null, { status: 500 })));
    renderWithI18n(<ContactForm />);

    await fillAndSubmit();

    await waitFor(() => expect(screen.getByRole('alert')).toHaveTextContent(en.contact.form.error));
    expect(screen.getByLabelText(en.contact.form.name)).toBeInTheDocument();
  });

  it('renders localized labels (German)', () => {
    renderWithI18n(<ContactForm />, 'de');
    expect(screen.getByLabelText('E-Mail')).toBeInTheDocument();
  });
});
