import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), tsconfigPaths()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/vars.scss";',
      },
    },
  },
});
