require('dotenv').config()

export default {
  generate: {
    dir: 'public',
    fallback: '404.html',
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    PW: process.env.PW,
    EMAIL: process.env.EMAIL,
    RECAPTCHA_KEY: process.env.RECAPTCHA_KEY,
    RECAPTCHA_KEY_LOCAL: process.env.RECAPTCHA_KEY_LOCAL,
    BASE_URL_STRAPI: process.env.BASE_URL_STRAPI,
    AUTH_USERNAME: process.env.AUTH_USERNAME,
    AUTH_PASSWORD: process.env.AUTH_PASSWORD
  },
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: '/assets/fav/ms-icon-70x70.png' },
      { name: 'msapplication-TileImage', content: '/assets/fav/ms-icon-310x310.png' },
      { name: 'msapplication-TileImage', content: '/assets/fav/ms-icon-144x144.png' },
      { name: 'msapplication-TileImage', content: '/assets/fav/ms-icon-150x150.png' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/assets/fav/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/assets/fav/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/assets/fav/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/assets/fav/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/assets/fav/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/assets/fav/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/assets/fav/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/assets/fav/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/fav/apple-icon-180x180.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/assets/fav/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/fav/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/assets/fav/favicon-96x96.png' },
      { rel: 'manifest', href: '/assets/fav/manifest.json' },
    ],
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => ['script', 'style'].includes(type),
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/lazyLoadingImages.client.js'
  ],
  // server middleware
  serverMiddleware: [
    '~/api/mailer',
    'redirect-ssl'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/recaptcha',
    '@nuxtjs/component-cache',
    '@nuxtjs/strapi',
  ],

  basic: {
    name: process.env.AUTH_USERNAME,
    pass: process.env.AUTH_PASSWORD,
    enabled: process.env.NODE_ENV === 'staging'
  },

  recaptcha: {
    hideBadge: true, // Hide badge element (v3 & v2 via size=invisible)
    siteKey: process.env.NODE_ENV === 'production' ? process.env.RECAPTCHA_KEY : process.env.RECAPTCHA_KEY_LOCAL, // Site key for requests
    version: 3, // Version
    size: 'invisible' // Size: 'compact', 'normal', 'invisible' (v2)
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
   // eslint-disable-next-line no-unused-vars
   extend(config, {isDev, _isClient}) {
   }
  }
}
