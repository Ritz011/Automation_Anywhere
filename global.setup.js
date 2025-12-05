import { chromium } from "@playwright/test";
import fs from "fs";

export default async function globalSetup() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://community.cloud.automationanywhere.digital/#/login");

  console.log("Waiting for you to login manually...");
  console.log("After login reaches HOME page, close the browser.");

  await page.waitForURL("**/home", { timeout: 0 });

  const state = await page.context().storageState();
  fs.writeFileSync("auth.json", JSON.stringify(state, null, 2));

  console.log("auth.json saved successfully.");

  await browser.close();
}
