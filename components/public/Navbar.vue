<template>
  <div class="navbar">
    <nuxt-link class="navbar__link" :to="localePath('index')">
      {{ $t('rubrics.main') }}
    </nuxt-link><!--
    --><nuxt-link class="navbar__link" :to="localePath({ name: 'categories-slug' })">
      {{ $t('rubrics.all') }}
    </nuxt-link><!--
    --><nuxt-link class="navbar__link" :to="localePath({ name: 'categories-slug', params: { slug: 'politika' } })">
      {{ $t('rubrics.politics') }}
    </nuxt-link><!--
    --><nuxt-link class="navbar__link" :to="localePath({ name: 'categories-slug', params: { slug: 'ekonomika' } })">
      {{ $t('rubrics.economics') }}
    </nuxt-link><!--
    --><nuxt-link class="navbar__link" :to="localePath({ name: 'categories-slug', params: { slug: 'video' } })">
      {{ $t('rubrics.videos') }}
    </nuxt-link><!--
    --><nuxt-link class="navbar__link" :to="localePath({ name: 'categories-slug', params: { slug: 'v-mire' } })">
      {{ $t('rubrics.world') }}
    </nuxt-link><!--
    --><nuxt-link class="navbar__link" :to="localePath({ name: 'categories-slug', params: { slug: 'sport' } })">
      {{ $t('rubrics.sports') }}
    </nuxt-link><!--
    --><nuxt-link class="navbar__link" :to="localePath({ name: 'categories-slug', params: { slug: 'obshchestvo' } })">
      {{ $t('rubrics.society') }}
    </nuxt-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.navbar {
  &__link {
    @apply relative inline-block py-4 mr-8 text-sm font-bold uppercase;

    &::before {
      @apply absolute bottom-0 left-0 border-b border-2 border-red-600 w-full;
      content: '';
      transform: scaleX(0);
    }
  }

  &__link:hover::before,
  .nuxt-link-exact-active::before {
    transform: scaleX(1);
    transition: .2s;
  }
}

</style>
