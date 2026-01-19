// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';
import pagefind from "astro-pagefind";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite"; 

export default defineConfig({
  site: 'https://erikaobama.com',
  base: '/',
  integrations: [
    preact(), 
    pagefind(), 
    icon({
      iconDir: "src/images/icon",
    }), 
    mdx({
      // `syntaxHighlight` inherited from Markdown

      // Markdown `remarkPlugins` ignored,
      // only `remarkPlugin2` applied.
      // remarkPlugins: [remarkPlugin2],
      // `gfm` overridden to `false`
      // gfm: false,
    }),
  ],
  vite: { 
    plugins: [
      tailwindcss(),
    ]},
  i18n: {
    locales: ["en", "ja"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: true,
      fallbackType: "redirect",
    },
    fallback: {
      ja: "en",
    }
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: 'catppuccin-frappe',
        dark: 'catppuccin-macchiato',
      },
    },
  }
});