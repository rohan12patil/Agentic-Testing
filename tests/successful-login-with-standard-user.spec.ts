// spec: testplan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('User Authentication', () => {
  test('Successful Login with Standard User', async ({ page }) => {
    // 1. Navigate to https://www.saucedemo.com
    await page.goto('https://www.saucedemo.com');
    await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();
    await expect(page.getByText('Accepted usernames are:')).toBeVisible();
    await expect(page.getByText('Password for all users:')).toBeVisible();

    // 2. Enter invalid username 'invalid_user' and password 'secret_sauce', click Login
    await page.locator('[data-test="username"]').fill('invalid_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.getByText('Swag Labs')).toBeVisible();

    // 3. Verify error handling
    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();

    // 4. Enter valid username 'standard_user' and password 'secret_sauce', click Login
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.getByText('Swag Labs')).toBeVisible();

    // 5. Verify successful login
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
  });
});