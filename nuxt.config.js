export default {
  mode: 'universal',
  server: {
    port: 3401
  },
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ADAT.kg',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords', name: 'keywords', content: 'новости, статьи, политика, экономика, события, кыргызстан, средняя азия' },
      { hid: 'description', name: 'description', content: 'Новостной портал Кыргызской Республики' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff', height: '2px' },
  pageTransition: 'page',
  /*
  ** Global CSS
  */
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/main.css'
  ],
  purgeCSS: {
    enabled: false
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/dayjs',
    '@/plugins/fontawesome',
    '@/plugins/element-ui',
    '@/plugins/lodash',
    { src: '@/plugins/editor.js', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'nuxt-i18n'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true,
    prefix: '/api/v1'
  },
  proxy: {
    '/api': 'http://localhost:3400',
    '/public': 'http://localhost:3400'
  },
  auth: {
    redirect: {
      login: '/admin',
      logout: '/admin'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/login', method: 'post', propertyName: 'token' },
          user: { url: '/auth/user', method: 'get', propertyName: 'user' },
          logout: false
        },
        tokenRequired: true,
        tokenType: ''
      }
    },
    plugins: [
      { src: '@/plugins/axios', ssr: true }
    ]
  },
  i18n: {
    locales: [
      { code: 'ru', iso: 'ru-RU', file: 'ru.js' },
      { code: 'kg', iso: 'ky-KG', file: 'kg.js' }
    ],
    defaultLocale: 'ru',
    lazy: true,
    langDir: 'locales/',
    vueI18n: {
      fallbackLocale: 'ru'
    },
    detectBrowserLanguage: {
      fallbackLocale: 'ru'
    }
  },
  eslint: {
    quiet: true
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [
      /^element-ui/,
      'lodash-es'
    ],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
