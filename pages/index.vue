<template>
  <div>
    <main-block />

    <div class="flex mt-8">
      <extended-category-block class="w-2/3" />
      <aside-block class="w-1/3" />
    </div>

    <div class="flex mt-8">
      <category-block class="w-1/3 mr-8" />
      <category-block class="w-1/3 mr-8" />
      <extra-aside-block class="w-1/3" />
    </div>
  </div>
</template>

<script>
import MainBlock from '@/components/public/MainBlock'
import ExtendedCategoryBlock from '@/components/public/ExtendedCategoryBlock'
import AsideBlock from '@/components/public/AsideBlock'
import CategoryBlock from '@/components/public/CategoryBlock'
import ExtraAsideBlock from '@/components/public/ExtraAsideBlock'

export default {
  components: {
    MainBlock,
    ExtendedCategoryBlock,
    AsideBlock,
    CategoryBlock,
    ExtraAsideBlock
  }
}
</script>

<style lang="scss" scoped>

</style>
