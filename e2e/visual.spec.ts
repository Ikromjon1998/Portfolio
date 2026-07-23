import { expect, test } from '@playwright/test';

test.describe('visual regression', () => {
  test.skip(!!process.env.CI, 'macOS baselines — run locally');

  const freeze = async (page: import('@playwright/test').Page) => {
    await page.addStyleTag({
      content: `
        *, *::before, *::after { animation: none !important; transition: none !important; }
        .reveal { opacity: 1 !important; transform: none !important; }
      `,
    });
  };

  for (const theme of ['light', 'dark'] as const) {
    test(`full page (${theme})`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: theme });
      await page.goto('/');
      await freeze(page);
      await expect(page).toHaveScreenshot(`home-${theme}.png`, { fullPage: true });
    });
  }

  test('stats strip (dark) — inverted band stays readable', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.goto('/');
    await freeze(page);
    await expect(page.locator('.strip')).toHaveScreenshot('strip-dark.png');
  });
});
