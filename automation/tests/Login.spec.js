const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('user can log in with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.login('standard_user', 'secret123');

  await expect(loginPage.loginScreen).toBeHidden();
  await expect(loginPage.shopScreen).toBeVisible();
});

test('invalid login shows an error message', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.login('wrong_user', 'wrong_password');

  await expect(loginPage.errorMessage)
    .toHaveText('Invalid username or password.');

  await expect(loginPage.loginScreen).toBeVisible();
  await expect(loginPage.shopScreen).toBeHidden();
});