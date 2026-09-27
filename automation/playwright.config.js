const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  reporter: 'html',

  use: {
    baseURL: 'http://127.0.0.1:8080',
    trace: 'on-first-retry'
  },

  webServer: {
    command: 'npx http-server .. -p 8080',
    url: 'http://127.0.0.1:8080/mini-shop.html',
    reuseExistingServer: true
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});