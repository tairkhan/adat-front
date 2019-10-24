<template>
  <!-- <div class="default-layout xs:px-0 sm:px-0 md:px-0 lg:px-32"> -->
  <div class="default-layout">
    <top class="lg:px-32" />
    <Header class="lg:px-32" />
    <div class="lg:px-32 flex-1 my-8">
      <nuxt />
    </div>
    <Footer class="lg:px-32" />
  </div>
</template>

<script>
import Top from '@/components/public/Top'
import Header from '@/components/public/Header'
import Footer from '@/components/public/Footer'

export default {
  components: {
    Top,
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.default-layout {
  @apply min-h-screen flex flex-col;
}
</style>
