export default {
  "title": "Kd Singh",
  "tagline": "A Bug is not a four letter word… but often your reaction to it is! 😅",
  "url": "https://kd-singh-dev.github.io",
  "baseUrlIssueBanner": false,
  "baseUrl": "/",
  "onBrokenLinks": "ignore",
  "favicon": "img/kd.png",
  "organizationName": "kd-singh-dev",
  "projectName": "kd-singh-dev.github.io",
  "themes": [
    "@docusaurus/theme-live-codeblock"
  ],
  "scripts": [
    {
      "src": "https://snack.expo.io/embed.js",
      "async": true
    }
  ],
  "plugins": [
    "docusaurus-plugin-sass"
  ],
  "customFields": {
    "copyright": "Created with 💜 in India     |    Copyright © 2024 <a target=\"_blank\" href=\"https://twitter.com/karandchandi\">Karandeep Singh</a>",
    "meta": {
      "title": "Let's code",
      "image": "/img/kd.png",
      "description": "Hi I am karandeep Singh a young passionate developer.",
      "color": "#6c69a0"
    },
    "domain": "https://kd-singh-dev.github.io",
    "githubOrgUrl": "https://github.com/kd-singh-dev",
    "githubUrl": "https://github.com/kd-singh-dev",
    "githubDocsUrl": "https://github.com/kd-singh-dev/documentation",
    "npmCoreUrl": "https://www.npmjs.com/package/@agile-ts/core",
    "instagram": "https://www.instagram.com/karandeepsingh_chandi/",
    "stackoverflowUrl": "https://stackoverflow.com/questions/tagged/agile-ts",
    "twitterUrl": "https://twitter.com/karandchandi",
    "redditUrl": "https://www.reddit.com/r/AgileTs/",
    "GitStats": "https://gitstats.me/kdsinghcoder",
    "version": "0.0.1",
    "announcementBar": {
      "id": "announcement",
      "content": [
        "❓ If you have any questions, don't hesitate simply email me <a href=\"mailto:kdsingh.contact@gmail.com\">Click here</a> ️",
        "🎉 !️If you like my work, connect with me on <a href=\"https://www.linkedin.com/in/karandeep-singh-018155157/\">Linkedin</a>",
        "⏰ I love working on Projects, check them out  <a href=\"http://kdsingh.me/docs/intro\">Here</a>"
      ],
      "random": false,
      "interval": 100000
    },
    "liveCodeScope": {}
  },
  "themeConfig": {
    "hideableSidebar": false,
    "algolia": {
      "apiKey": "6b7b98565bb82e16996fd185f378d618",
      "indexName": "agile-ts",
      "contextualSearch": false,
      "appId": "BH4D9OD16A",
      "searchParameters": {}
    },
    "colorMode": {
      "defaultMode": "dark",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "image": "/img/kd.png",
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "navbar": {
      "title": " ",
      "hideOnScroll": true,
      "logo": {
        "alt": "My Site Logo",
        "src": "img/kd.png"
      },
      "items": [
        {
          "label": "About",
          "position": "left",
          "to": "/docs/introduction/"
        },
        {
          "label": "Projects",
          "position": "left",
          "items": [
            {
              "label": "all",
              "to": "/docs/intro"
            },
            {
              "label": "Get Bus",
              "to": "/docs/getbus"
            },
            {
              "label": "DocStream ❤",
              "to": "/docs/docstream"
            },
            {
              "label": "GIT CLI 💻",
              "to": "/docs/gitcli"
            },
            {
              "label": "Say Hello 👋",
              "to": "/docs/sayhello"
            },
            {
              "label": "Bond Mantainer 👩🏼‍🤝",
              "to": "/docs/bondmantainer"
            },
            {
              "label": "Travel Buddy 🚄",
              "to": "/docs/travelbuddy"
            },
            {
              "label": "Insta Bot 🤖",
              "to": "/docs/instabot"
            },
            {
              "label": "YouTube API",
              "to": "/docs/youtubeapi"
            }
          ]
        },
        {
          "label": "Profiles",
          "position": "left",
          "items": [
            {
              "label": "LinkedIn",
              "href": "https://www.linkedin.com/in/karandeep-singh-018155157/"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/kd-singh-dev"
            },
            {
              "label": "Instagram",
              "href": "https://www.instagram.com/karandeepsingh_chandi/"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/karandchandi"
            },
            {
              "label": "Git Stats",
              "href": "https://gitstats.me/kdsinghcoder"
            },
            {
              "label": "geeksforgeeks",
              "href": "https://auth.geeksforgeeks.org/user/kdsinghcoder/profile"
            },
            {
              "label": "CodeChef",
              "href": "https://www.codechef.com/users/karandsingh"
            }
          ]
        },
        {
          "label": "Resume",
          "position": "right",
          "href": "https://kd-singh-dev.github.io/KarandeepSingh.pdf"
        }
      ]
    },
    "footer": {
      "copyright": "Created with 💜 in India     |    Copyright © 2024 <a target=\"_blank\" href=\"https://twitter.com/karandchandi\">Karandeep Singh</a>",
      "style": "dark",
      "links": [
        {
          "title": "About",
          "items": [
            {
              "label": "Introduction",
              "to": "docs/introduction"
            },
            {
              "label": "Resume",
              "href": "https://kd-singh-dev.github.io/KarandeepSingh.pdf"
            }
          ]
        },
        {
          "title": "Projects",
          "items": [
            {
              "label": "all",
              "to": "/docs/intro"
            },
            {
              "label": "DocStream ❤",
              "to": "/docs/docstream"
            },
            {
              "label": "Say Hello 👋",
              "to": "/docs/sayhello"
            },
            {
              "label": "Bond Mantainer 👩🏼‍🤝",
              "to": "/docs/bondmantainer"
            },
            {
              "label": "Travel Buddy 🚄",
              "to": "/docs/travelbuddy"
            },
            {
              "label": "Insta Bot 🤖",
              "to": "/docs/instabot"
            },
            {
              "label": "YouTube API",
              "to": "/docs/youtubeapi"
            }
          ]
        },
        {
          "title": "Profiles",
          "items": [
            {
              "label": "GitHub",
              "href": "https://github.com/kd-singh-dev"
            },
            {
              "label": "Instagram",
              "href": "https://www.instagram.com/karandeepsingh_chandi/"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/karandchandi"
            },
            {
              "label": "Git Stats",
              "href": "https://gitstats.me/kdsinghcoder"
            },
            {
              "label": "geeksforgeeks",
              "href": "https://auth.geeksforgeeks.org/user/kdsinghcoder/profile"
            },
            {
              "label": "CodeChef",
              "href": "https://www.codechef.com/users/karandsingh"
            }
          ]
        }
      ]
    },
    "googleAnalytics": {
      "trackingID": "UA-189394644-1",
      "anonymizeIP": true
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "liveCodeBlock": {
      "playgroundPosition": "bottom"
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "path": "docs",
          "admonitions": {
            "icons": "emoji"
          },
          "sidebarPath": "/Users/vc/Code/Personal/kd-singh-dev.github.io/sidebars.js",
          "editUrl": "https://github.com/kd-singh-dev/documentation/tree/develop",
          "showLastUpdateAuthor": false,
          "showLastUpdateTime": true,
          "remarkPlugins": [
            [
              null,
              {
                "sync": true
              }
            ]
          ]
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/kd-singh-dev/documentation/tree/develop"
        },
        "theme": {
          "customCss": [
            "/Users/vc/Code/Personal/kd-singh-dev.github.io/src/css/custom.scss"
          ]
        }
      }
    ]
  ],
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onBrokenMarkdownLinks": "warn",
  "onDuplicateRoutes": "warn",
  "titleDelimiter": "|",
  "noIndex": false
};