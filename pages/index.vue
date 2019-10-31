<template>
  <div>
    <main-block />

    <div class="flex flex-col lg:flex-row">
      <div class="mt-8 mr-8 w-full lg:w-2/3">
        <div class="border-b-2 border-red-600">
          <h3 class="category">
            {{ $t('rubrics.nationalInterest') }}
          </h3>
        </div>

        <extended-category-block />
      </div>

      <div class="mt-8 w-full lg:w-1/3">
        <div class="border-b-2 border-red-600">
          <h3 class="category">
            {{ $t('rubrics.analytics') }}
          </h3>
        </div>

        <aside-block />
      </div>
    </div>

    <div class="flex flex-col lg:flex-row">
      <div class="mt-8 mr-8 w-full lg:w-1/3">
        <div class="border-b-2 border-red-600">
          <h3 class="category">
            {{ $t('rubrics.economics') }}
          </h3>
        </div>

        <category-block />
      </div>

      <div class="mt-8 mr-8 w-full lg:w-1/3">
        <div class="border-b-2 border-red-600">
          <h3 class="category">
            {{ $t('rubrics.society') }}
          </h3>
        </div>

        <category-block />
      </div>

      <div class="mt-8 w-full lg:w-1/3">
        <div class="border-b-2 border-red-600">
          <h3 class="category">
            {{ $t('rubrics.all') }}
          </h3>
        </div>

        <extra-aside-block />
      </div>
    </div>

    <div class="mt-8">
      <video-category-block :data="posts.videos" class="w-full" />
    </div>

    <div class="mt-8">
      <div class="w-full lg:w-1/3">
        <div class="border-b-2 border-red-600">
          <h3 class="category">
            {{ $t('rubrics.politics') }}
          </h3>
        </div>
      </div>

      <bottom-category-block />
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
import BottomCategoryBlock from '@/components/public/BottomCategoryBlock'

export default {
  components: {
    MainBlock,
    ExtendedCategoryBlock,
    AsideBlock,
    CategoryBlock,
    ExtraAsideBlock,
    VideoCategoryBlock,
    BottomCategoryBlock
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
