export const state = () => ({
  locales: ['ru', 'kg'],
  locale: 'ru'
})

export const mutations = {
  SET_LANG (state, locale) {
    state.locale = locale
  }
}

export const actions = {
  changeLang ({ commit }, locale) {
    if (!locale) {
      throw new Error('[settings/changeLang] locale param is required')
    }
    if (state.locales.includes(locale)) {
      commit('SET_LANG', locale)
    }
  }
}
