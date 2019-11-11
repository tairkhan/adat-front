<template>
  <div>
    <div
      v-for="(item, i) in posts"
      :key="i"
      class="mt-8"
    >
      <div class="mb-2 text-gray-800 text-sm">
        <span class="font-bold">АДАТ</span> - {{ $dayjs(item.created_at).format('ll') }}
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
import PostMixin from '@/mixins/PostMixin'

export default {
  mixins: [PostMixin],
  props: {
    rubric: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  created () {
    this.postPageSize = 4
    if (this.rubric) {
      this.category = this.rubric[this.$t('slug')]
    }
    this.status = 'published'

    this.fetchPosts()
  }
}
</script>

<style lang="scss" scoped>

</style>
