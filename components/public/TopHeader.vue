<template>
  <div class="flex flex-wrap justify-between py-1 text-white text-xs" style="background-color: #171717;">
    <div class="flex">
      <div class="mr-4 flex items-center">
        <span class="mr-2 text-sm">$</span>
      </div>
      <div class="mr-4 flex items-center">
        <span class="mr-2 text-sm">€</span>
      </div>
      <div class="mr-4 flex items-center">
        <span class="mr-2 text-sm">₽</span>
      </div>
      <div class="mr-4 flex items-center">
        <span class="mr-2 text-sm">₸</span>
      </div>
    </div>

    <div class="flex">
      <div class="flex mr-12 font-bold">
        <nuxt-link class="mr-4" :to="switchLocalePath('ru')">
          <div class="flex items-center">
            <img class="mr-2" src="/flag1.png">
            РУ
          </div>
        </nuxt-link>
        <nuxt-link :to="switchLocalePath('kg')">
          <div class="flex items-center">
            <img class="mr-2" src="/flag2.png">
            КГ
          </div>
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

</style>
