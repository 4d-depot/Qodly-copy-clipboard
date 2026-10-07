import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  testMatch: '**/*.spec.ts',
  fullyParallel: true,
  reporter: 'list',
  use: {
    baseURL: 'http://127.0.0.1:4174',
    browserName: 'chromium',
    permissions: ['clipboard-read', 'clipboard-write'],
  },
  webServer: {
    command: 'vite --config e2e/vite.config.ts --host 127.0.0.1 --port 4174',
    url: 'http://127.0.0.1:4174/e2e/',
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
});
