<template>
  <div class="flex flex-col lg:flex-row justify-between">
    <div
      v-for="item in posts"
      :key="item.id"
      class="news-block mt-8 h-56 w-full lg:w-3/12"
      :style="style(item)"
    >
      <nuxt-link :to="localePath({ name: 'posts-slug', params: { slug: item[$t('slug')] } })">
        <div class="news-block__info">
          <span class="tag">
            {{ item.rubrics[0][$t('title')] }}
          </span>
          <div class="news-block__title">
            {{ item[$t('title')] }}
          </div>
        </div>
      </nuxt-link>
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
    this.isPublic = true
    this.postPageSize = 3
    if (this.rubric) {
      this.category = this.rubric[this.$t('slug')]
    }

    this.fetchPosts()
  }
}
</script>

<style lang="scss" scoped>
.news-block {
  &__info {
    @apply flex flex-col justify-center h-full p-4 text-center;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .5), rgba(0, 0, 0, 0));
  }

  .tag {
    @apply self-center;
  }

  &__title {
    @apply uppercase text-white font-bold mt-6 w-full;
  }
}
</style>
