const isDev = process.env.NODE_ENV !== 'production'

export default {
  mode: 'universal',
  server: {
    port: 3401
  },
  /*
  ** Headers of the page
  */
  head: {
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
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#85ce61' },
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
    '/api': isDev ? 'http://localhost:3400' : 'http://adat.test',
    '/public': isDev ? 'http://localhost:3400' : 'http://adat.test'
  },
  auth: {
    redirect: {
      login: '/admin'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/login', method: 'post', propertyName: 'token' },
          user: { url: '/auth/user', method: 'get', propertyName: 'user' },
          logout: false
        },
        tokenRequired: true,
        tokenName: 'access_token',
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
