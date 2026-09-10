// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://software-design.avetavos.com',
  base: '/mcp',
  output: 'static',
  integrations: [starlight({
      title: 'MCP Design — From Zero to Hero',
      head: [
        { tag: 'script', attrs: { type: 'module', src: '/mcp/enhance.js' } },
        { tag: 'link', attrs: { rel: 'manifest', href: '/mcp/manifest.webmanifest' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/mcp/apple-touch-icon.png' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/mcp/icon-192.png' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#D97757' } },
        { tag: 'meta', attrs: { name: 'mobile-web-app-capable', content: 'yes' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-capable', content: 'yes' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' } },
        { tag: 'meta', attrs: { name: 'apple-mobile-web-app-title', content: "MCP Design" } },
        { tag: 'script', content: "if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/mcp/sw.js',{scope:'/mcp/'}).catch(function(){})})}" },
      ],
      defaultLocale: 'en',
      locales: {
        en: { label: 'English', lang: 'en' },
        th: { label: 'ไทย', lang: 'th' },
      },
      customCss: ['./src/styles/custom.css'],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/avetavos/mcp-design-from-zero-to-hero' }],
      sidebar: [
        { label: 'MCP Foundations', items: [{ autogenerate: { directory: 'mcp-foundations' } }] },
        { label: 'Server Primitives', items: [{ autogenerate: { directory: 'server-primitives' } }] },
        { label: 'Transports', items: [{ autogenerate: { directory: 'transports' } }] },
        { label: 'Client Interaction', items: [{ autogenerate: { directory: 'client-interaction' } }] },
        { label: 'Building Clients & Hosts', items: [{ autogenerate: { directory: 'building-clients' } }] },
        { label: 'Security & Authorization', items: [{ autogenerate: { directory: 'security-and-auth' } }] },
        { label: 'Production & Ecosystem', items: [{ autogenerate: { directory: 'production-and-ecosystem' } }] },
      ],
      }), preact()],
});
