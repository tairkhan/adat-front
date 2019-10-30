<template>
  <div>
    <main-block />

    <div class="flex mt-8">
      <div class="w-full lg:w-2/3 mr-8">
        <div class="border-b-2 border-red-600 mb-8">
          <h3 class="category">
            {{ $t('rubrics.nationalInterest') }}
          </h3>
        </div>

        <extended-category-block />
      </div>

      <div class="w-full lg:w-1/3">
        <div class="border-b-2 border-red-600">
          <h3 class="category">
            {{ $t('rubrics.analytics') }}
          </h3>
        </div>

        <aside-block />
      </div>
    </div>

    <div class="flex mt-8">
      <category-block class="w-1/3 mr-8" />
      <category-block class="w-1/3 mr-8" />
      <extra-aside-block class="w-1/3" />
    </div>

    <div class="flex mt-8">
      <video-category-block :data="posts.videos" class="w-full" />
    </div>
  </div>
</template>

<script>
import MainBlock from '@/components/public/MainBlock'
import ExtendedCategoryBlock from '@/components/public/ExtendedCategoryBlock'
import AsideBlock from '@/components/public/AsideBlock'
import CategoryBlock from '@/components/public/CategoryBlock'
import ExtraAsideBlock from '@/components/public/ExtraAsideBlock'
import VideoCategoryBlock from '@/components/public/VideoCategoryBlock'

export default {
  components: {
    MainBlock,
    ExtendedCategoryBlock,
    AsideBlock,
    CategoryBlock,
    ExtraAsideBlock,
    VideoCategoryBlock
  },
  data () {
    return {
      posts: {
        videos: []
      }
    }
  },
  created () {
    this.fetchVideos()
  },
  methods: {
    async fetchPostsBy (rubric) {
      const params = { rubric, page_size: 5 }
      const data = await this.$axios.$get('posts', { params })
      this.posts[rubric] = data.results
    },
    async fetchVideos () {
      const params = { rubric: 'video', page_size: 3 }
      const data = await this.$axios.$get('posts', { params })
      this.posts.videos = data.results
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
