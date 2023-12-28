import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from "@astrojs/sitemap";
import starlightLinksValidator from 'starlight-links-validator'

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://guides.gamehostbros.com',
  integrations: [starlight({
    plugins: [starlightLinksValidator()],
    title: 'Game Host Bros Guides',
    description: 'Learn how to create the best game server with our easy to follow guides.',
    lastUpdated: true,
    editLink: {
      baseUrl: 'https://github.com/Game-Host-Bros/guides/edit/main/',
    },
    customCss: ['./src/styles/custom.css'],
    favicon: './src/assets/dark-logo.png',
    logo: {
      light: './src/assets/light-logo.png',
      dark: './src/assets/dark-logo.png',
      replacesTitle: true
    },
    social: {
      discord: 'https://discord.gg/FN4XgbAwzr',
      github: 'https://github.com/Game-Host-Bros',
      youtube: 'https://www.youtube.com/@GameHostBros',
    },
    sidebar: [{
      label: 'Getting Started',
      autogenerate: {
        directory: 'getting-started'
      }
    }, {
      label: 'Game Guides',
      collapsed: false,
      autogenerate: { directory: 'games', collapsed: true }
    }, {
      label: 'Account',
      collapsed: true,
      autogenerate: {
        directory: 'account'
      }
    }, {
      label: 'Support',
      link: 'https://portal.gamehostbros.com/supporttickets.php'
    }]
  }), sitemap({
    changefreq: 'daily',
    lastmod: new Date(),
  }), robotsTxt()]
});