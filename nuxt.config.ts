// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    'nuxt-icon',
    '@formkit/auto-animate/nuxt',
  ],
  plugins: [
    { src: '~/plugins/aos.ts', mode: 'client' }
  ],
  
})
