// @ts-check
import { test, expect } from '@playwright/test'

const PAGE_URL = 'http://localhost:5173/'
const URL_PREFIX_IMAGES_CATS = 'https://cataas.com/'



test('App shows fact and ', async ({ page }) => {
  await page.goto(PAGE_URL);

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(URL_PREFIX_IMAGES_CATS)).toBeTruthy()
});





