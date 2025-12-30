// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';
import pagefind from "astro-pagefind";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: 'https://erikaobama.com',
  base: '/',
  integrations: [
    preact(), 
    tailwind(), 
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