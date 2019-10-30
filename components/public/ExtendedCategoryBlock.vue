<template>
  <div class="flex flex-row">
    <div class="w-1/2 mr-5">
      <div
        v-for="(item, i) in results"
        :key="i"
      >
        <div v-if="i === 0">
          <nuxt-link :to="localePath({ name: 'posts-slug', params: { slug: item[$t('slug')] } })">
            <div class="news-block w-full" style="height: 18rem;" :style="style(item.cover_image_url)">
              <div class="news-block__info">
                <span class="tag">{{ item.rubrics[0][$t('title')] }}</span>
              </div>
            </div>
          </nuxt-link>

          <nuxt-link :to="localePath({ name: 'posts-slug', params: { slug: item[$t('slug')] } })">
            <h3>{{ item[$t('title')] }}</h3>
          </nuxt-link>

          <div class="my-2 text-gray-800 text-sm">
            <span class="font-bold">АДАТ</span> - <span>{{ $dayjs(item.created_at).format('DD MM YYYY') }}</span>
          </div>

          <p v-html="extractParagraph(item[$t('content')])" class="normal-case"></p>
        </div>
      </div>
    </div>

    <div class="flex flex-col w-1/2">
      <div
        v-for="(item, i) in results"
        :key="i"
      >
        <nuxt-link v-if="i !== 0" :to="localePath({ name: 'posts-slug', params: { slug: item[$t('slug')] } })">
          <div class="flex mb-5">
            <img :src="item.cover_image_url" class="w-32 h-24 mr-2 border">
            <div>
              <h3>
                {{ item[$t('title')] }}
              </h3>
              <div class="text-sm">
                <span class="font-bold">АДАТ</span> - <span>{{ $dayjs(item.created_at).format('DD MM YYYY') }}</span>
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      results: []
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    async fetch () {
      const params = { page_size: 4 }
      const data = await this.$axios.$get('posts', { params })
      this.results = data.results
    },
    style (cover) {
      return {
        background: `gray url('${cover}') no-repeat center`,
        'background-size': 'cover'
      }
    },
    extractParagraph (content) {
      content = JSON.parse(content)

      if (content.blocks) {
        const paragraph = content.blocks.find(block => block.type === 'paragraph')

        if (!paragraph) {
          return ''
        }

        return paragraph.data.text
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.news-block {
  &__info {
    @apply flex flex-col justify-end h-full p-4;
  }

  .tag {
    @apply self-start;
  }
}
</style>
