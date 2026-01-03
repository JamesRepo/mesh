import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mesh.art',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    build: {
      cssMinify: true
    }
  }
});
