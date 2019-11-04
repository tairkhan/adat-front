<template>
  <div>
    <slider class="mb-5" />

    <main-block />

    <div v-if="rubrics.length >= 7">
      <div
        v-for="(row, i) in layout"
        :key="i"
        :class="row.class"
      >
        <div
          v-for="(item, j) in row.rubrics"
          :key="j"
          :class="item.class"
        >
          <div class="border-b-2 border-red-600">
            <h3 class="category">
              {{ item.index !== null ? rubrics[item.index][$t('title')] : $t('rubrics.all') }}
            </h3>
          </div>

          <component :is="item.component" :category="item.index !== null ? rubrics[item.index] : {}" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from '@/components/public/Slider'
import MainBlock from '@/components/public/MainBlock'
import ExtendedCategoryBlock from '@/components/public/ExtendedCategoryBlock'
import AsideBlock from '@/components/public/AsideBlock'
import CategoryBlock from '@/components/public/CategoryBlock'
import ExtraAsideBlock from '@/components/public/ExtraAsideBlock'
import SpotlightCategoryBlock from '@/components/public/SpotlightCategoryBlock'
import BottomCategoryBlock from '@/components/public/BottomCategoryBlock'

import RubricMixin from '@/mixins/RubricMixin'

export default {
  components: {
    Slider,
    MainBlock,
    ExtendedCategoryBlock,
    AsideBlock,
    CategoryBlock,
    ExtraAsideBlock,
    SpotlightCategoryBlock,
    BottomCategoryBlock
  },
  mixins: [RubricMixin],
  data () {
    return {
      layout: [
        {
          class: 'flex flex-col lg:flex-row',
          rubrics: [
            {
              index: 0,
              class: 'mt-8 mr-8 w-full lg:w-2/3',
              component: 'extended-category-block'
            },
            {
              index: 3,
              class: 'mt-8 w-full lg:w-1/3',
              component: 'aside-block'
            }
          ]
        },
        {
          class: 'flex flex-col lg:flex-row',
          rubrics: [
            {
              index: 2,
              class: 'mt-8 mr-8 w-full lg:w-1/3',
              component: 'category-block'
            },
            {
              index: 6,
              class: 'mt-8 mr-8 w-full lg:w-1/3',
              component: 'category-block'
            },
            {
              index: null,
              class: 'mt-8 w-full lg:w-1/3',
              component: 'extra-aside-block'
            }
          ]
        },
        {
          class: 'mt-8 w-full',
          rubrics: [
            {
              index: 4,
              class: '',
              component: 'spotlight-category-block'
            }
          ]
        },
        {
          class: 'mt-8',
          rubrics: [
            {
              index: 1,
              class: '',
              component: 'bottom-category-block'
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
