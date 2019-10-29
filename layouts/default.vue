<template>
  <div class="default-layout">
    <top-header :data="rubrics" class="px-2 lg:px-40" />
    <logo class="px-2 lg:px-40" />
    <navbar class="px-2 lg:px-40 shadow-md" />
    <div class="px-2 lg:px-40 flex-1 my-8">
      <nuxt />
    </div>
    <Footer class="px-2 lg:px-40" />
  </div>
</template>

<script>
import TopHeader from '@/components/public/TopHeader'
import Logo from '@/components/public/Logo'
import Navbar from '@/components/public/Navbar'
import Footer from '@/components/public/Footer'

import Mixin from '@/mixins/Mixin'

export default {
  components: {
    TopHeader,
    Logo,
    Navbar,
    Footer
  },
  mixins: [Mixin]
}
</script>

<style lang="scss" scoped>
.default-layout {
  @apply min-h-screen flex flex-col;
}
</style>
