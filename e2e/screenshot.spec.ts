import { test, expect } from "@playwright/test"

test("visual test", async ({ page }) => {
  await page.goto("/")
  await expect(page).toHaveScreenshot()
})
