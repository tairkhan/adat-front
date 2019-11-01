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

    <video-category-block class="mt-8 w-full" />

    <div class="mt-8">
      <div class="w-1/3">
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

import RubricMixin from '@/mixins/RubricMixin'

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
  mixins: [RubricMixin],
  data () {
    return {
      layout: [
        {
          row: 'flex flex-col lg:flex-row',
          rubrics: [
            {
              class: 'mt-8 mr-8 w-full lg:w-2/3'
            },
            {
              class: 'mt-8 w-full lg:w-1/3'
            }
          ]
        },
        {
          row: 'flex flex-col lg:flex-row',
          rubrics: [
            {
              class: 'mt-8 mr-8 w-full lg:w-1/3'
            },
            {
              class: 'mt-8 mr-8 w-full lg:w-1/3'
            },
            {
              class: 'mt-8 w-full lg:w-1/3'
            }
          ]
        },
        {
          row: 'mt-8 w-full',
          rubrics: [
            {
              class: ''
            }
          ]
        },
        {
          row: 'mt-8',
          rubrics: [
            {
              class: ''
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
