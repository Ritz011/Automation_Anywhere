import { test, expect } from "@playwright/test";
import path from "path";

test("Use Case 2 - Form + Upload", async ({ page }) => {
  await page.goto("https://community.cloud.automationanywhere.digital/#/home");
  
  await page.waitForLoadState("networkidle");

  // Example flow – adjust selectors
  await page.getByText("Create").click();
  await page.getByText("Form").click();

  await page.fill("input[name='firstName']", "Ritika");
  await page.fill("input[name='lastName']", "Verma");

  // File upload
  const filePath = path.resolve("tests/resources/sample.pdf");
  await page.setInputFiles("input[type='file']", filePath);

  await page.getByRole("button", { name: "Submit" }).click();

  await expect(page.getByText("Submitted")).toBeVisible();
});
