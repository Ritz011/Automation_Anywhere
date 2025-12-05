// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: "https://community.cloud.automationanywhere.digital",
    storageState: 'auth.json',
    headless: false
  },
  projects: [
    {
      name: "ui-tests",
      use: { channel: "chromium" }
    }
  ]
});
