<template>
  <div>
    <div
      v-for="(item, i) in results"
      :key="i"
      class="mt-8"
    >
      <div class="mb-2 text-gray-800 text-sm">
        <span class="font-bold">АДАТ</span> - {{ $dayjs(item.created_at).format('DD MM YYYY') }}
      </div>
      <nuxt-link :to="localePath({ name: 'posts-slug', params: { slug: item[$t('slug')] } })">
        <p class="text-sm">
          {{ item[$t('title')] }}
        </p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
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
