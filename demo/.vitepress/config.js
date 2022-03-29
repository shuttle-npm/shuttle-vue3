const getBase = require('shuttle-theme/config')
const path = require('path')

module.exports = (async () => {
  const base = await getBase()
  return {
    ...base,

    vite: {
      ...base.vite,
      resolve: {
        alias: {
          '@': path.join(__dirname, '../../src')
        }
      },
      build: {
        minify: false
      },
    },

    lang: 'en-US',
    title: 'Shuttle Vue',
    description: 'Shuttle Vue 3 UI components built with Tailwind.',

    head: [
        ...base.head,
        ['link', { rel: "shortcut icon", href: "/favicon.ico" }]
    ],

    themeConfig: {
    //   algolia: {
    //     indexName: 'shuttle-identifier',
    //     appId: '',
    //     apiKey: ''
    //   },

    //   carbonAds: {
    //     code: '',
    //     placement: ''
    //   },

      socialLinks: [
        { icon: 'github', link: 'https://github.com/shuttle-npm/shuttle-vue3' },
        // { icon: 'twitter', link: '' },
        // { icon: 'discord', link: '' }
      ],

      nav: [
        {
          text: 'Components',
          activeMatch: `^/components/`,
          link: '/components/overview'
        },
      ],

      sidebar: {
        '/components/': [
          {
            text: 'Components',
            items: [
              { 
                  text: 'Alerts', 
                  link: '/components/alerts' 
                },
            ]
          },
        ],
      }
    }
  }
})()
