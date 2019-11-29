<template>
  <div class="article">
    <p class="text-gray-800">
      {{ $dayjs(data.created_at).format('lll') }}
    </p>
    <h1>
      {{ data[$t('title')] }}
    </h1>
    <div class="mb-4">
      <img class="w-full" :src="data.cover_image_url">
    </div>

    <div v-html="html"></div>
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
