<template>
  <div class="flex flex-col lg:flex-row">
    <div class="w-full mt-8 lg:mr-8">
      <div
        v-for="(item, i) in posts"
        :key="i"
      >
        <div v-if="i === 0">
          <nuxt-link :to="localePath({ name: 'posts-slug', params: { slug: item[$t('slug')] } })">
            <div class="news-block w-full" style="height: 18rem;" :style="style(item)">
              <div class="news-block__info">
                <span class="tag">{{ item.rubrics[0][$t('title')] }}</span>
              </div>
            </div>

            <h3 class="mt-5 uppercase">
              {{ item[$t('title')] }}
            </h3>

            <div class="my-2 text-gray-800 text-sm">
              <span class="font-bold">АДАТ</span> {{ $dayjs(item.created_at).format('ll') }}
            </div>

            <p v-html="excerpt(item[$t('content')])"></p>
          </nuxt-link>
        </div>
      </div>
    </div>

    <div class="flex flex-col w-full">
      <div
        v-for="(item, i) in posts"
        :key="i"
      >
        <nuxt-link v-if="i !== 0" :to="localePath({ name: 'posts-slug', params: { slug: item[$t('slug')] } })">
          <div class="flex mt-8">
            <div class="w-32 h-24 mr-5" :style="style(item)"></div>
            <div class="flex-1">
              <h3>
                {{ item[$t('title')] }}
              </h3>
              <div class="my-2 text-gray-800 text-sm">
                <span class="font-bold">АДАТ</span> {{ $dayjs(item.created_at).format('ll') }}
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
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
    this.postPageSize = 5
    if (this.rubric) {
      this.category = this.rubric[this.$t('slug')]
    }
    this.status = 'published'

    this.fetchPosts()
  }
}
</script>

<style lang="scss" scoped>
.news-block {
  &__info {
    @apply flex flex-col justify-end h-full p-4;
  }

  .tag {
    @apply self-start;
  }
}
</style>
