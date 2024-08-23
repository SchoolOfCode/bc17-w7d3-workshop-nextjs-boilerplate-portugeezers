import { test, expect } from '@playwright/test';

test('Has correct title', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Fireplace Palace/);
});

test('Booking page exists', async ({ page }) => {
    await page.goto('http://localhost:3000');
  
    await page.getByRole('link', { name: 'Book Here' }).click();

    await expect(page.getByRole('heading', { name: 'Design Booking' })).toBeVisible();
});
  
test('Form errors with no input', async ({ page }) => {
    await page.goto('http://localhost:3000');
  
    await page.getByRole('link', { name: 'Book Here' }).click();

    await page.getByRole('button', { name: 'Request Design Consultation' }).click();

    await expect(page.getByText("Error all fields are required - some missing.")).toBeVisible();
});
  