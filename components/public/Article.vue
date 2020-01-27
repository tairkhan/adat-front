<template>
  <div class="article">
    <p class="text-gray-800">
      {{ $dayjs(data.created_at).format('lll') }}
    </p>
    <h1>
      {{ data[$t('title')] }}
    </h1>
    <div v-if="!isVideo">
      <img class="w-full" :src="data.cover_image_url">
    </div>

    <div class="mt-4" v-html="html"></div>
  </div>
</template>

<script>
import Mixin from '@/mixins/Mixin'

export default {
  mixins: [Mixin],
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    isVideo () {
      return this.data.rubrics.filter(rubric => (rubric.slug === 'video' || rubric.slug === 'skrytaya-kamera')).length > 0
    },
    html () {
      return this.parseHtml(this.data[this.$t('content')])
    }
  }
}
</script>

<style lang="scss" scoped>
.article {
  @apply w-full;
}

@screen lg {
  .article {
    @apply w-6/12;
  }
}
</style>
