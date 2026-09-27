const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ShopPage } = require('../pages/ShopPage');
const { ConfirmationPage } = require('../pages/ConfirmationPage');

test('user can add an item and complete checkout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const shopPage = new ShopPage(page);
  const confirmationPage = new ConfirmationPage(page);

  // Open MiniShop and log in
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret123');

  await expect(shopPage.shopScreen).toBeVisible();

  // Add Wireless Mouse to cart
  await shopPage.addProduct('Wireless Mouse');

  // Verify cart count
  await expect(shopPage.cartCount).toHaveText('1');

  // Complete checkout
  await shopPage.checkout();

  // Verify confirmation screen
  await expect(confirmationPage.confirmationScreen).toBeVisible();

  // Verify correct item count and total
  await expect(confirmationPage.orderSummary)
    .toHaveText('1 item(s), total $19.99');

  // Verify cart resets after checkout
  await expect(shopPage.cartCount).toHaveText('0');
});