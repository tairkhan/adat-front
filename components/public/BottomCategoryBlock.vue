<template>
  <div class="flex flex-wrap">
    <div
      v-for="(item, i) in posts"
      :key="i"
      class="mt-8 border-white lg:border-r-8 w-full lg:w-1/3"
    >
      <nuxt-link :to="localePath({ name: 'posts-slug', params: { slug: item[$t('slug')] } })">
        <h3 class="mb-2">
          {{ item[$t('title')] }}
        </h3>
      </nuxt-link>

      <div class="mb-2 text-gray-800 text-sm">
        <span class="font-bold">АДАТ</span> - {{ $dayjs(item.created_at).format('ll') }}
      </div>

      <p v-html="excerpt(item[$t('content')])"></p>
    </div>
  </div>
</template>

<script>
import Mixin from '@/mixins/Mixin'
import PostMixin from '@/mixins/PostMixin'

export default {
  mixins: [Mixin, PostMixin],
  props: {
    rubric: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  created () {
    this.postPageSize = 6
    if (this.rubric) {
      this.category = this.rubric[this.$t('slug')]
    }

    this.fetchPosts()
  }
}
</script>

<style lang="scss" scoped>

</style>
