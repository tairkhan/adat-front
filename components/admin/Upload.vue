<template>
  <el-upload ref="upload" class="upload-demo" v-bind="config">
    <slot>
      <el-button plain>
        Выбрать обложку
      </el-button>
    </slot>
  </el-upload>
</template>

<script>
export default {
  data () {
    return {
      config: {
        action: '/api/v1/files',
        headers: { 'access_token': this.$auth.getToken('local') },
        multiple: true,
        name: 'file',
        showFileList: true,
        accept: 'image/*',
        onSuccess: this.onSuccess,
        onError: this.onError,
        autoUpload: true,
        limit: 1,
        onExceed: this.onExceed
      }
    }
  },
  methods: {
    submitUpload () {
      this.$refs.upload.submit()
    },
    onSuccess (response, file, fileList) {
      const category = response.mimetype.includes('image') ? 'images' : 'docs'
      this.$emit('result', category)
    },
    onError (err, file) {
      const status = err.status

      let message = `Неудалось загрузить файл "${file.name}". `
      if (status === 413) {
        message += 'Максимальный допустимый размер файла - 10 мегабайт'
      } else if (status === 422) {
        message += 'Недопустимый формат файла'
      }

      this.$notify({
        type: 'error',
        title: status,
        message
      })
    },
    onExceed () {
      this.$alert(`Максимальное допустимое количество файлов: ${this.uploadBindings.limit}`)
    },
    onBeforeSelect () {
      this.$refs.upload.clearFiles()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
