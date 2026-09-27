const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('account locks after three failed login attempts', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  // First failed attempt
  await loginPage.login('wrong_user', 'wrong_password');

  await expect(loginPage.errorMessage)
    .toHaveText('Invalid username or password.');

  // Second failed attempt
  await loginPage.login('wrong_user', 'wrong_password');

  await expect(loginPage.errorMessage)
    .toHaveText('Invalid username or password.');

  // Third failed attempt
  await loginPage.login('wrong_user', 'wrong_password');

  await expect(loginPage.errorMessage)
    .toHaveText('Account locked. Too many failed attempts.');

  // Try valid credentials after the account is locked
  await loginPage.login('standard_user', 'secret123');

  await expect(loginPage.errorMessage)
    .toHaveText('Account locked. Too many failed attempts.');

  // User should still not have access to the shop
  await expect(loginPage.loginScreen).toBeVisible();
  await expect(loginPage.shopScreen).toBeHidden();
});