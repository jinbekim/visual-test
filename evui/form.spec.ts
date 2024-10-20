import { test, expect } from '@playwright/test';


['checkbox', 'radio', 'select', 'toggle', 'textField', 'inputNumber', 'slider', 'calendar', 'datePicker', 'scheduler', 'timePicker','pagination'].forEach(
  (name) => {
    test(name, async ({ page }) => {
      await page.goto(name, {waitUntil: 'networkidle'});
      for (const li of await page.locator('.article-example > .view').all())
        await expect(li).toHaveScreenshot();
    });
  }
)
