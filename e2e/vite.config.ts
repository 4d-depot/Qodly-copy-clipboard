import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@ws-ui/webform-editor': fileURLToPath(new URL('./qodlyMock.ts', import.meta.url)),
    },
  },
  optimizeDeps: {
    entries: ['e2e/index.html'],
  },
  server: {
    host: '127.0.0.1',
    port: 4174,
    strictPort: true,
  },
});
