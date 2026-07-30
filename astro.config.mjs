import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    // Preserve v6 whitespace behavior (v7 default changed to 'jsx')
    compressHTML: true,
    site: 'https://gazit.me',
    integrations: [mdx(), sitemap()],
    vite: {
      plugins: [tailwindcss()],
      server: { host: '0.0.0.0' },
    }
});