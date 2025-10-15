import { test } from '@playwright/test';

test('@generators - spellbook-5e', async ({ page }) => {
  await test.step('by going to the spellbook page', async () => {
    await page.goto('http://localhost:4173/');

    await page.getByRole('link', { name: 'Generators' }).first().click();
    await page.getByRole('link', { name: 'Spellbooks 5e Generate' }).first().click();
  });

  await test.step('by pressing button to get spells', async () => {
    await page.getByRole('button', { name: 'abjuration' }).click();
    await page.getByRole('button', { name: 'ranger' }).click();
    await page.locator('#number-input').first().click();
    await page.locator('#number-input').first().fill('25');
    await page.locator('#number-input').nth(1).click();
    await page.locator('#number-input').nth(1).fill('3');
    await page.getByRole('button', { name: 'Generate' }).click();
  });
});
