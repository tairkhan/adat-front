<template>
  <el-upload ref="upload" v-bind="attrs">
    <div class="h-full flex flex-col justify-center items-center" @click="$refs.upload.clearFiles()">
      <fa-icon icon="cloud-upload-alt" size="4x" />
      <div class="text-xs">
        Перетащите изображения сюда или нажмите для загрузки
      </div>
    </div>
  </el-upload>
</template>

<script>
export default {
  data () {
    return {
      attrs: {
        action: '/api/v1/files',
        headers: { 'authorization': this.$auth.getToken('local') },
        multiple: true,
        showFileList: false,
        drag: true,
        accept: 'image/*',
        onSuccess: this.onSuccess,
        onError: this.onError
      }
    }
  },
  methods: {
    onSuccess (response, file, fileList) {
      this.$notify({
        type: 'success',
        title: 200,
        message: 'Отправлено'
      })
    },
    onError (err, file, fileList) {
      const status = err.status
      let message

      if (status === 413) {
        message = 'Превышен размер файла'
      } else if (status === 422) {
        message = 'Недопустимый формат файла'
      }

      this.$notify({
        type: 'error',
        title: status,
        message
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
