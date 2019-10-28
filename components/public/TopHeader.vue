<template>
  <div class="top-header">
    <div></div>

    <div class="flex">
      <div class="mr-12">
        <nuxt-link :to="switchLocalePath('ru')">
          РУ
        </nuxt-link>
        <nuxt-link :to="switchLocalePath('kg')">
          КГ
        </nuxt-link>
      </div>

      <div>
        <a class="px-2 py-1" target="_blank" rel="noopener noreferrer" href="https://facebook.com">
          <fa-icon :icon="['fab', 'facebook']" />
        </a>

        <a class="px-2 py-1" target="_blank" rel="noopener noreferrer" href="https://twitter.com">
          <fa-icon :icon="['fab', 'twitter']" />
        </a>

        <a class="px-2 py-1" target="_blank" rel="noopener noreferrer" href="https://vimeo.com">
          <fa-icon :icon="['fab', 'vimeo']" />
        </a>

        <a class="px-2 py-1" target="_blank" rel="noopener noreferrer" href="https://vk.com">
          <fa-icon :icon="['fab', 'vk']" />
        </a>

        <a class="px-2 py-1" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com">
          <fa-icon :icon="['fab', 'youtube']" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.top-header {
  @apply flex justify-between py-1 text-white text-xs;
  background-color: #171717;
}
</style>
