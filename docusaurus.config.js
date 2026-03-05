// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config
require('dotenv').config();

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ES User Guide',
  tagline: 'ES Console',
  favicon: 'img/es-symbol.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://rugwu.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/es-user-guide/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rugwu', // Usually your GitHub org/user name.
  projectName: 'es-user-guide', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      /** @type {import('docusaurus-plugin-openapi-docs').Options} */
      /** @type {import('@docusaurus/types/src/plugin').PluginOptions} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
          docItemComponent: "@theme/ApiItem",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          path: 'release-notes',
          routeBasePath: 'release-notes',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'openapi',
        docsPluginId: 'classic',

        config: {
          customerApi: {
            specPath: 'static/api-specification/es-loyalty-api.yaml',
            outputDir: 'docs/api/customer-apis',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'info',
            },
          },
           promotionApi: {
            specPath: 'static/api-specification/es-loyalty-api.yaml',
            outputDir: 'docs/api/promotion-apis',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'info',
            },
          }  
        }
      }
    ]
  ],

  themes: [
    'docusaurus-theme-openapi-docs',
  ],

  //  customFields: {
  //   auth0Domain: process.env.AUTH0_DOMAIN,
  //   auth0ClientId: process.env.AUTH0_CLIENT_ID
  // },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        // title: 'Exchange Solutions',
        logo: {
          alt: 'Exchange Solutions Logo',
          src: 'img/es-symbol.svg',
        },
        items: [
           {
            to: '/docs/products',
            position: 'left',
            label: 'Product Docs',
          },
          {
            to: '/docs/integrations',
            position: 'left',
            label: 'Integrations',
          },
          {
            to: '/docs/api',
            position: 'left',
            label: 'API Reference',
          },
           {
            to: '/docs/release-notes',
            position: 'left',
            label: 'Release Notes',
          },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'esConsoleSidebar',
          //   position: 'left',
          //   label: 'ES Console',
          // },
          // {
          //   type: 'dropdown',
          //   position: 'left',
          //   label: 'API Reference',
          //   items: [
          //     {
          //       type: 'doc',
          //       // docsPluginId: 'api',
          //       docId: 'api-reference/index',
          //       label: 'ES Loyalty API',

          //     }
          //   ]
          // },
        // {
        //   type: 'dropdown',
        //   label: 'Account',
        //   position: 'right',
        //   items: [
        //     { to: '/signin', label: 'Sign in' },
        //     { to: '/logout', label: 'Sign out' },
        //   ],
        // }

        //  {to: '/release-notes', label: 'Release Notes', position: 'right', className: 'navbar__releaseNotesButton'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        }
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'Articles, Case Studies, Press Releases',
                to: 'https://www.exchangesolutions.com/resources',
              },
              {
                label: 'Industries',
                to: 'https://www.exchangesolutions.com/industries',
              },
              {
                label: 'Security & Compliance',
                to: 'https://www.exchangesolutions.com/security-compliance',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'Client Login',
                href: 'https://www.exchangesolutions.com/login/',
              },
              {
                label: 'Client Help Desk',
                href: 'https://esidevops.atlassian.net/servicedesk/customer/user/login?destination=portals',
              },
              {
                label: 'Contact Us',
                href: 'https://www.exchangesolutions.com/contact',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'About Us',
                href: 'https://www.exchangesolutions.com/about',
              },
              {
                label: 'Book Demo',
                to: 'https://www.exchangesolutions.com/book-demo',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Exchange Solutions, Inc. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
