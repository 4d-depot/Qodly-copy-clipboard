import { expect, type Page, test } from '@playwright/test';

const clipboardSentinel = 'clipboard must stay unchanged';

async function openHarness(page: Page, params: Record<string, string>) {
  await page.goto(`/e2e/?${new URLSearchParams(params).toString()}`);
  await page.waitForFunction(
    () =>
      (window as Window & { __COPY_CLIPBOARD_E2E_READY__?: boolean }).__COPY_CLIPBOARD_E2E_READY__,
  );
  await expect(page.getByRole('button', { name: 'Copy to clipboard' })).toBeVisible();
}

async function setClipboard(page: Page, value: string) {
  await page.evaluate((text) => navigator.clipboard.writeText(text), value);
}

async function readClipboard(page: Page) {
  return page.evaluate(() => navigator.clipboard.readText());
}

const validBindings = [
  { name: 'page source', sourceKind: 'page', value: 'page source text' },
  { name: 'shared page source', sourceKind: 'shared', value: 'shared source text' },
  { name: 'Entity attribute', sourceKind: 'entity', value: 'entity attribute text' },
  { name: 'Object attribute', sourceKind: 'object', value: 'object attribute text' },
];

for (const binding of validBindings) {
  test(`copies a string from a ${binding.name}`, async ({ page }) => {
    await openHarness(page, { sourceKind: binding.sourceKind, value: binding.value });
    await setClipboard(page, clipboardSentinel);

    await page.getByRole('button', { name: 'Copy to clipboard' }).click();

    await expect.poll(() => readClipboard(page)).toBe(binding.value);
  });
}

const blockedCases = [
  { name: 'a missing binding', params: { binding: 'missing' } },
  { name: 'a non-string binding', params: { dataType: 'number', value: 'must not copy' } },
  {
    name: 'an undefined binding type',
    params: { dataType: '__undefined__', value: 'must not copy' },
  },
  { name: 'an empty string', params: { value: '' } },
  { name: 'a null value', params: { value: '__null__' } },
  { name: 'an undefined value', params: { value: '__undefined__' } },
  { name: 'a non-string value', params: { value: '__number__' } },
];

for (const blockedCase of blockedCases) {
  test(`leaves the clipboard unchanged for ${blockedCase.name}`, async ({ page }) => {
    await openHarness(page, blockedCase.params);
    await setClipboard(page, clipboardSentinel);

    await page.getByRole('button', { name: 'Copy to clipboard' }).click();

    await expect.poll(() => readClipboard(page)).toBe(clipboardSentinel);
  });
}
