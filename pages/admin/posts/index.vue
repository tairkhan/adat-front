<template>
  <div>
    <el-form
      ref="form"
      :model="model"
      :inline="true"
    >
      <el-form-item label="Рубрика" prop="category">
        <el-select v-model="model.category" placeholder="Рубрика">
          <el-option
            label="Все"
            :value="null"
          />
          <el-option
            v-for="(item, i) in rubrics"
            :key="i"
            :label="item.title"
            :value="item.slug"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="Статус" prop="status">
        <el-select v-model="model.status">
          <el-option
            v-for="(item, i) in statusOptions"
            :key="i"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="Поиск" prop="search">
        <el-input v-model="model.search" placeholder="Поиск" />
      </el-form-item>

      <el-form-item>
        <el-button @click="onReset">
          Сброс
        </el-button>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onApply">
          Применить
        </el-button>
      </el-form-item>
    </el-form>

    <base-pagination
      :page-size="postPageSize"
      :total="totalPosts"
      :current-page="postPage"
      @current-change="postPageChange"
    />

    <post-table :data="posts" @restore="onRestore" @delete="onDelete" />
  </div>
</template>

<script>
import PostTable from '@/components/admin/PostTable'
import BasePagination from '@/components/public/BasePagination'

import RubricMixin from '@/mixins/RubricMixin'
import PostMixin from '@/mixins/PostMixin'

export default {
  layout: 'admin',
  components: {
    PostTable,
    BasePagination
  },
  mixins: [RubricMixin, PostMixin],
  head () {
    return {
      title: 'Новости'
    }
  },
  data () {
    return {
      model: {
        category: null,
        status: null,
        search: null
      },
      statusOptions: [
        { label: 'Все', value: null },
        { label: 'Опубликовано', value: 'published' },
        { label: 'Черновик', value: 'draft' },
        { label: 'В корзине', value: 'trashed' }
      ]
    }
  },
  created () {
    this.rubricPageSize = 100
    this.fetchRubrics()
    this.fetchPosts()
  },
  methods: {
    onReset () {
      this.$refs.form.resetFields()
    },
    onApply () {
      Object.keys(this.model).map((key) => {
        this[key] = this.model[key]
      })
      this.postPage = 1
      this.fetchPosts()
    },
    onRestore (id) {
      this.$axios.$put(`posts/${id}/unpublish`)
        .then(() => {
          this.fetchPosts()
        })
    },
    onDelete (payload) {
      const trash = payload.status === 'trashed'
      this.$confirm(trash ? 'Вы действительно хотите удалить данную новость?' : 'Удалить в корзину?')
        .then(() => {
          this.$axios.$delete(`posts/${payload.id}`)
            .then((data) => {
              if (data === 1 && this.posts.length === 1 && this.postPage > 1) {
                this.postPage -= 1
              }

              this.fetchPosts()
              this.$message({
                type: 'success',
                message: trash ? 'Удаление завершено' : 'Новость отправлена в корзину'
              })
            })
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
