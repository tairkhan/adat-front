<template>
  <el-upload ref="upload" class="cover-uploader" v-bind="config">
    <div v-if="imageUrl" class="cover">
      <img :src="imageUrl">
    </div>
    <i v-else class="el-icon-plus cover-uploader-icon"></i>
  </el-upload>
</template>

<script>
export default {
  data () {
    return {
      imageUrl: '',
      config: {
        action: '/api/v1/files',
        headers: { 'access_token': this.$auth.getToken('local') },
        showFileList: false,
        accept: 'image/*',
        onSuccess: this.onSuccess,
        onError: this.onError
      }
    }
  },
  methods: {
    onSuccess (response, file, fileList) {
      this.imageUrl = '/' + response.url
      this.$emit('result', this.imageUrl)
    },
    onError (err, file) {
      const status = err.status
      const message = `Неудалось загрузить файл "${file.name}". `

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
.cover-uploader {
  @apply relative border-4 border-dashed rounded-lg inline-block overflow-hidden cursor-pointer;
}
.cover-uploader:hover {
  @apply border-blue-600;
}
.cover-uploader-icon {
  @apply w-56 h-32 text-2xl text-gray-500 text-center;
  line-height: 8rem;
}
.cover {
  @apply w-56 h-32 bg-black text-center;

  img {
    @apply inline-block h-full;
  }
}
</style>
