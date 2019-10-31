<template>
  <div class="article">
    <span class="text-gray-800 text-xs">
      {{ $dayjs(data.created_at).format('DD MM YYYY') }}
    </span>
    <h1> {{ data[$t('title')] }} </h1>

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
    @apply w-1/2;
  }
}
</style>
