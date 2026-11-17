import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        project_1: resolve(__dirname, 'project_1.html'),
        project_2: resolve(__dirname, 'project_2.html'),
        project_3: resolve(__dirname, 'project_3.html'),
        project_4: resolve(__dirname, 'project_4.html'),
      },
    },
  },
});
