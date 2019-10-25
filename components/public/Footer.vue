<template>
  <div class="footer">
    <div class="flex flex-col justify-between mb-12 lg:flex-row">
      <nuxt-link to="/">
        <span class="font-bold text-4xl">
          <span>ADAT</span>.kg
        </span>
      </nuxt-link>

      <div class="flex flex-col mb-4 uppercase font-bold">
        <nuxt-link class="mb-4" to="/">
          Реклама
        </nuxt-link>
        <nuxt-link class="mb-4" to="/">
          Контакты и сотрудничество
        </nuxt-link>
        <nuxt-link to="/">
          Правила использования
        </nuxt-link>
      </div>

      <div class="flex flex-col lg:flex-row">
        <div class="flex flex-col mr-8">
          <nuxt-link class="mb-4" to="/">
            <span class="tag">Политика</span>
          </nuxt-link>
          <nuxt-link class="mb-4" to="/">
            <span class="tag">Экономика</span>
          </nuxt-link>
          <nuxt-link class="mb-4" to="/">
            <span class="tag">Общество</span>
          </nuxt-link>
          <nuxt-link class="mb-4" to="/">
            <span class="tag">Экономика</span>
          </nuxt-link>
        </div>

        <div class="flex flex-col">
          <nuxt-link class="mb-4" to="/">
            <span class="tag">В мире</span>
          </nuxt-link>
          <nuxt-link class="mb-4" to="/">
            <span class="tag">Спорт</span>
          </nuxt-link>
          <nuxt-link class="mb-4" to="/">
            <span class="tag">Видео</span>
          </nuxt-link>
          <nuxt-link class="mb-4" to="/">
            <span class="tag">Аналитика</span>
          </nuxt-link>
        </div>
      </div>

      <div>
        <div class="uppercase font-bold">
          Мы в соц. сетях
        </div>

        <div class="inline-block bg-gray-900 mt-2">
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

    <div class="flex flex-wrap justify-between text-gray-500">
      <div>
        © Все права защищены {{ new Date().getFullYear() }}
      </div>

      <div class="flex flex-col w-full lg:flex-row lg:w-auto">
        <nuxt-link class="mr-8" to="/">
          Конфиденциальность
        </nuxt-link>
        <nuxt-link class="mr-8" to="/">
          Реклама
        </nuxt-link>
        <nuxt-link to="/">
          Связаться с нами
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer {
  @apply bg-black pt-12 pb-2 text-white text-xs;
  background-color: #171717;
}
</style>
