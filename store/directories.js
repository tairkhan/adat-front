import { camelCase } from 'lodash-es'

export const state = () => ({
  posts: { results: [], total: 0, stats: {} },
  rubrics: { results: [], total: 0 }
})

export const mutations = {
  SET_DATA (state, { name, data }) {
    const target = camelCase(name)

    if (!(target in state)) {
      throw new Error(`[directories/SET_LIST]: ${target} prop doesn't exist in state`)
    }
    state[target] = data
  }
}

export const actions = {
  fetch ({ commit }, { name, params }) {
    if (!name) {
      throw new Error('[directories/fetch] name param is required')
    }
    if (typeof params !== 'object') {
      throw new TypeError('[directories/fetch]: params should be an object')
    }

    this.$axios.$get(name, { params })
      .then((data) => {
        commit('SET_DATA', { name, data })
      })
      .catch((err) => {
        throw err
      })
  },

  fetchOne (ctx, { name, id }) {
    if (!name || !id) {
      throw new Error('[directories/fetchOne] name and id are required')
    }

    return this.$axios.$get(`${name}/${id}`)
      .catch((err) => {
        throw err
      })
  },

  create (ctx, { name, payload }) {
    if (!name) {
      throw new Error('[directories/create] name param is required')
    }
    if (typeof payload !== 'object') {
      throw new TypeError('[directories/create]: payload should be an object')
    }

    return this.$axios.$post(name, payload)
      .catch((err) => {
        throw err
      })
  },

  update (ctx, { name, payload }) {
    if (!name) {
      throw new Error('[directories/update] name param is required')
    }
    if (typeof payload !== 'object') {
      throw new TypeError('[directories/update]: payload should be an object')
    }

    return this.$axios.$put(`${name}/${payload.id}`, payload)
      .catch((err) => {
        throw err
      })
  },

  delete (ctx, { name, id }) {
    if (!name) {
      throw new Error('[directories/delete] name param is required')
    }
    if (!id) {
      throw new Error('[directories/delete]: id is missing')
    }

    return this.$axios.$delete(`${name}/${id}`)
      .catch((err) => {
        throw err
      })
  }
}
