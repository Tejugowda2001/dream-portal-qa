
import { test, expect } from '@playwright/test';

test('Home page loads and navigates', async ({ page, context }) => {
  await page.goto('https://arjitnigam.github.io/myDreams/');
  await expect(page.locator('.loader')).toBeVisible();
  await page.waitForTimeout(3000);
  await expect(page.locator('#main-content')).toBeVisible();

  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.click('text=My Dreams'),
  ]);
  await newPage.waitForLoadState();
  expect(newPage.url()).toContain('dreams-diary.html');
});
