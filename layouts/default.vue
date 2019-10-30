<template>
  <div class="default-layout">
    <top-header class="px-2 lg:px-32" />
    <logo class="px-2 lg:px-32" />
    <navbar :data="rubrics" class="px-2 lg:px-32 shadow-md" />
    <div class="px-2 lg:px-32 flex-1 my-8">
      <nuxt :rubrics="rubrics" />
    </div>
    <Footer :data="rubrics" class="px-2 lg:px-32" />
  </div>
</template>

<script>
import TopHeader from '@/components/public/TopHeader'
import Logo from '@/components/public/Logo'
import Navbar from '@/components/public/Navbar'
import Footer from '@/components/public/Footer'

import Mixin from '@/mixins/Mixin.js'
import RubricMixin from '@/mixins/RubricMixin.js'

export default {
  components: {
    TopHeader,
    Logo,
    Navbar,
    Footer
  },
  mixins: [Mixin, RubricMixin]
}
</script>

<style lang="scss" scoped>
.default-layout {
  @apply min-h-screen flex flex-col;
}
</style>
