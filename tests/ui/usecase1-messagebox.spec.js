import { test, expect } from "@playwright/test";

test("Use Case 1 - Create Message Box Task", async ({ page }) => {
  await page.goto("https://community.cloud.automationanywhere.digital/#/home");

  await page.waitForLoadState("networkidle");

  // Example navigation – adjust according to UI
  await page.getByText("Automation").click();
  await page.getByText("Create Bot").click();
  await page.getByText("Message Box").click();

  await page.fill("input[name='title']", "Hello Automation");
  await page.fill("textarea[name='message']", "This is a test message!");

  await page.getByRole("button", { name: "Save" }).click();

  await expect(page.getByText("Saved successfully")).toBeVisible();
});
