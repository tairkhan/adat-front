<template>
  <div>
    <h1 class="mb-6">
      {{ title }}
    </h1>

    <div class="flex flex-wrap">
      <nuxt-link
        v-for="(item, i) in posts"
        :key="i"
        :to="localePath({ name: 'posts-slug', params: { slug: item[$t('slug')] } })"
        class="mb-12 md:mr-4 lg:mr-4 w-full md:w-5/12 lg:w-3/12"
      >
        <div class="news-block w-full" style="height: 18rem;" :style="style(item)">
          <div v-if="!rubric" class="news-block__info">
            <span class="tag">{{ item.rubrics[0][$t('title')] }}</span>
          </div>
        </div>

        <h3 class="mt-5 uppercase">
          {{ item[$t('title')] }}
        </h3>

        <p class="my-2 text-gray-800">
          <span class="font-bold">Адат</span> {{ $dayjs(item.created_at).format('ll') }}
        </p>

        <p v-html="excerpt(item[$t('content')])"></p>
      </nuxt-link>
    </div>

    <base-pagination
      v-if="posts.length"
      :page-size="postPageSize"
      :total="totalPosts"
      :current-page="postPage"
      @current-change="postPageChange"
    />
  </div>
</template>

<script>
import BasePagination from '@/components/public/BasePagination'
import Mixin from '@/mixins/Mixin'
import PostMixin from '@/mixins/PostMixin'

export default {
  components: {
    BasePagination
  },
  mixins: [Mixin, PostMixin],
  computed: {
    title () {
      return this.rubric ? this.rubric[this.$t('title')] : this.$t('rubrics.all')
    }
  },
  async asyncData ({ $axios, params }) {
    const isPublic = true
    let rubric = null
    if (params.slug) {
      rubric = await $axios.$get(`rubrics/public/${params.slug}`)
    }

    const category = params.slug
    return { isPublic, rubric, category }
  },
  head () {
    return {
      title: this.title
    }
  },
  created () {
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
