<template>
  <div class="px-2 md:px-20 lg:px-32">
    <input id="search" v-model="search" :placeholder="$t('search')">

    <div v-if="posts.length" class="flex flex-col mt-4 pb-8 px-2 md:px-20 lg:px-32 rounded-lg" style="background-color: #f2f2f2;">
      <nuxt-link
        v-for="(item, i) in found"
        :key="i"
        :to="localePath({ name: 'posts-slug', params: { slug: item[$t('slug')] } })"
        class="mt-8 rounded-lg border"
      >
        <div class="flex bg-white rounded-tr-lg rounded-br-lg">
          <div class="w-64 h-48 rounded-tl-lg rounded-bl-lg" :style="style(item)"></div>
          <div class="flex-1 p-4">
            <h3>
              {{ item[$t('title')] }}
            </h3>
            <div class="mb-2 text-gray-800 text-sm">
              <span class="font-bold">АДАТ</span> - {{ $dayjs(item.created_at).format('LLL') }}
            </div>

            <p v-html="extractFirstParagraph(item[$t('content')])"></p>
          </div>
        </div>
      </nuxt-link>

      <div
        v-if="posts.length && found.length < totalPosts"
        class="mt-8 text-center"
      >
        <el-button type="danger" plain @click="downloadMore">
          {{ $t('showMore') }}
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { debounce } from 'lodash'

import Mixin from '@/mixins/Mixin'
import PostMixin from '@/mixins/PostMixin'

export default {
  mixins: [Mixin, PostMixin],
  head () {
    return {
      title: this.$t('search')
    }
  },
  data () {
    return {
      found: []
    }
  },
  watch: {
    search: debounce(function (val) {
      this.found = []
      this.posts = []
      this.postPage = 1
      this.search = val

      if (this.search) {
        this.fetchPosts()
      }
    }, 500),
    posts (val) {
      if (val) {
        this.found = this.found.concat(val)
      }
    }
  },
  methods: {
    downloadMore () {
      this.postPage += 1
      this.fetchPosts()
    }
  }
}
</script>

<style lang="scss" scoped>
#search {
  @apply w-full py-2 px-4 border border-gray-500 text-xl font-bold rounded-lg;
}
</style>
