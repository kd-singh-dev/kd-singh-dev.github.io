const { Agile, generateId } = require('@agile-ts/core');
const { AgileHOC, useAgile, useWatcher, useProxy } = require('@agile-ts/react');
const { Event, useEvent } = require('@agile-ts/event');
const { toast } = require('react-toastify');

const githubOrgUrl = 'https://github.com/kdsinghcoder';
const domain = 'https://kdsinghcoder.github.io';
const npmOrgUrl = 'https://www.npmjs.com/package/@agile-ts';

const customFields = {
  copyright: `Created with 💜 in India     |    Copyright © ${new Date().getFullYear()} <a target="_blank" href="https://twitter.com/karandchandi">Karandeep Singh</a>`,
  meta: {
    title: "Let's code",
    image: '/img/kd.png',
    description:
      'Hi I am karandeep Singh a young passionate developer.',
    color: '#6c69a0',
  },
  domain,
  githubOrgUrl,
  githubUrl: `${githubOrgUrl}`,
  githubDocsUrl: `${githubOrgUrl}/documentation`,
  npmCoreUrl: `${npmOrgUrl}/core`,
  instagram: `https://www.instagram.com/karandeepsingh_chandi/`,
  stackoverflowUrl: 'https://stackoverflow.com/questions/tagged/agile-ts',
  twitterUrl: 'https://twitter.com/karandchandi',
  redditUrl: 'https://www.reddit.com/r/AgileTs/',
  GitStats: 'https://gitstats.me/kdsinghcoder',
  version: '0.0.1',
  announcementBar: {
    id: 'announcement',
    content: [
      `❓ If you have any questions, don't hesitate simply email me <a href="mailto:kdsingh.contact@gmail.com">Click here</a> ️`,
      `🎉 !️If you like my work, connect with me on <a href="https://www.linkedin.com/in/karandeep-singh-018155157/">Linkedin</a>`,
      `⏰ I love working on Projects, check them out  <a href="http://kdsingh.me/docs/intro">Here</a>`,
    ],
    random: false,
    interval: 100000,
  },
  liveCodeScope: {
    Agile,
    useAgile,
    useProxy,
    useEvent,
    useWatcher,
    AgileHOC,
    generateId,
    toast,
    Event,
  },
};


const config = {
  title: 'Kd Singh',
  tagline: 'A Bug is not a four letter word… but often your reaction to it is! 😅',
  url: "https://kdsinghcoder.github.io",
  baseUrlIssueBanner: false,
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  favicon: 'img/kd.png',
  organizationName: 'kdsinghcoder',
  projectName: 'kdsinghcoder.github.io',
  themes: ['@docusaurus/theme-live-codeblock'],
  scripts: [{ src: 'https://snack.expo.io/embed.js', async: true }], // https://github.com/expo/snack/blob/main/docs/embedding-snacks.md
  plugins: [
    'docusaurus-plugin-sass',
    // @docusaurus/plugin-google-analytics (Not necessary because it automatically gets added)
  ],
  customFields: { ...customFields },
  themeConfig: {
    hideableSidebar: false,
    algolia: {
      apiKey: '6b7b98565bb82e16996fd185f378d618',
      indexName: 'agile-ts',
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    image: '/img/kd.png', // Gets used in Head as Meta Image (og:image)
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    navbar: {
      title: ' ',
      hideOnScroll: true,
      logo: {
        alt: 'My Site Logo',
        src: 'img/kd.png',
      },
      items: [
        // left
        {
          label: 'About',
          position: 'left',
          to: '/docs/introduction/',
        },
        {
          label: 'Projects',
          position: 'left',
          items: [
            {
              label: 'all',
              to: '/docs/intro',
            },
            {
              label: 'Get Bus',
              to: '/docs/getbus',
            },
            {
              label: 'DocStream ❤',
              to: '/docs/docstream',
            },
            {
              label: 'GIT CLI 💻',
              to: '/docs/gitcli',
            },
            {
              label: 'Say Hello 👋',
              to: '/docs/sayhello',
            },
            {
              label: 'Bond Mantainer 👩🏼‍🤝',
              to: '/docs/bondmantainer',
            },
            {
              label: 'Travel Buddy 🚄',
              to: '/docs/travelbuddy',
            },
            {
              label: 'Insta Bot 🤖',
              to: '/docs/instabot',
            },
            {
              label: 'YouTube API',
              to: '/docs/youtubeapi',
            },
          ],
        },
        {
          label: 'Profiles',
          position: 'left',
          items: [
            {
              label: 'LinkedIn',
              href: "https://www.linkedin.com/in/karandeep-singh-018155157/",
            },
            {
              label: 'GitHub',
              href: customFields.githubUrl,
            },
            {
              label: 'Instagram',
              href: customFields.instagram,
            },
            {
              label: 'Twitter',
              href: customFields.twitterUrl,
            },
            {
              label: "Git Stats",
              href: customFields.GitStats,
            },
            {
              label: "geeksforgeeks",
              href: "https://auth.geeksforgeeks.org/user/kdsinghcoder/profile",
            },
            {
              label: "CodeChef",
              href: "https://www.codechef.com/users/karandsingh",
            },
          ],
        },
        {
          label: 'Resume',
          position: 'right',
          href:'https://kdsinghcoder.github.io/KarandeepSingh.pdf',
        }  
      ],
    },
    footer: {
      copyright: customFields.copyright,
      style: 'dark',
      links: [
        {
          title: 'About',
          items: [
            {
              label: 'Introduction',
              to: 'docs/introduction',
            },
              {
                label: 'Resume',
                href: 'https://kdsinghcoder.github.io/KarandeepSingh.pdf',
              }
          ],
        },
        {
          title: 'Projects',
          items: [
            {
              label: 'all',
              to: '/docs/intro',
            },
            {
              label: 'DocStream ❤',
              to: '/docs/docstream',
            },
            {
              label: 'Say Hello 👋',
              to: '/docs/sayhello',
            },
            {
              label: 'Bond Mantainer 👩🏼‍🤝',
              to: '/docs/bondmantainer',
            },
            {
              label: 'Travel Buddy 🚄',
              to: '/docs/travelbuddy',
            },
            {
              label: 'Insta Bot 🤖',
              to: '/docs/instabot',
            },
            {
              label: 'YouTube API',
              to: '/docs/youtubeapi',
            },
          ],
        },
        {
          title: 'Profiles',
          items: [
            {
              label: 'GitHub',
              href: customFields.githubUrl,
            },
            {
              label: 'Instagram',
              href: customFields.instagram,
            },
            {
              label: 'Twitter',
              href: customFields.twitterUrl,
            },
            {
              label: "Git Stats",
              href: customFields.GitStats,
            },
            {
              label: "geeksforgeeks",
              href: "https://auth.geeksforgeeks.org/user/kdsinghcoder/profile",
            },
            {
              label: "CodeChef",
              href: "https://www.codechef.com/users/karandsingh",
            },
          ],
        },
      ],
    },
    googleAnalytics: {
      trackingID: 'UA-189394644-1',
      anonymizeIP: true, // Should IPs be anonymized?
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          admonitions: {
            icons: 'emoji',
          },
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: `${customFields.githubDocsUrl}/tree/develop`,
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
          ],
        },
        blog: {
          showReadingTime: true,
          editUrl: `${customFields.githubDocsUrl}/tree/develop`,
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')],
        },
      },
    ],
  ],
};

module.exports = { ...config };
