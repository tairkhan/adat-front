<template>
  <div>
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

import PostMixin from '@/mixins/PostMixin'

export default {
  layout: 'admin',
  components: {
    PostTable,
    BasePagination
  },
  mixins: [PostMixin],
  head () {
    return {
      title: 'Новости'
    }
  },
  created () {
    this.fetchPosts()
  },
  methods: {
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
