import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        '/assets/index-AjMSGK_N.js?defer',
      ],
    },
  },
});
