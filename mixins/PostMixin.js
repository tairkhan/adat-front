export default {
  data () {
    return {
      postPage: 1,
      postPageSize: 1,
      category: null,
      status: null,
      search: null,
      on_main_page: null,
      posts: [],
      totalPosts: 0
    }
  },
  methods: {
    async fetchPosts () {
      const params = { page: this.postPage, page_size: this.postPageSize }

      if (this.category) {
        params.rubric = this.category
      }

      if (this.status) {
        params.status = this.status
      }

      if (this.search) {
        params.search = this.search
      }

      if (this.on_main_page) {
        params.on_main_page = this.on_main_page
      }

      const data = await this.$axios.$get('posts', { params })
      this.posts = data.results
      this.totalPosts = data.total
    },
    postPageChange (page) {
      this.postPage = page
      this.fetchPosts()
    }
  }
}
