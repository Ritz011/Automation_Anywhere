import { test, expect } from "@playwright/test";
import fs from "fs";

test("Use Case 3 - Create Learning Instance API", async ({ request }) => {
  const auth = JSON.parse(fs.readFileSync("auth.json", "utf8"));

  // Extract token
  const storage = auth.origins[0].localStorage;
  const tokenEntry = storage.find(x => x.name === "authToken");

  let token = tokenEntry?.value?.replace(/^"|"$/g, ""); // remove surrounding quotes

  console.log("Using Token:", token.substring(0, 20) + "...");

  const payload = {
    name: "My Learning Instance",
    description: "Created via Playwright",
    type: "LearningInstance"
  };

  const res = await request.post(
    "https://community.cloud.automationanywhere.digital/v2/learning-instances",
    {
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": `Bearer ${token}` // ⭐ correct format
      },
      data: payload
    }
  );

  console.log(await res.text());
  expect(res.status()).toBe(201);
});
