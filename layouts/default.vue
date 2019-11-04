<template>
  <div class="default-layout">
    <top-header class="px-2 md:px-20 lg:px-32" />
    <logo class="px-2 md:px-20 lg:px-32" />
    <navbar class="px-2 md:px-20 lg:px-32 shadow-md" />
    <div class="px-2 md:px-20 lg:px-32 flex-1 my-5">
      <transition name="fade">
        <nuxt />
      </transition>
    </div>
    <Footer class="px-2 md:px-20 lg:px-32" />
  </div>
</template>

<script>
import TopHeader from '@/components/public/TopHeader'
import Logo from '@/components/public/Logo'
import Navbar from '@/components/public/Navbar'
import Footer from '@/components/public/Footer'
import RubricMixin from '@/mixins/RubricMixin'

export default {
  components: {
    TopHeader,
    Logo,
    Navbar,
    Footer
  },
  mixins: [RubricMixin],
  created () {
    this.fetchRubrics()
  }
}
</script>

<style lang="scss" scoped>
.default-layout {
  @apply min-h-screen flex flex-col;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
