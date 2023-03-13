export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt_ehr',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // router middleware will be called for every route change.
  router: {
    middleware: 'auth'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/common.less',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/request',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxtjs/style-resources',
    '@nuxt/typescript-build',
  ],

  styleResources: {
    less: '@/assets/css/vars.less' // 设置全局less变量
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios', // nuxt上下文会多出 $axios 变量
    '@nuxtjs/proxy',
    'cookie-universal-nuxt' // nuxt上下文会多出 $cookies 变量
  ],
  axios: {
    proxy: true,
    credential: true
  },
  proxy: {
    '/api/': {
      target: 'http://localhost:3333/',
      pathRewrite: {
        '^/api/': '/',
        changeOrigin: true
      }
    }
  },

  loading: '@/components/loading',

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  }
}
