<template>
  <div>
    <div class="border-b-2 border-red-600">
      <h3 class="category">
        {{ $t('rubrics.society') }}
      </h3>
    </div>

    <div class="flex flex-col">
      <nuxt-link
        v-for="(item, i) in results"
        :key="i"
        :to="localePath({ name: 'posts-slug', params: { slug: item[$t('slug')] } })"
      >
        <div class="flex my-5">
          <img :src="item.cover_image_url" class="w-32 h-24 border mr-2 border">
          <div>
            <h3>
              {{ item[$t('title')] }}
            </h3>
            <div class="text-sm">
              <span class="font-bold">АДАТ</span> - <span>{{ $dayjs(item.created_at).format('DD MM YYYY') }}</span>
            </div>
          </div>
        </div>
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
