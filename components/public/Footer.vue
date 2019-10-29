<template>
  <div class="footer">
    <div class="flex flex-col justify-between mb-12 lg:flex-row">
      <nuxt-link :to="localePath('index')">
        <span class="font-bold text-4xl">
          <span>ADAT</span>.kg
        </span>
        <p class="text-xs text-gray-500">
          {{ $t('footer.logo') }}
        </p>
      </nuxt-link>

      <div class="flex flex-col mb-4 uppercase font-bold">
        <nuxt-link class="mb-4" :to="localePath('advertising')">
          {{ $t('footer.advertising') }}
        </nuxt-link>
        <nuxt-link class="mb-4" :to="localePath('contacts')">
          {{ $t('footer.contacts') }}
        </nuxt-link>
        <nuxt-link :to="localePath('rules')">
          {{ $t('footer.rules') }}
        </nuxt-link>
      </div>

      <div class="flex flex-col lg:flex-row">
        <div class="flex flex-col mr-8">
          <nuxt-link class="mb-4" :to="localePath({ name: 'categories-slug', params: { slug: 'politika' } })">
            <span class="tag">
              {{ $t('rubrics.politics') }}
            </span>
          </nuxt-link>
          <nuxt-link class="mb-4" :to="localePath({ name: 'categories-slug', params: { slug: 'ekonomika' } })">
            <span class="tag">
              {{ $t('rubrics.economics') }}
            </span>
          </nuxt-link>
          <nuxt-link class="mb-4" :to="localePath({ name: 'categories-slug', params: { slug: 'v-mire' } })">
            <span class="tag">
              {{ $t('rubrics.world') }}
            </span>
          </nuxt-link>
          <nuxt-link class="mb-4" :to="localePath({ name: 'categories-slug', params: { slug: 'analitika' } })">
            <span class="tag">
              {{ $t('rubrics.analytics') }}
            </span>
          </nuxt-link>
        </div>

        <div class="flex flex-col">
          <nuxt-link class="mb-4" :to="localePath({ name: 'categories-slug', params: { slug: 'obshchestvo' } })">
            <span class="tag">
              {{ $t('rubrics.society') }}
            </span>
          </nuxt-link>
          <nuxt-link class="mb-4" :to="localePath({ name: 'categories-slug', params: { slug: 'nacionalnyy-interes' } })">
            <span class="tag">
              {{ $t('rubrics.nationalInterest') }}
            </span>
          </nuxt-link>
          <nuxt-link class="mb-4" :to="localePath({ name: 'categories-slug', params: { slug: 'sport' } })">
            <span class="tag">
              {{ $t('rubrics.sports') }}
            </span>
          </nuxt-link>
          <nuxt-link class="mb-4" :to="localePath({ name: 'categories-slug', params: { slug: 'video' } })">
            <span class="tag">
              {{ $t('rubrics.videos') }}
            </span>
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
        © {{ $t('footer.rights') }} {{ new Date().getFullYear() }}
      </div>

      <div class="flex flex-col w-full lg:flex-row lg:w-auto">
        <nuxt-link class="mr-8" :to="localePath('privacy')">
          {{ $t('footer.privacy') }}
        </nuxt-link>
        <nuxt-link class="mr-8" :to="localePath('advertising')">
          {{ $t('footer.advertising') }}
        </nuxt-link>
        <nuxt-link :to="localePath('contact-us')">
          {{ $t('footer.contactUs') }}
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
