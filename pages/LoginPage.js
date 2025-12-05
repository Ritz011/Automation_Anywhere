import { expect } from "@playwright/test";

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('#email');
    this.password = page.locator('#password');
    this.loginBtn = page.locator('button[type="submit"]');
  }

  async goto() {
    await this.page.goto('https://community.cloud.automationanywhere.digital/#/login');
  }

  async login(user, pass) {
    await expect(this.username).toBeVisible();
    await this.username.fill(user);

    await expect(this.password).toBeVisible();
    await this.password.fill(pass);

    await this.loginBtn.click();

    await this.page.waitForURL('**/home');
  }
}
