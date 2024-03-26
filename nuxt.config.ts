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
  },
  //...
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
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
  //font
  webfontloader: {
    google: {
      families: ["DM+Sans:wght@400;500;600&display=swap"]
    }
  },
  //vuetify
  vuetify: {
    // customVariables: ["~/assets/variables.scss"],
    defaultAssets: {
      font: {
        family: "DM Sans",
        size: 15,
      },
    },
    treeShake: true,
    theme: {
      light: true,
      // themes: {
      //   light: {
      //     primary: colors.deepPurple.darken1,
      //     bg: "#ffffff",
      //     surface: "#ffffff",
      //     accent: colors.grey.darken3,
      //     secondary: colors.amber.darken3,
      //     info: colors.teal.lighten1,
      //     warning: colors.amber.base,
      //     error: colors.deepOrange.accent4,
      //     success: colors.green.accent3,
      //   },
      //   dark: {
      //     primary: colors.deepPurple.darken1,
      //     bg: "#0a0514",
      //     surface: "#130a24",
      //     accent: colors.grey.darken3,
      //     secondary: colors.amber.darken3,
      //     info: colors.teal.lighten1,
      //     warning: colors.amber.base,
      //     error: colors.deepOrange.accent4,
      //     success: colors.green.accent3,
      //   },
      // },
    },
  },
})

