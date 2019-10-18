<template>
  <el-table v-bind="$props">
    <slot></slot>
  </el-table>
</template>

<script>
import { Table } from 'element-ui'

export default {
  props: {
    ...Table.props
  }
}
</script>

<style lang="scss" scoped>

</style>
