<template>
  <div id="editorjs"></div>
</template>

<script>
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'

export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  content () {
    return {
      editor: null
    }
  },
  watch: {
    data (val) {
      this.init()
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      if (this.editor) {
        this.editor.destroy()
      }

      this.editor = new EditorJS({
        holder: 'editorjs',
        tools: {
          header: {
            class: Header,
            inlineToolbar: true
          }
        },
        data: this.data,
        onReady: this.onReady,
        onChange: this.onChange
      })
    },
    onChange () {
      this.editor.save()
        .then((data) => {
          this.$emit('save', data)
        })
        .catch((err) => {
          throw err
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
