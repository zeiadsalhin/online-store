// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // components,
    // directives,
    theme: {
        defaultTheme: localStorage.getItem("scheme") ||'dark',
    },
    display: {
        mobileBreakpoint: 'xl',
        thresholds: {
            xs: 0,
            sm: 340,
            md: 540,
            lg: 800,
            xl: 1280,
        },
    },
  })
  app.vueApp.use(vuetify)
})
