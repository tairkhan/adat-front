<template>
  <div>
    <div class="flex flex-wrap">
      <nuxt-link
        v-for="(item, i) in results"
        :key="i"
        :to="localePath({ name: 'posts-slug', params: { slug: item[$t('slug')] } })"
        class="mb-4 md:mr-4 lg:mr-4 w-full md:w-5/12 lg:w-3/12"
      >
        <div class="h-56 w-full border" :style="style(item)"></div>

        <div class="border-t pt-1 pb-4 px-2">
          <h3>
            {{ item[$t('title')] }}
          </h3>

          <div class="text-gray-800 text-sm">
            <span class="font-bold">АДАТ</span> - {{ $dayjs(item.created_at).format('DD MM YYYY') }}
          </div>
        </div>
      </nuxt-link>
    </div>

    <base-pagination
      v-if="results.length !== 0"
      :page-size="pageSize"
      :total="total"
      :current-page="currentPage"
      @current-change="currentChange"
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
  async asyncData ({ app, params, error }) {
    try {
      const rubric = params.slug
      if (rubric) {
        await app.$axios.$get(`rubrics/${rubric}`)
      }

      return { rubric }
    } catch (err) {
      error({ statusCode: 404 })
    }
  },
  created () {
    this.fetchPosts()
  }
}
</script>

<style lang="scss" scoped>

</style>
