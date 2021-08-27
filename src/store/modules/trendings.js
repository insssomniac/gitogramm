import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    trendings: {
      data: [],
      loading: false,
      error: false
    }
  },
  getters: {
    getRepoById: (state) => (id) => {
      return state.trendings.data.find(item => item.id === id)
    }
  },
  mutations: {
    SET_TRENDINGS_DATA (state, payload) {
      state.trendings.data = payload
    },
    SET_README (state, payload) {
      state.trendings.data = state.trendings.data.map(repo => {
        if (payload.id === repo.id) {
          repo.readme = payload.content
        }
        return repo
      })
    }
  },
  actions: {
    async fetchTrendings ({ commit }) {
      try {
        const response = await api.trendings.getTrendings()
        const data = await response.data.items
        commit('SET_TRENDINGS_DATA', data)
      } catch (e) {
        console.error(e)
        throw e
      }
    },
    async fetchReadme ({ commit, getters }, { id, owner, repo }) {
      const currentRepo = getters.getRepoById(id)
      if (currentRepo.readme !== undefined) return
      try {
        const { data } = await api.readme.getReadme({ owner, repo })
        commit('SET_README', { id, content: data })
      } catch (e) {
        console.error(e)
        throw e
      }
    }
  }
}
