// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [{
    path: "~/src/components"
  }],
  devServer: {
    port: 7777
  }
  
})
