const htmlparser2 = require('htmlparser2')

const truncate = (s) => {
  if (s.length > 160) {
    const temp = s.slice(0, 161).split(' ')
    temp[temp.length - 1] = ' ...'
    return temp.join(' ')
  } else {
    return s
  }
}

export default {
  methods: {
    style (item) {
      const cover = this.extractCover(item)

      return {
        background: `url('${cover}') no-repeat center`,
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
    excerpt (content) {
      content = JSON.parse(content)
      const blocks = content.blocks

      if (!blocks) {
        return ''
      }

      const paragraph = blocks.find(block => block.type === 'paragraph')
      if (!paragraph) {
        return ''
      }

      const temp = []
      const parser = new htmlparser2.Parser(
        {
          ontext (text) {
            temp.push(text)
          }
        },
        { decodeEntities: true }
      )
      parser.write(paragraph.data.text)
      parser.end()
      const result = temp.join('')

      return truncate(result)
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
            html += `<figure><img class="w-full" src="${block.data.file.url}"><figcaption>${block.data.caption}</figcaption></figure>`
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
