export const state = () => ({
  data: { results: [], total: 0 }
})

export const mutations = {
  SET_DATA (state, { data }) {
    state.data = data
  }
}

export const actions = {
  async fetch ({ commit }, { params }) {
    if (typeof params !== 'object') {
      throw new TypeError('[index/fetch]: params should be an object')
    }

    const data = await this.$axios.$get('rubrics', { params })
    commit('SET_DATA', { data })
  }
}
