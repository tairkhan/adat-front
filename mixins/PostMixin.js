export default {
  data () {
    return {
      currentPage: 1,
      pageSize: 10,
      rubric: null,
      results: [],
      total: 0
    }
  },
  methods: {
    async fetchPosts () {
      const params = { page: this.currentPage, page_size: this.pageSize }

      if (this.rubric) {
        params.rubric = this.rubric
      }

      const data = await this.$axios.$get('posts', { params })
      this.results = data.results
      this.total = data.total
    },
    currentChange (currentPage) {
      this.currentPage = currentPage
      this.fetchPosts()
    }
  }
}
