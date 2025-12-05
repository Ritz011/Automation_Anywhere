// tests/auth/saveAuth.spec.js
const { test } = require('@playwright/test');
const path = require('path');

test('save auth state (run once interactively)', async ({ page }) => {
  // change to your Control Room login URL
  const url = 'https://community.cloud.automationanywhere.digital/#/login';
  await page.goto(url, { waitUntil: 'networkidle', timeout: 120000 });

  // Pause so you can manually complete CAPTCHA/2FA/OAuth if needed
  console.log('Please perform manual login now. After login, close the browser window.');
  await page.pause(); // opens inspector; you can login interactively

  // After manual login, save storage state
  const file = path.resolve(__dirname, '../../auth.json');
  await page.context().storageState({ path: file });
  console.log('Saved auth state to', file);
});
