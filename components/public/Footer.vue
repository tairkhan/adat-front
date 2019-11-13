<template>
  <div class="pt-12 pb-2 text-white text-xs" style="background-color: #171717;">
    <div class="flex flex-col justify-between mb-12 lg:flex-row">
      <nuxt-link to="/" class="self-start leading-tight">
        <span class="font-bold text-4xl">
          ADAT.kg
        </span>
        <p class="text-sm text-white">
          {{ $t('logo') }}
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
          <nuxt-link
            v-for="(item, i) in rubrics"
            :key="i"
            class="mb-4"
            :to="localePath({ name: 'categories-slug', params: { slug: item[$t('slug')] } })"
          >
            <span class="tag">
              {{ item[$t('title')] }}
            </span>
          </nuxt-link>
        </div>

        <div class="flex flex-col">
        </div>
      </div>

      <div>
        <div class="uppercase font-bold">
          {{ $t('footer.social') }}
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
import RubricMixin from '@/mixins/RubricMixin'

export default {
  mixins: [RubricMixin]
}
</script>

<style lang="scss" scoped>

</style>
