// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GeauxWeisbeck4.dev',
  tagline: 'Professional website for Andrew Weisbeck, a freelance web developer and entrepreneur. Offering services in web design, app development, marketing, content creation, tutoring, and business consulting.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://geauxweisbeck4.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'geauxweisbeck4', // Usually your GitHub org/user name.
  projectName: 'geauxweisbeck4.dev', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-notes',
        path: 'docs-notes',
        routeBasePath: 'docs-notes',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-projects',
        path: 'docs-projects',
        routeBasePath: 'docs-projects',
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'docs',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          lastVersion: 'current',
          onlyIncludeVersions: ['current'],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/geauxweisbeck4/geauxweisbeck4.dev/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        hideOnScroll: true,
        title: 'GeauxWeisbeck4.dev',
        logo: {
          alt: 'geauxweisbeck4 logo',
          src: 'img/geauxlogo.png',
        },
        items: [
          {
            to: '/docs/intro',
            label: 'Tutorials',
            position: 'left',
            activeBaseRegex: '/docs/'
          },
          {
            to: '/docs-notes/Intro',
            label: 'Notes',
            position: 'left',
            activeBaseRegex: '/docs-notes/',
          },
          {
            to: '/docs-projects/intro',
            label: 'Projects',
            position: 'left',
            activeBaseRegex: '/docs-projects/'
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/geauxweisbeck4',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Tutorials',
                to: '/docs/intro',
              },
              {
                label: 'Projects',
                to: '/docs-projects/intro'
              },
              {
                label: 'Notes',
                to: '/notes/intro,',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/17772593/geauxweisbeck4',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/geauxweisbeck4',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/geauxweisbeck4',
              },
              {
                label: 'Mastodon',
                href: 'https://fosstodon.org/@GeauxWeisbeck4',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/geauxweisbeck4',
              },
              {
                label: 'GeauxWeisbeck4.agency',
                href: 'https://geauxweisbeck4.agency',
              },
              {
                label: 'AndrewWeisbeck.dev',
                href: 'https://andrewweisbeck.dev',
              },
              {
                label: 'andrewsdigital.garden',
                href: 'https://andrewsdigital.garden',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GeauxWeisbeck4.dev, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
