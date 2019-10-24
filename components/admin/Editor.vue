<template>
  <div id="editorjs"></div>
</template>

<script>
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import ImageTool from '@editorjs/image'
import List from '@editorjs/list'
import Quote from '@editorjs/quote'
import Embed from '@editorjs/embed'

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
            toolbox: {
              title: 'Заголовок'
            }
          },
          image: {
            class: ImageTool,
            toolbox: {
              title: 'Изображение'
            },
            config: {
              types: 'images/*',
              captionPlaceholder: 'Подпись',
              buttonContent: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3.15 13.628A7.749 7.749 0 0 0 10 17.75a7.74 7.74 0 0 0 6.305-3.242l-2.387-2.127-2.765 2.244-4.389-4.496-3.614 3.5zm-.787-2.303l4.446-4.371 4.52 4.63 2.534-2.057 3.533 2.797c.23-.734.354-1.514.354-2.324a7.75 7.75 0 1 0-15.387 1.325zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"></path></svg>Выберите изображение',
              uploader: {
                uploadByFile: (file) => {
                  const formData = new FormData()
                  formData.append('file', file)

                  return this.$axios.$post('files', formData, {
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    }
                  })
                    .then((file) => {
                      return {
                        success: 1,
                        file: {
                          url: file.url
                        }
                      }
                    })
                    .catch(() => {
                      return {
                        data: {
                          success: 0
                        }
                      }
                    })
                },
                uploadByUrl: ''
              }
            }
          },
          list: {
            class: List,
            toolbox: {
              title: 'Список'
            }
          },
          quote: {
            class: Quote,
            toolbox: {
              title: 'Цитата'
            },
            config: {
              quotePlaceholder: 'Цитата',
              captionPlaceholder: 'Автор цитаты'
            }
          },
          embed: {
            class: Embed,
            config: {
              services: {
                youtube: true
              }
            }
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
