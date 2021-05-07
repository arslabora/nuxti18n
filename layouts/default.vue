<template>
  <div class="antialiased text-gray-900">
    <div
      class="px-4 py-10 max-w-3xl mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl"
    >
      <article>
        <h1 class="sr-only">Nuxt + Tailwind CSS Typography</h1>
        <div class="space-y-10 sm:space-y-12 lg:space-y-20 xl:space-y-24">
          <div class="space-y-10 sm:space-y-0 sm:flex sm:items-center sm:justify-between">
            <TailwindTypoLogo/>
            <div>
              <a
                href="https://github.com/tailwindcss/typography"
                class="inline-flex items-center py-2 px-3 space-x-2 rounded-md bg-gray-800 text-gray-300 text-sm leading-5 font-medium shadow-lg hover:bg-gray-700 transition ease-in-out duration-100"
              >
                <GitHubLogo/>
                <span>View on GitHub</span>
              </a>
            </div>
          </div>
          <Nuxt/>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Nuxt Content with TailwindCSS Typography",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Demonstration of a NuxtJS application with Content module and TailwindCSS Typography plugin."
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  }
};
</script>
