export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'examensarbete',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Lato&family=Montserrat:wght@200&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  // modules: [
  //   [
  //     // https://go.nuxtjs.dev/bootstrap
  //     'bootstrap-vue/nuxt',
  //     // https://go.nuxtjs.dev/axios
  //     '@nuxtjs/axios',
  //     '@nuxtjs/firebase',

  //     {
  //       config: {
  //         apiKey: 'AIzaSyBRhytF0lJbzRHnGiZzzlU2GwT_TddLWlE',
  //         authDomain: 'examensarbete-f5483.firebaseapp.com',
  //         projectId: 'examensarbete-f5483',
  //         storageBucket: 'examensarbete-f5483.appspot.com',
  //         messagingSenderId: '844886704384',
  //         appId: '1:844886704384:web:14ef102cd7e7c7a5ee73e5',
  //       },
  //       services: {
  //         auth: true,
  //         fireStore: true,
  //       },
  //     },
  //   ],
  // ],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    [
      '@nuxtjs/firebase',

      {
        config: {
          apiKey: 'AIzaSyBRhytF0lJbzRHnGiZzzlU2GwT_TddLWlE',
          authDomain: 'examensarbete-f5483.firebaseapp.com',
          projectId: 'examensarbete-f5483',
          storageBucket: 'examensarbete-f5483.appspot.com',
          messagingSenderId: '844886704384',
          appId: '1:844886704384:web:14ef102cd7e7c7a5ee73e5',
        },
        services: {
          auth: true,
          fireStore: true, // Just as example. Can be any other service.
        },
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
