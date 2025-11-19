import { test, expect } from '@playwright/test';

test.use({
  storageState: 'john-auth.json',
});

test('List Stuff Page', async ({ page }) => {
  // Go to the List Stuff page
  await page.goto('http://localhost:3000/list');

  // Check navigation links
  await expect(page.getByRole('link', { name: 'Add Stuff' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'List Stuff' })).toBeVisible();

  // Check logged-in user badge
  await expect(page.getByRole('button', { name: 'john@foo.com' })).toBeVisible();

  // Check the heading
  await expect(page.getByRole('heading', { name: 'Stuff' })).toBeVisible();

  // Check that the table exists
  const table = page.getByRole('table');
  await expect(table).toBeVisible();

  // Check that the seeded items appear
  await expect(page.getByText('Basket')).toBeVisible();
  await expect(page.getByText('Bicycle')).toBeVisible();
  await expect(page.getByText('Banana')).toBeVisible();
  await expect(page.getByText('Boogie Board')).toBeVisible();
});
