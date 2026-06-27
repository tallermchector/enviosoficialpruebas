import { test, expect } from '@playwright/test';

test.describe('Envíos DosRuedas Home Page E2E Tests', () => {
  test('should load the home page and verify the title', async ({ page }) => {
    // Navigate to the base URL (which is http://localhost:3000 as configured)
    await page.goto('/');

    // Verify the page title matches the official branding
    await expect(page).toHaveTitle(/Envíos DosRuedas/);
    
    // Check if the main heading or hero text is visible
    // In src/components/homenew/hero-animado.tsx or page.tsx we expect branding elements
    const bodyText = await page.textContent('body');
    expect(bodyText).toContain('DosRuedas');
  });

  test('should check the brand color CSS variables on root', async ({ page }) => {
    await page.goto('/');

    // Evaluate the computed CSS variables from the document element
    const { primary, secondary, white } = await page.evaluate(() => {
      const rootStyle = getComputedStyle(document.documentElement);
      return {
        primary: rootStyle.getPropertyValue('--color-primary').trim(),
        secondary: rootStyle.getPropertyValue('--color-secondary').trim(),
        white: rootStyle.getPropertyValue('--color-white').trim(),
      };
    });

    // Brand color assertions
    expect(primary.toLowerCase()).toBe('#0635a6');
    expect(secondary.toLowerCase()).toBe('#ffec00');
    expect(white.toLowerCase()).toBe('#ffffff');
  });

  test('should verify dark mode class is set on body or layout root', async ({ page }) => {
    await page.goto('/');

    // Check if the main wrapper div has the class 'dark'
    const darkContainer = page.locator('div.dark');
    await expect(darkContainer.first()).toBeVisible();
  });
});
