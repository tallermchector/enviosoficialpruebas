import { test, expect } from '@playwright/test';

test.describe('Homepage Verification', () => {
  test('should load the homepage and display correct title', async ({ page }) => {
    // Go to the base URL
    await page.goto('/');

    // Verify page title matching critical LCP metadata
    await expect(page).toHaveTitle(/Mensajería y Logística E-commerce en Mar del Plata | Envíos DosRuedas/);
  });

  test('should apply the correct brand book color variables in CSS', async ({ page }) => {
    await page.goto('/');

    // Check custom CSS properties (variables) on the root element
    const primaryColor = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim();
    });
    const secondaryColor = await page.evaluate(() => {
      return getComputedStyle(document.documentElement).getPropertyValue('--color-secondary').trim();
    });

    // Verify brand book colors
    expect(primaryColor).toBe('#0635A6');
    expect(secondaryColor).toBe('#FFEC00');
  });

  test('should render Critical LCP Hero element', async ({ page }) => {
    await page.goto('/');

    // Check if the hero section or primary headings are visible
    const mainHeading = page.locator('h1');
    await expect(mainHeading).toBeVisible();
  });
});
