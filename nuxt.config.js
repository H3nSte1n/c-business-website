require('dotenv').config()
console.log(process.env.NODE_ENV);

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // render: {
  //   bundleRenderer: {
  //     shouldPrefetch: ()=> {
  //        return false
  //     }
  //   }
  // },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/colors.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/lazyLoadingImages.client.js'
  ],
  // server middleware
  serverMiddleware: [
    '~/api/mailer'
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
  ],
  recaptcha: {
    hideBadge: true, // Hide badge element (v3 & v2 via size=invisible)
    siteKey: process.env.NODE_ENV == 'production' ? process.env.RECAPTCHA_KEY : process.env.RECAPTCHA_KEY_LOCAL, // Site key for requests
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
      const imgTest = '/\\.(png|jpe?g|gif|svg|webp)$/i'

      config.module.rules.forEach(rule => {
        if (String(rule.test) === String(/\.(png|jpe?g|gif|svg|webp)$/)) {
          rule.use.push({
            loader: 'image-webpack-loader',
            options: {
              svgo: {
                plugins: [
                  // https://css-tricks.com/scale-svg/
                  { removeViewBox: false },
                  { removeDimensions: true }
                ]
              }
            }
          })
        }
      })
      config.module.rules = config.module.rules.filter(r => r.test && r.test.toString() !== imgTest)

      // ?sqip: low quality image placeholder
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        oneOf: [
          {
            resourceQuery: new RegExp('sqip'),
            use: [
              {
                loader: 'sqip-loader',
                options: {
                  numberOfPrimitives: 50,
                  mode: 1
                }
              },
              {
                loader: 'url-loader',
                options: {
                  limit: 1000,
                  name: '[path][name].[ext]'
                }
              }
            ],
          },
          {
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 1000,
                  name: '[path][name].[ext]'
                }
              }
            ]
          }
        ]
      })
    }
  }
}
