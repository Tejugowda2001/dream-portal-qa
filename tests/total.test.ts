import { test, expect } from '@playwright/test';

test('Dream totals are correct', async ({ page }) => {
  await page.goto('https://arjitnigam.github.io/myDreams/dreams-total.html');
  await expect(page.locator('#good-count')).toHaveText('6');
  await expect(page.locator('#bad-count')).toHaveText('4');
  await expect(page.locator('#total-count')).toHaveText('10');
  await expect(page.locator('#recurring-count')).toHaveText('2');
  await expect(page.locator('text=Flying over mountains')).toBeVisible();
  await expect(page.locator('text=Lost in maze')).toBeVisible();
});
