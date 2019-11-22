<template>
  <div class="default-layout">
    <top-header class="px-2 md:px-20 lg:px-32" />
    <logo-bar class="px-2 md:px-20 lg:px-32" />
    <navbar class="px-2 md:px-20 lg:px-32 shadow-md" />
    <div class="px-2 md:px-20 lg:px-32 flex-1 my-5">
      <nuxt />
    </div>
    <Footer class="px-2 md:px-20 lg:px-32" />
  </div>
</template>

<script>
import TopHeader from '@/components/public/TopHeader'
import LogoBar from '@/components/public/LogoBar'
import Navbar from '@/components/public/Navbar'
import Footer from '@/components/public/Footer'
import StoreMixin from '@/mixins/StoreMixin'

export default {
  components: {
    TopHeader,
    LogoBar,
    Navbar,
    Footer
  },
  mixins: [StoreMixin],
  created () {
    const len = this.results.length
    if (!len || len > 8) {
      this.fetch()
    }
  }
}
</script>

<style lang="scss" scoped>
.default-layout {
  @apply min-h-screen flex flex-col;
}
</style>
