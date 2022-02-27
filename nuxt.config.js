import i18n from './config/i18n';

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'The history of Whoo, Traditional Korean Royal Beauty Secrets | Hong Kong',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'google-site-verification', content: 'xO501DUCqKZBgBP36M2kSeeOFRIkg16p7GVJdJacOGQ' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/logo_icon.png' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@100;300;400;500;700;900&family=Noto+Sans+TC:wght@100;300;400;500;700;900&family=Noto+Serif+SC:wght@200;300;400;500;600;700;900&family=Noto+Serif+TC:wght@200;300;400;500;600;700;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/css/main.scss',
    ],

    // Share variables, mixins, functions across all style files: https://www.npmjs.com/package/@nuxtjs/style-resources
    styleResources: {
        scss: [
            'bootstrap/scss/_functions.scss',
            'bootstrap/scss/_variables.scss',
            'bootstrap/scss/_mixins.scss',
            'swiper/css/swiper.css',
            '@/assets/css/_variables.scss',
            '@/assets/css/_global.scss',
            '@/assets/css/_header.scss',
            '@/assets/css/_footer.scss',
            '@/assets/css/_landing.scss',
            '@/assets/css/_listing.scss',
            '@/assets/css/_detail.scss',
            '@/assets/css/_news.scss',
            '@/assets/css/_aboutwhoo.scss',
            '@/assets/css/_popup.scss',
        ],
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/axios.js',
        {
            src: '~/plugins/vue-gtag',
            mode: 'client',
        },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
    // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        '@nuxtjs/fontawesome',
        // '@nuxtjs/gtm',
        '@nuxtjs/style-resources',
        'nuxt-i18n',
        'vue-social-sharing/nuxt',
        'nuxt-facebook-pixel-module',
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    },

    // auth: {
    //     plugins: ['~/plugins/auth.js'],
    //     strategies: {
    //         local: {
    //             endpoints: {
    //                 login: {
    //                     url: '/api/auth/login',
    //                     method: 'post',
    //                     withCredentials: true,
    //                     headers: {
    //                         'X-Requested-With': 'XMLHttpRequest',
    //                         'Content-Type': 'application/json',
    //                     },
    //                 },
    //                 user: {
    //                     url: '/api/auth/user',
    //                     method: 'get',
    //                     propertyName: false,
    //                     withCredentials: true,
    //                     headers: {
    //                         'X-Requested-With': 'XMLHttpRequest',
    //                         'Content-Type': 'application/json',
    //                     },
    //                 },
    //                 logout: {
    //                     url: '/api/auth/logout',
    //                     method: 'post',
    //                     propertyName: false,
    //                     withCredentials: true,
    //                     headers: {
    //                         'X-Requested-With': 'XMLHttpRequest',
    //                         'Content-Type': 'application/json',
    //                     },
    //                 },
    //             },
    //             tokenRequired: false,
    //             tokenType: false,
    //         },
    //     },
    //     redirect: {
    //         login: '/login',
    //         logout: '/',
    //         callback: '/member',
    //         home: '/member', // home page for members
    //     },
    // },

    // Axios module configuration: https://axios.nuxtjs.org/options
    axios: {
        baseURL: process.env.API_URL,
        credentials: true,
        proxy: process.env.PROXY,
        proxyHeaders: process.env.PROXY,
    },
    proxy: {
        '/api/': {
            target: process.env.API_URL,
        },
        '/sanctum/': {
            target: process.env.API_URL,
        },
    },

    // Loading: https://nuxtjs.org/docs/2.x/features/loading/
    loading: '~/components/Loading.vue',

    // Environment variables: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-env/
    env: {
    },

    // Nuxt i18n module: https://i18n.nuxtjs.org
    i18n,

    // Font awesome: https://fontawesome.com/
    fontawesome: {
        component: 'fa',
        icons: {
            // fa + PascalCase of the component name, e.g. faLock, faSignInAlt
            solid: [ // from @fortawesome/free-solid-svg-icons
                'faLock',
                'faCheck',
            ],
            brands: [ // from @fortawesome/free-brands-svg-icons
                'faVuejs',
            ],
        },
    },

    facebook: {
        /* module options */
        pixelId: '228496524889365',
        autoPageView: true,
    },

    // Google Tag Manager: https://github.com/nuxt-community/gtm-module
    // gtm: {
    //   id: 'GTM-XXXXXXX',
    //   debug: true,
    // },

    // Server configuration: https://nuxtjs.org/docs/2.x/features/configuration#edit-host-and-port
    server: {
        port: process.env.PORT,
    },

    // Ignore debug routes: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-ignore/
    ignore: process.env.NODE_ENV !== 'production' ? [] : [
        'debug',
    ],
};
