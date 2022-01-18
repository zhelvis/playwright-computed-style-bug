const { test, expect } = require("@playwright/test");

test("Get computed style shorthand property", async ({ page }) => {
  await page.goto("https://example.org");

  const bodyLocator = page.locator("body");

  // returns "" in firefox
  const margin = await bodyLocator.evaluate((body) => {
    return window.getComputedStyle(body).margin;
  });

  expect(margin).toBe("0px");
});
