<template>
  <div>
    <h1> {{ data[$t('title')] }} </h1>
    <div v-html="html"></div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    html () {
      let html = ''
      const content = JSON.parse(this.data[this.$t('content')])
      const blocks = content.blocks

      if (!blocks) {
        return ''
      }

      blocks.forEach((block) => {
        switch (block.type) {
          case 'header':
            html += `<h${block.data.level}>${block.data.text}</h${block.data.level}>`
            break
          case 'paragraph':
            html += `<p>${block.data.text}</p>`
            break
          case 'image':
            html += `<img src="${block.data.file.url}" title="${block.data.caption}" /><br /><em>${block.data.caption}</em>`
            break
          case 'list':
            html += '<ul>'
            block.data.items.forEach((li) => {
              html += `<li>${li}</li>`
            })
            html += '</ul>'
            break
          case 'quote':
            const alignment = block.data.alignment === 'left' ? 'text-left' : 'text-right'
            html += `<blockquote class="${alignment}">${block.data.text}</blockquote>`
            break
          case 'embed':
            html +=
              `<iframe width="${block.data.width}" height="${block.data.height}"
              src="${block.data.embed}"
              frameborder="0" allow="accelerometer; autoplay;
              encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
              `
            break
          default:
            break
        }
      })

      return html
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
