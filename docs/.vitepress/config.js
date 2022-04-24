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

        base: '/shuttle-vue3/',
        lang: 'en-US',
        title: 'Shuttle Vue',
        description: 'Shuttle Vue 3 UI components built with Tailwind.',

        head: [
            ...base.head,
            ['link', { rel: "shortcut icon", href: "/shuttle-vue3/favicon.ico" }],
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
                                text: 'Alert',
                                link: '/components/alert'
                            },
                            {
                                text: 'Button',
                                link: '/components/button'
                            },
                            {
                                text: 'Button Group',
                                link: '/components/button-group'
                            },
                            {
                                text: 'Checkbox',
                                link: '/components/checkbox'
                            },
                            {
                                text: 'Dialog',
                                link: '/components/dialog'
                            },
                            {
                                text: 'Form',
                                link: '/components/form'
                            },
                            {
                                text: 'Input',
                                link: '/components/input'
                            },
                            {
                                text: 'Listbox',
                                link: '/components/listbox'
                            },
                            {
                                text: 'Navbar',
                                link: '/components/navbar'
                            },
                            {
                                text: 'Navigation',
                                link: '/components/navigation'
                            },
                            {
                                text: 'Title',
                                link: '/components/title'
                            },
                            {
                                text: 'Toggle',
                                link: '/components/toggle'
                            },
                        ]
                    },
                    {
                        text: 'Essentials',
                        items: [
                            {
                                text: 'Core Class Objects',
                                link: '/components/core-class'
                            },
                        ]
                    },
                ],
            }
        }
    }
})()
