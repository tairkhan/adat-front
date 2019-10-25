<template>
  <div>
    <main-block />

    <div class="flex mt-8">
      <extended-category-block class="w-2/3 mr-8" />
      <aside-block class="w-1/3" />
    </div>

    <div class="flex mt-8">
      <category-block class="w-1/3 mr-8" />
      <category-block class="w-1/3 mr-8" />
      <extra-aside-block class="w-1/3" />
    </div>

    <div class="flex mt-8">
      <video-category-block :data="videos" class="w-full" />
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
      videos: []
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    async fetch () {
      const params = { rubric: 'video', page_size: 3 }
      const data = await this.$axios.$get('posts', { params })
      this.videos = data.results
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
