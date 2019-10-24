<template>
  <div class="flex justify-between p-1 bg-black text-white text-xs">
    <div></div>

    <div class="flex">
      <div class="mr-12">
        <span>РУ</span>
        <span>КГ</span>
      </div>

      <div>
        <a class="ml-3" target="_blank" rel="noopener noreferrer" href="https://facebook.com">
          <fa-icon :icon="['fab', 'facebook']" />
        </a>

        <a class="ml-3" target="_blank" rel="noopener noreferrer" href="https://twitter.com">
          <fa-icon :icon="['fab', 'twitter']" />
        </a>

        <a class="ml-3" target="_blank" rel="noopener noreferrer" href="https://vimeo.com">
          <fa-icon :icon="['fab', 'vimeo']" />
        </a>

        <a class="ml-3" target="_blank" rel="noopener noreferrer" href="https://vk.com">
          <fa-icon :icon="['fab', 'vk']" />
        </a>

        <a class="ml-3" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com">
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

</style>
