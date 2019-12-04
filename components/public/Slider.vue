<template>
  <div v-if="posts.length === 3" class="flex items-center">
    <div class="mr-4 px-2 py-1 bg-black text-white text-xs font-bold uppercase">
      {{ $t('last') }}
    </div>

    <transition name="fade" mode="out-in">
      <nuxt-link :to="localePath({ name: 'posts-slug', params: { slug: posts[index][$t('slug')] } })" :key="index">
        <p>
          {{ posts[index][$t('title')] }}
        </p>
      </nuxt-link>
    </transition>
  </div>
</template>

<script>
import PostMixin from '@/mixins/PostMixin'

export default {
  mixins: [PostMixin],
  data () {
    return {
      index: 0,
      timer: setInterval(() => {
        this.next()
      }, 5000)
    }
  },
  async created () {
    this.isPublic = true
    this.postPageSize = 3

    await this.fetchPosts()
    return this.timer
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  methods: {
    next () {
      if (this.index === 2) {
        this.index = 0
      } else {
        this.index += 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
