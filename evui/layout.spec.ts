import { test, expect } from '@playwright/test';


['tab', 'menu', 'button', 'icon', 'progress'].forEach(
  (name) => {
    test(name, async ({ page }) => {
      await page.goto(name, {waitUntil: 'networkidle'});
      for (const li of await page.locator('.article-example > .view').all())
        await expect(li).toHaveScreenshot();
    });
  }
)
