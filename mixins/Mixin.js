export default {
  created () {
    this.fetch()
  },
  methods: {
    fetch () {
      const params = { page_size: 100, sort_direction: 'asc' }
      this.$store.dispatch('directories/fetch', { name: 'rubrics', params })
    }
  }
}
