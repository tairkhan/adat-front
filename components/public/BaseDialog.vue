<template>
  <el-dialog
    v-bind="$props"
    :visible.sync="dialogVisible"
  >
    <slot></slot>
  </el-dialog>
</template>

<script>
import { Dialog } from 'element-ui'

export default {
  props: {
    ...Dialog.props,
    visible: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  computed: {
    dialogVisible: {
      get () {
        return this.visible
      },
      set () {
        this.$emit('closed')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
