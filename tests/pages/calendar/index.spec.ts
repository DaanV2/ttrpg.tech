import { test, expect } from '@playwright/test';

test('@calendar', async ({ page }) => {
  await test.step('by going to the calendar page', async () => {
    await page.goto('http://localhost:4173/');
    await page.getByRole('link', { name: 'Calendar' }).first().click();
  });

  await test.step('by highlighting days and expecting query parameters', async () => {
    await page.getByRole('heading', { name: '87', exact: true }).click();
    await page.getByRole('heading', { name: '173' }).click();
    await page.getByRole('heading', { name: '242' }).click();

    const url = new URL(page.url());
    const days = url.searchParams.getAll('day_index');
    expect(days).toEqual(expect.arrayContaining(['87', '173', '242']));
  });
});
