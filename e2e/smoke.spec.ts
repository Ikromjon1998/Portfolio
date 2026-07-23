import { expect, test } from '@playwright/test';

test.describe('portfolio smoke', () => {
  test('loads with English content, title, and meta description', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Ikromjon Ochilov — Senior Full-Stack Engineer/);
    await expect(page.locator('h1')).toContainText('Reliable systems');
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      'content',
      /Senior Full-Stack Engineer in Berlin/
    );
  });

  test('switches to German, updates <html lang>, and persists the choice', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'DE', exact: true }).click();
    await expect(page.locator('html')).toHaveAttribute('lang', 'de');
    await expect(page.locator('h1')).toContainText('Zuverlässige Systeme');
    await page.reload();
    await expect(page.locator('html')).toHaveAttribute('lang', 'de');
  });

  test('toggles dark mode and persists it across reloads', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Switch to dark mode' }).click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    await page.reload();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  });

  test('generates and downloads the PDF CV in the active language', async ({ page }) => {
    await page.goto('/');
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Download CV' }).first().click();
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toBe('Ikromjon-Ochilov-CV-EN.pdf');
  });

  test('serves machine-readable profile files for agents', async ({ request }) => {
    const llms = await request.get('/llms.txt');
    expect(llms.ok()).toBeTruthy();
    expect(await llms.text()).toContain('# Ikromjon Ochilov — Senior Full-Stack Engineer');

    const resume = await request.get('/resume.json');
    expect(resume.ok()).toBeTruthy();
    const json = (await resume.json()) as { basics: { name: string }; projects: unknown[] };
    expect(json.basics.name).toBe('Ikromjon Ochilov');
    expect(json.projects.length).toBeGreaterThanOrEqual(11);
  });

  test('every section renders', async ({ page }) => {
    await page.goto('/');
    for (const id of [
      'expertise',
      'work',
      'ai',
      'open-source',
      'languages',
      'education',
      'contact',
    ]) {
      await expect(page.locator(`#${id}`)).toBeAttached();
    }
  });
});
