<template>
  <div class="flex flex-col">
    <nuxt-link
      v-for="(item, i) in posts"
      :key="i"
      :to="localePath({ name: 'posts-slug', params: { slug: item[$t('slug')] } })"
      class="news-block"
    >
      <div
        v-if="i === 0"
        class="h-64"
        :style="style(item)"
      >
        <div class="news-block__info">
          <div class="w-full text-white font-bold w-full uppercase">
            {{ item[$t('title')] }}
          </div>
          <span class="text-xs text-white mt-4">
            <span class="font-bold">АДАТ</span> {{ $dayjs(item.created_at).format('ll') }}
          </span>
        </div>
      </div>

      <div v-else class="flex">
        <div class="w-32 h-24 mr-5" :style="style(item)"></div>
        <div class="flex-1">
          <h3>
            {{ item[$t('title')] }}
          </h3>
          <div class="my-2 text-gray-800 text-sm">
            <span class="font-bold">АДАТ</span> - {{ $dayjs(item.created_at).format('ll') }}
          </div>
        </div>
      </div>
    </nuxt-link>
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
    this.postPageSize = 4
    if (this.rubric) {
      this.category = this.rubric[this.$t('slug')]
    }

    this.fetchPosts()
  }
}
</script>

<style lang="scss" scoped>
.news-block {
  @apply mt-8;

  &__info {
    @apply flex flex-col justify-end h-full p-4;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .5));
  }
}
</style>
