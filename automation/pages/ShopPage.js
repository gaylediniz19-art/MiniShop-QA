class ShopPage {
  constructor(page) {
    this.page = page;

    this.shopScreen = page.locator('#shop-screen');
    this.cartCount = page.locator('#cart-count');
    this.checkoutButton = page.locator('#checkout-btn');
  }

  async addProduct(productName) {
    await this.page
      .locator(`.add-btn[data-name="${productName}"]`)
      .click();
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}

module.exports = { ShopPage };