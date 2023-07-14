import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import alpinejs from '@astrojs/alpinejs';
import robotsTxt from 'astro-robots-txt';
import remarkMath from 'remark-math';
import remarkEmoji from 'remark-emoji';
import rehypeKatex from 'rehype-katex';
import remarkPlantUML from '@akebifiky/remark-simple-plantuml';
import { remarkReadingTime } from './remark-plugins/remark-reading-time.mjs';
import { remarkDiagram } from './remark-plugins/remark-diagram.mjs';
import partytown from "@astrojs/partytown";
import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
    vite: {
        ssr: {
            external: ['svgo'],
            noExternal: ['swiper', 'leaflet']
        }
    },
    site: "https://mjgt-studios.github.io",
    base: '/MasterInventoryDocs',
    integrations: [
        tailwind(),
        sitemap(),
        mdx(),
        alpinejs(),
        robotsTxt(),
        markdoc(),
        partytown({
            // Adds dataLayer.push as a forwarding-event.
            config: {
                forward: ["dataLayer.push"],
            },
        }),
    ],
    experimental: {
        assets: true
    },
    markdown: {
        extendDefaultPlugins: true,
        remarkPlugins: [remarkReadingTime, remarkMath, remarkPlantUML, remarkDiagram, remarkEmoji],
        rehypePlugins: [rehypeKatex],
        shikiConfig: {
            theme: 'github-light',
            langs: [],
            // Enable word wrap to prevent horizontal scrolling
            wrap: true
        }
    }
});
