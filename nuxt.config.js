
export default {
  mode: 'universal',
  server: {
    port: 3000
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
    '@/assets/css/main.scss'
  ],
  purgeCSS: {
    enabled: false
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
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
    '@nuxtjs/auth'
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
    '/api': 'http://localhost:3300',
    '/public': 'http://localhost:3300'
  },
  auth: {
    redirect: {
      login: '/admin/login'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/login', method: 'post', propertyName: 'token' },
          user: { url: '/auth/user', method: 'get', propertyName: 'user' },
          logout: false
        },
        tokenName: 'access_token',
        tokenType: ''
      }
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
