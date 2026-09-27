class LoginPage {
  constructor(page) {
    this.page = page;

    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-btn');
    this.errorMessage = page.locator('#error');
    this.loginScreen = page.locator('#login-screen');
    this.shopScreen = page.locator('#shop-screen');
  }

  async goto() {
    await this.page.goto('/mini-shop.html');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

module.exports = { LoginPage };