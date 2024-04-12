import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  ssr: false, 
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'E-Commerce',
  meta: [
    { name: 'description', content: 'Welcome to latest E-commerce platform with Safest and Secured Payment and Global Shipping' }
  ],
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  css: [`assets/css/main.css`],
  //...
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/content',
    '@pinia/nuxt',
    // '@nuxtjs/supabase',
    'nuxt-paypal',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  paypal: {
    clientId: import.meta.env.PAYPAL,
  },
  // supabase: {
  //   // Options
  //   redirectOptions: {
  //     login: '/login',
  //     callback: '/confirm',
  //     include: ['/cart'],
  //     exclude: [],
  //     cookieRedirect: false,
  //   }
  // }
  // font
  // googleFonts: {
  //   families: {
  //     Roboto: [300, 400, 900],
      
  //   },
  //   display: 'swap'
  // },
})

