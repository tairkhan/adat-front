<template>
  <div>
    <div class="flex flex-wrap">
      <nuxt-link
        v-for="(item, i) in posts"
        :key="i"
        :to="localePath({ name: 'posts-slug', params: { slug: item[$t('slug')] } })"
        class="link w-full lg:w-3/12"
      >
        <div class="image" :style="{ background: `url('${item.cover_image_url}') no-repeat center`, 'background-size': 'cover' }"></div>

        <div class="border-t pt-1 pb-4 px-2">
          <h3>
            {{ item[$t('title')] }}
          </h3>

          <div class="text-gray-800 text-xs">
            <span class="font-bold">АДАТ</span> - {{ $dayjs(item.created_at).format('DD MM YYYY') }}
          </div>
        </div>
      </nuxt-link>
    </div>

    <base-pagination
      v-if="posts.length !== 0"
      :page-size="pageSize"
      :total="total"
      :current-page="currentPage"
      @current-change="currentChange"
    />
  </div>
</template>

<script>
import BasePagination from '@/components/public/BasePagination'
import PostMixin from '@/mixins/PostMixin'

export default {
  components: {
    BasePagination
  },
  mixins: [PostMixin],
  created () {
    const slug = this.$route.params.slug
    if (slug) {
      this.rubric = slug
    }

    this.fetch()
  }
}
</script>

<style lang="scss" scoped>
.link {
  @apply border bg-gray-100 mr-4 mb-4 rounded-lg shadow-xl;

  &:hover {
    .image {
      opacity: .9;
    }

    h3 {
      @apply text-red-600;
    }
  }

  .image {
    @apply h-56 w-full rounded-t-lg;
  }
}
</style>
