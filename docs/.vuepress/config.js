module.exports = {
    base: '/nuxt-neo/',
    locales: {
        '/': {
            lang: 'en-us',
            title: 'Nuxt Neo',
            description: 'A nuxt.js module that implements a universal api layer, same-way compatible between server and client side.'
        }
    },
    themeConfig: {
        repo: 'ezypeeze/nuxt-neo',
        locales: {
            '/': {
                nav: [
                    {
                        text: 'Languages',
                        items: [
                            { text: 'English', link: '/' },
                        ]
                    }
                ],
                sidebar: [
                    ['/', 'Intro'],
                    ['/getting-started', 'Getting Started'],
                    ['/work-flow-usage', 'Work flow Usage'],
                    ['/api-module', 'API Module'],
                    ['/services-module', 'Services Module']
                ],
            }
        }
    }
};