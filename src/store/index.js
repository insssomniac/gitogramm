import { createStore } from 'vuex'
import * as api from '../api'

export default createStore({
  state: {
    trendings: {
      data: {},
      loading: false,
      error: false
    }
  },
  getters: {

  },
  mutations: {
    setTrendingsData (state, payload) {
      state.trendings.data = payload
    }
  },
  actions: {
    async fetchTrendings (state) {
      try {
        const response = await api.trendings.getTrendings()
        const data = await response.data.items

        state.commit('setTrendingsData', data)
        console.log('store')
      } catch (e) {
        console.error(e)
      }
    }
  }
})
