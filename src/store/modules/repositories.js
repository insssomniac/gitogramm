import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    trendings: {
      data: []
    },
    starred: {
      data: []
    },
    issues: {
      data: []
    }
  },
  getters: {
    getRepoById: (state) => (id) => {
      const allRepos = state.trendings.data.concat(state.starred.data)
      return allRepos.find(item => item.id === id)
    }
  },
  mutations: {
    SET_TRENDINGS_DATA (state, trendings) {
      state.trendings.data = trendings.map(item => {
        item.following = {
          status: false,
          loading: false,
          error: ''
        }
        return item
      })
    },
    SET_STARRED_DATA (state, payload) {
      state.starred.data = payload
    },
    SET_README (state, payload) {
      state.trendings.data = state.trendings.data.map(repo => {
        if (payload.id === repo.id) {
          repo.readme = payload.content
        }
        return repo
      })
    },
    SET_FOLLOWING: (state, payload) => {
      state.trendings.data = state.trendings.data.map((repo) => {
        if (payload.id === repo.id) {
          repo.following = {
            ...repo.following,
            ...payload.data
          }
        }
        return repo
      })
    },
    SET_ISSUES_DATA: (state, payload) => {
      state.starred.data = state.starred.data.map(item => {
        if (payload.id === item.id) {
          item.issues = {
            loading: payload.loading,
            data: payload.data
          }
        }
        return item
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
    async fetchStarred ({ commit }) {
      try {
        const limit = 16
        const response = await api.starred.getStarredRepos({ limit })
        const data = await response.data
        commit('SET_STARRED_DATA', data)
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
    },
    async starRepo ({ commit, getters }, { id }) {
      const { name: repo, owner } = getters.getRepoById(id)

      commit('SET_FOLLOWING', {
        id,
        data: {
          loading: true,
          error: ''
        }
      })

      try {
        await api.starred.starRepo({ owner: owner.login, repo })
        commit('SET_FOLLOWING', {
          id,
          data: { status: true }
        })
      } catch (e) {
        commit('SET_FOLLOWING', {
          id,
          data: {
            error: `${e}`
          }
        })
      } finally {
        commit('SET_FOLLOWING', {
          id,
          data: {
            loading: false
          }
        })
      }
    },
    async unstarRepo ({ commit, getters }, { id }) {
      const { name: repo, owner } = getters.getRepoById(id)

      commit('SET_FOLLOWING', {
        id,
        data: {
          loading: true,
          error: ''
        }
      })

      try {
        await api.starred.unStarRepo({ owner: owner.login, repo })
        commit('SET_FOLLOWING', {
          id,
          data: { status: false }
        })
      } catch (e) {
        commit('SET_FOLLOWING', {
          id,
          data: {
            error: `${e}`
          }
        })
      } finally {
        commit('SET_FOLLOWING', {
          id,
          data: {
            loading: false
          }
        })
      }
    },
    async checkStatus ({ commit, getters }, { id }) {
      const { name: repo, owner } = getters.getRepoById(id)

      commit('SET_FOLLOWING', {
        id,
        data: {
          loading: true,
          error: ''
        }
      })

      try {
        const status = await api.starred.checkStatus({ owner: owner.login, repo })
        commit('SET_FOLLOWING', {
          id,
          data: { status: status }
        })
      } catch (e) {
        commit('SET_FOLLOWING', {
          id,
          data: {
            error: `${e}`
          }
        })
      } finally {
        commit('SET_FOLLOWING', {
          id,
          data: {
            loading: false
          }
        })
      }
    },
    async fetchIssues ({ commit, getters }, { item }) {
      const { name, owner } = item

      if (item.issues !== undefined) return

      commit('SET_ISSUES_DATA', {
        id: item.id,
        loading: true
      })

      try {
        const response = await api.issues.getIssues({ owner: owner.login, repo: name })
        commit('SET_ISSUES_DATA', {
          id: item.id,
          loading: false,
          data: response.data
        })
      } catch (e) {
        commit('SET_ISSUES_DATA', {
          id: item.id,
          loading: false
        })
        console.log('fetchIssues error: ' + e)
      }
    }
  }
}
