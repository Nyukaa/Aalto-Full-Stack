import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('‪English (United Kingdom)‬').first().click();
  await page.getByRole('button', { name: 'Accept all' }).click();

});