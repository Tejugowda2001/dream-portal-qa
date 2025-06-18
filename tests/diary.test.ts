import { test, expect } from '@playwright/test';

test('Dreams diary table validation', async ({ page }) => {
  await page.goto('https://arjitnigam.github.io/myDreams/dreams-diary.html');
  const rows = await page.$$('table tbody tr');
  expect(rows.length).toBe(10);

  for (const row of rows) {
    const cols = await row.$$('td');
    expect(cols.length).toBe(3);
    const type = await cols[2].innerText();
    expect(['Good', 'Bad']).toContain(type);
  }
});
