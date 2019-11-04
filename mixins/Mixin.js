export default {
  methods: {
    style (item) {
      const cover = this.extractCover(item)

      return {
        background: `gray url('${cover}') no-repeat center`,
        'background-size': 'cover'
      }
    },
    extractCover (item) {
      const isVideo = item.rubrics.find(rubric => rubric.slug === 'video')
      const content = JSON.parse(item[this.$t('content')])
      const blocks = content.blocks

      if (!isVideo || !blocks) {
        return item.cover_image_url
      }

      const embed = blocks.find(block => block.type === 'embed')
      if (!embed) {
        return item.cover_image_url
      }

      const source = embed.data.source.split('=')
      const result = source[source.length - 1]

      return `https://i.ytimg.com/vi/${result}/mqdefault.jpg`
    },
    extractFirstParagraph (content) {
      content = JSON.parse(content)
      const blocks = content.blocks

      if (!blocks) {
        return ''
      }

      const paragraph = blocks.find(block => block.type === 'paragraph')
      if (!paragraph) {
        return ''
      }

      return paragraph.data.text
    },
    parseHtml (content) {
      let html = ''
      content = JSON.parse(content)
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
