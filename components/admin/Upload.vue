<template>
  <el-upload ref="upload" class="upload-demo" v-bind="config">
    <slot>
      <el-button @click="onBeforeSelect" plain>
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
        multiple: false,
        name: 'file',
        showFileList: false,
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
      console.log(response)
      this.$emit('result', response.url)
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
      this.$alert(`Максимальное допустимое количество файлов: ${this.config.limit}`)
    },
    onBeforeSelect () {
      this.$refs.upload.clearFiles()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
