import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const themes = ['light', 'dark'] as const;

for (const theme of themes) {
  test(`has no WCAG A/AA violations (${theme} mode)`, async ({ page }) => {
    await page.emulateMedia({ colorScheme: theme });
    await page.goto('/');
    await page.addStyleTag({
      content: `
        *, *::before, *::after { animation: none !important; transition: none !important; }
        .reveal { opacity: 1 !important; transform: none !important; }
      `,
    });

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    expect(
      results.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        targets: v.nodes.map((n) => n.target.join(' ')).slice(0, 5),
      }))
    ).toEqual([]);
  });
}
