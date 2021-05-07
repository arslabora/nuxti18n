const path = require("path");
const lost = require("lost");

export default {
  target: "static",

  components: true,

  modules: [
    // Doc: https://content.nuxtjs.org
    "@nuxt/content",
    // i18n
    "nuxt-i18n",
    // PostCSS Purge
    "nuxt-purgecss"
  ],

  buildModules: [
    // Doc: https://github.com/nuxt-community/tailwindcss-module
    "@nuxtjs/tailwindcss",
    "@nuxt/postcss8"
  ],

  css: ["~assets/css/tailwind.css"],

  tailwindcss: {
    jit: true,
    container: {
      center: true
    },
    screens: {
      xs: "480px",
      s: "768px",
      m: "1024px",
      l: "1280px",
      xl: "1440px",
      xxl: "1920px"
    }
  },

  i18n: {
    locales: [
      { code: "en", iso: "en-US", file: "en-US", name: "English" },
      { code: "it", iso: "it-IT", file: "it-IT", name: "Italiano" },
      { code: "pt", iso: "pt-BR", file: "pt-BR", name: "Portugues" }
    ],
    defaultLocale: "en",
    strategy: "prefix",
    lazy: true,
    langDir: "locales/",
    seo: true,
    vueI18nLoader: true,
    vueI18n: {
      fallbackLocale: ["en", "pt"]
    }
  },

  build: {
    postcss: {
      plugins: {
        "postcss-import": {},
        tailwindcss: path.resolve(__dirname, "./tailwind.config.js"),
        "postcss-nested": {},
        lost
      }
    }
  }
};
