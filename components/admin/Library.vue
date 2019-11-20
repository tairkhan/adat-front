<template>
  <el-form>
    <el-form-item>
      <el-radio-group v-model="tab">
        <el-radio-button label="upload">
          Загрузить изображения
        </el-radio-button>

        <el-radio-button label="library">
          Библиотека
        </el-radio-button>
      </el-radio-group>
    </el-form-item>

    <el-form-item v-if="tab === 'upload'">
      <upload @uploaded="uploaded" />
    </el-form-item>

    <el-form-item v-else-if="tab === 'library'">
      <div class="flex flex-wrap">
        <div v-for="item in files" :key="item.uuid" class="mr-4 mb-4">
          <input
            :id="item.uuid"
            v-model="selectedImage"
            :value="item.url"
            class="hidden"
            type="radio"
          >

          <label :for="item.uuid" :title="item.originalname" class="block border-4 border-white rounded-lg rounded-lg">
            <img class="w-48 h-32 rounded" :src="item.url">
          </label>

          <div class="p-2 leading-none text-right shadow-lg">
            <span class="cursor-pointer hover:opacity-75">
              <a
                :href="item.url"
                title="Скачать"
                download
              >
                <fa-icon icon="download" />
              </a>
            </span>
            <span class="ml-4 cursor-pointer hover:opacity-75" title="Удалить" @click="onDelete(item.uuid)">
              <fa-icon icon="trash" />
            </span>
          </div>
        </div>
      </div>

      <base-pagination
        :page-size="filePageSize"
        :total="totalFiles"
        :current-page="filePage"
        @current-change="filePageChange"
      />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" :disabled="!selectedImage" @click="onApply">
        Подтвердить
      </el-button>

      <el-button @click="$emit('closed')">
        Отменить
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import BasePagination from '@/components/public/BasePagination'
import Upload from '@/components/admin/Upload'

export default {
  components: {
    BasePagination,
    Upload
  },
  props: {
    image: {
      type: String,
      required: false,
      default: () => ''
    }
  },
  data () {
    return {
      selectedImage: this.image,
      tab: 'library',
      filePage: 1,
      filePageSize: 50,
      files: [],
      totalFiles: 0
    }
  },
  created () {
    this.fetchFiles()
  },
  methods: {
    async fetchFiles () {
      const params = { page: this.filePage, page_size: this.filePageSize }

      const data = await this.$axios.$get('files', { params })
      this.files = data.results
      this.totalFiles = data.total
    },
    onApply () {
      this.$emit('cover', this.selectedImage)
    },
    onDelete (uuid) {
      this.$confirm('Вы действительно хотите удалить данное изображение?')
        .then(() => {
          this.$axios.$delete(`files/${uuid}`)
            .then(() => {
              if (this.files.length === 1 && this.filePage > 1) {
                this.filePage -= 1
              }

              this.fetchFiles()
              this.$message({
                type: 'success',
                message: 'Изображение удалено'
              })
            })
        })
    },
    resolveHandler () {
      this.$message({
        type: 'success',
        message: 'Пароль успешно обновлён'
      })
      this.$refs.form.resetFields()
    },
    rejectHandler (err) {
      const status = err.response.status
      const message = err.response.data.message

      this.$notify({
        type: 'error',
        title: status,
        message
      })
    },
    filePageChange (page) {
      this.filePage = page
      this.fetchFiles()
    },
    uploaded () {
      this.tab = 'library'
      this.filePage = 1
      this.fetchFiles()
    }
  }
}
</script>

<style lang="scss" scoped>
input:checked + label {
  @apply border-blue-500 opacity-75;
}
</style>
