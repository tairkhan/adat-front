export default {
  data () {
    return {
      currentPage: 1,
      pageSize: 10,
      rubric: null
    }
  },
  computed: {
    posts () {
      return this.$store.state.directories.posts.results
    },
    total () {
      return this.$store.state.directories.posts.total
    }
  },
  methods: {
    fetchPosts () {
      const params = { page: this.currentPage, page_size: this.pageSize }

      if (this.rubric) {
        params.rubric = this.rubric
      }

      this.$store.dispatch('directories/fetch', { name: 'posts', params })
    },
    currentChange (currentPage) {
      this.currentPage = currentPage
      this.fetch()
    }
  }
}
