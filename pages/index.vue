<template>
  <NuxtContent
    class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
    :document="document"
  />
</template>

<script>
export default {
  async asyncData({ $content }) {
    const document = await $content("hello").fetch();

    return { document };
  }
};
</script>
