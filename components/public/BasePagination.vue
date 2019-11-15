<template>
  <div class="flex justify-end">
    <el-pagination
      v-bind="$props"
      layout="prev, pager, next"
      @current-change="currentChange"
    />
  </div>
</template>

<script>
import { Pagination } from 'element-ui'

export default {
  props: {
    ...Pagination.props
  },
  methods: {
    currentChange (currentPage) {
      this.$emit('current-change', currentPage)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
