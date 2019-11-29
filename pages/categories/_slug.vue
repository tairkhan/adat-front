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
        class="mb-4 md:mr-4 lg:mr-4 w-full md:w-5/12 lg:w-3/12"
      >
        <div class="h-64 w-full" :style="style(item)"></div>

        <div class="pt-1 pb-4 px-2">
          <h3>
            {{ item[$t('title')] }}
          </h3>

          <p class="my-3 text-gray-800">
            <span class="font-bold">АДАТ</span> - {{ $dayjs(item.created_at).format('ll') }}
          </p>
        </div>
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
    let rubric = null
    if (params.slug) {
      rubric = await $axios.$get(`rubrics/${params.slug}`)
    }

    const category = params.slug
    const status = 'published'
    return { rubric, category, status }
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

</style>
