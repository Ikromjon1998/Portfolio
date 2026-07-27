import { describe, expect, it, vi } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AskCV } from './AskCV';
import { renderWithI18n } from '../test/i18n';
import { en } from '../i18n/en';

async function ask(question: string) {
  const user = userEvent.setup();
  const input = screen.getByLabelText(en.ai.chat.title);
  // form.reset() clears the field in real browsers, but user-event's internal
  // value tracker doesn't see it and would resurrect the previous text on the
  // next type() call — clear explicitly so consecutive asks stay independent.
  await user.clear(input);
  await user.type(input, question);
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

  it('shows the unavailable message without a retry button on 503', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(null, { status: 503 })));
    renderWithI18n(<AskCV />);

    await ask('Hello?');

    await waitFor(() => expect(screen.getByRole('alert')).toHaveTextContent(en.ai.chat.error));
    expect(screen.queryByRole('button', { name: en.ai.chat.retry })).not.toBeInTheDocument();
  });

  it('shows the rate-limit message on 429', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(null, { status: 429 })));
    renderWithI18n(<AskCV />);

    await ask('Hello?');

    await waitFor(() =>
      expect(screen.getByRole('alert')).toHaveTextContent(en.ai.chat.errorRateLimited)
    );
    expect(screen.getByRole('button', { name: en.ai.chat.retry })).toBeInTheDocument();
  });

  it('retries the failed turn without duplicating the user message', async () => {
    const user = userEvent.setup();
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(new Response(null, { status: 502 }))
      .mockResolvedValueOnce(
        new Response(JSON.stringify({ reply: 'Second try worked.' }), { status: 200 })
      );
    vi.stubGlobal('fetch', fetchMock);
    renderWithI18n(<AskCV />);

    await ask('Hello?');
    await waitFor(() =>
      expect(screen.getByRole('alert')).toHaveTextContent(en.ai.chat.errorGeneric)
    );

    await user.click(screen.getByRole('button', { name: en.ai.chat.retry }));

    await waitFor(() => expect(screen.getByText('Second try worked.')).toBeInTheDocument());
    const secondBody = JSON.parse(
      (fetchMock.mock.calls[1] as [string, { body: string }])[1].body
    ) as { messages: { role: string; content: string }[] };
    expect(secondBody.messages).toEqual([{ role: 'user', content: 'Hello?' }]);
  });

  it('keeps the first message a user turn once the 12-turn window overflows', async () => {
    let n = 0;
    const fetchMock = vi
      .fn()
      .mockImplementation(() =>
        Promise.resolve(new Response(JSON.stringify({ reply: `reply ${++n}` }), { status: 200 }))
      );
    vi.stubGlobal('fetch', fetchMock);
    renderWithI18n(<AskCV />);

    for (let i = 1; i <= 7; i++) {
      await ask(`question ${i}`);
      await waitFor(() => expect(screen.getByText(`reply ${i}`)).toBeInTheDocument());
    }

    const seventh = JSON.parse((fetchMock.mock.calls[6] as [string, { body: string }])[1].body) as {
      messages: { role: string; content: string }[];
    };
    expect(seventh.messages[0]).toEqual({ role: 'user', content: 'question 2' });
    expect(seventh.messages).toHaveLength(11);
  });

  it('sends a suggested question when its chip is clicked, then hides the chips', async () => {
    const user = userEvent.setup();
    const fetchMock = vi
      .fn()
      .mockResolvedValue(
        new Response(JSON.stringify({ reply: 'He built a healthcare platform.' }), { status: 200 })
      );
    vi.stubGlobal('fetch', fetchMock);
    renderWithI18n(<AskCV />);

    const chipText = en.ai.chat.suggestions[0];
    await user.click(screen.getByRole('button', { name: chipText }));

    await waitFor(() =>
      expect(screen.getByText('He built a healthcare platform.')).toBeInTheDocument()
    );
    const body = JSON.parse((fetchMock.mock.calls[0] as [string, { body: string }])[1].body) as {
      messages: { role: string; content: string }[];
    };
    expect(body.messages).toEqual([{ role: 'user', content: chipText }]);
    expect(screen.queryByRole('button', { name: chipText })).not.toBeInTheDocument();
  });

  it('links to the public source repository', () => {
    renderWithI18n(<AskCV />);
    expect(screen.getByRole('link', { name: en.ai.chat.viewSource })).toHaveAttribute(
      'href',
      'https://github.com/Ikromjon1998/Portfolio'
    );
  });

  it('renders localized copy (German)', () => {
    renderWithI18n(<AskCV />, 'de');
    expect(screen.getByText('Fragen zu meiner Erfahrung')).toBeInTheDocument();
  });
});
