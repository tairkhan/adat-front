<template>
  <div>
    <base-pagination
      :page-size="postPageSize"
      :total="totalPosts"
      :current-page="postPage"
      @current-change="postPageChange"
    />

    <post-table :data="posts" @delete="onDelete" />
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
    onDelete (payload) {
      this.$confirm('Вы действительно хотите удалить данную новость?')
        .then(() => {
          this.$axios.$delete(`posts/${payload.id}`)
            .then((data) => {
              if (data === 1 && this.posts.length === 1 && this.postPage > 1) {
                this.postPage -= 1
              }

              this.fetchPosts()
              this.$message({
                type: 'success',
                message: 'Удаление завершено'
              })
            })
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
