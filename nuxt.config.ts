// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-04-08',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@element-plus/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  eslint: {
    config: {
      standalone: false,
    },
  },
})
