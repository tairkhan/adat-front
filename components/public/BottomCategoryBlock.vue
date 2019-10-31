<template>
  <div class="flex flex-wrap">
    <div
      v-for="(item, i) in results"
      :key="i"
      class="mt-8 border-white lg:border-r-8 w-full lg:w-1/3"
    >
      <nuxt-link :to="localePath({ name: 'posts-slug', params: { slug: item[$t('slug')] } })">
        <h3 class="mb-2">
          {{ item[$t('title')] }}
        </h3>
      </nuxt-link>

      <div class="mb-2 text-gray-800 text-sm">
        <span class="font-bold">АДАТ</span> - {{ $dayjs(item.created_at).format('DD MM YYYY') }}
      </div>

      <p v-html="extractFirstParagraph(item[$t('content')])"></p>
    </div>
  </div>
</template>

<script>
import Mixin from '@/mixins/Mixin'

export default {
  mixins: [Mixin],
  data () {
    return {
      results: []
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    async fetch () {
      const params = { page_size: 4 }
      const data = await this.$axios.$get('posts', { params })
      this.results = data.results
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
