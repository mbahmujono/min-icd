// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['trpc-nuxt']
  },
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=0",
        },
        {
          charset: "utf-8",
        },
      ]
    },
  },
  css: ["~/assets/css/global.css", "~/assets/css/main.css"],
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',
  modules: ['@nuxt/ui', '@pinia/nuxt', '@nuxtjs/sitemap', 'nuxt-gtag'],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  experimental: {watcher: 'parcel'},
  gtag: {
    id: 'G-9G0SESR7VD'
  }
})