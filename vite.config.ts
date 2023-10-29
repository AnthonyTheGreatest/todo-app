// https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib-msw/vite.config.ts
// https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib/vite.config.ts

/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
  },
});
