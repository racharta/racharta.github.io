// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "nuxt-icon", "@formkit/auto-animate/nuxt", 'nuxt-appwrite'],
  plugins: [
    { src: "~/plugins/aos.ts", mode: "client" },
    "~/plugins/analitic.vercel.ts",
  ],
  appwrite: {
    endpoint: "https://cloud.appwrite.io/v1",
    project: "6586c19f4f5198afb506",
  }
});
