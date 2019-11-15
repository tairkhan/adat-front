export default {
  data () {
    return {
      rubricPage: 1,
      rubricPageSize: 10,
      sortDirection: 'asc',
      rubrics: [],
      totalRubrics: 0
    }
  },
  methods: {
    async fetchRubrics () {
      const params = { page: this.rubricPage, page_size: this.rubricPageSize, sort_direction: this.sortDirection }

      const data = await this.$axios.$get('rubrics', { params })
      this.rubrics = data.results
      this.totalRubrics = data.total
    },
    rubricPageChange (page) {
      this.rubricPage = page
      this.fetchRubrics()
    }
  }
}
