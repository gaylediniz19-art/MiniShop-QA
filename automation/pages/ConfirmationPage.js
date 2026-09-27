class ConfirmationPage {
  constructor(page) {
    this.page = page;

    this.confirmationScreen = page.locator('#confirmation-screen');
    this.orderSummary = page.locator('#order-summary');
  }
}

module.exports = { ConfirmationPage };