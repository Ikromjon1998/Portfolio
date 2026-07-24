import { describe, expect, it, vi } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AskCV } from './AskCV';
import { renderWithI18n } from '../test/i18n';
import { en } from '../i18n/en';

async function ask(question: string) {
  const user = userEvent.setup();
  await user.type(screen.getByLabelText(en.ai.chat.title), question);
  await user.click(screen.getByRole('button', { name: en.ai.chat.send }));
}

describe('AskCV', () => {
  it('posts the conversation and renders the reply', async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ reply: 'Six years, mostly Laravel and React.' }), {
        status: 200,
      })
    );
    vi.stubGlobal('fetch', fetchMock);
    renderWithI18n(<AskCV />);

    await ask('How much experience does he have?');

    await waitFor(() =>
      expect(screen.getByText('Six years, mostly Laravel and React.')).toBeInTheDocument()
    );
    expect(screen.getByText('How much experience does he have?')).toBeInTheDocument();
    const [url, init] = fetchMock.mock.calls[0] as [string, { body: string }];
    expect(url).toBe('/.netlify/functions/ask-cv');
    const body = JSON.parse(init.body) as { messages: { role: string; content: string }[] };
    expect(body.messages).toEqual([{ role: 'user', content: 'How much experience does he have?' }]);
  });

  it('shows the error state when the endpoint is unavailable', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(null, { status: 503 })));
    renderWithI18n(<AskCV />);

    await ask('Hello?');

    await waitFor(() => expect(screen.getByRole('alert')).toHaveTextContent(en.ai.chat.error));
  });

  it('renders localized copy (German)', () => {
    renderWithI18n(<AskCV />, 'de');
    expect(screen.getByText('Fragen zu meiner Erfahrung')).toBeInTheDocument();
  });
});
