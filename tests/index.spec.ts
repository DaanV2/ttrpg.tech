import { test, expect } from '@playwright/test';

test('homepage', async ({ page }) => {
  await page.goto('/');

  await test.step('by checking elements have text', async () => {
    await expect(page.getByRole('navigation')).toContainText('Calendar');
    await expect(page.getByRole('navigation')).toContainText('Generators');
    await expect(page.getByRole('navigation')).toContainText('Tools');
    await expect(page.getByRole('navigation')).toContainText('Home');
  });

  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - heading "Choose your adventure" [level=1]
    - separator
    - link "Calendar":
      - /url: /calendar
      - heading "Calendar" [level=5]
    - link "Tools":
      - /url: /tools
      - heading "Tools" [level=5]
    - link "Generators":
      - /url: /generators
      - heading "Generators" [level=5]
    `);
});
