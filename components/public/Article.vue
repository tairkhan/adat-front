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

      console.log(blocks)

      blocks.forEach((block) => {
        switch (block.type) {
          case 'header':
            html += `<h${block.data.level}>${block.data.text}</h${block.data.level}>`
            break
          case 'paragraph':
            html += `<p>${block.data.text}</p>`
            break
          case 'image':
            html += `<img src="${block.data.file.url}" title="${block.data.caption}" /><em>${block.data.caption}</em>`
            break
          case 'list':
            const style = block.data.style === 'ordered' ? 'decimal"' : 'disc'
            html += `<ul class="list-${style}">`
            block.data.items.forEach((li) => {
              html += `<li>${li}</li>`
            })
            html += '</ul>'
            break
          case 'quote':
            html += `<blockquote class="text-${block.data.alignment}">${block.data.text}</blockquote><em>${block.data.caption}</em>`
            break
          case 'embed':
            html +=
              `<iframe width="${block.data.width}" height="${block.data.height}"
              src="${block.data.embed}"
              frameborder="0" allow="accelerometer; autoplay;
              encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
              <em>${block.data.caption}</em>`
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
.article {
  @apply w-full;
}

@screen lg {
  .article {
    @apply w-1/2;
  }
}
</style>
