/// <reference types="vitest" />
import path from 'path';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
// tsconfig.node.json 是專門用於 vite.config.ts 的 TypeScript Config。
// https://juejin.cn/post/7126043888573218823

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const DEV_MODE = mode === 'development';
  console.log(`mode:${mode}`);
  return {
    esbuild: {
      pure: DEV_MODE ? [] : ['console.log'],
    },
    css: {
      preprocessorOptions: {
        scss: {},
      },
    },
    plugins: [react(), splitVendorChunkPlugin()],
    define: {
      'process.env': {
        NODE_ENV: mode,
        BUILD_TIME: new Date().toLocaleString(),
      },
    },
    server: {
      port: 3000,
      watch: {
        ignored: ['**/*.d.ts'],
      },
      proxy: {
        '/api': 'https://milkmidi.vercel.app/',
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    // https://vitest.dev/config/#configuring-vitest
    test: {
      include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      globals: true,
      environment: 'jsdom',
      setupFiles: path.resolve(__dirname, './src/testSetup.ts'),
    },
  };
});
