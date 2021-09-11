import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    user: {
      data: {}
    },
    userRepos: {
      loading: false,
      data: []
    },
    userFollowing: {
      loading: false,
      data: []
    }
  },
  getters: {},
  mutations: {
    SET_USER_DATA (state, payload) {
      state.user.data = payload
    },
    SET_USER_REPOS (state, payload) {
      state.userRepos.data = payload.data
      state.userRepos.loading = payload.loading
    },
    SET_USER_FOLLOWING (state, payload) {
      state.userFollowing.data = payload.data
      state.userFollowing.loading = payload.loading
    }
  },
  actions: {
    async getUser ({ commit, state }) {
      // const token = sessionStorage.token
      // if (token && state.user.data !== undefined) return
      try {
        const response = await api.client.getUser()
        const data = await response.data
        commit('SET_USER_DATA', data)
      } catch (e) {
        console.log(e)
      }
    },

    async fetchUserRepos ({ commit, state }) {
      commit('SET_USER_REPOS', { loading: true })
      try {
        const response = await api.client.getUserRepos(state.user.data.login)
        const data = await response.data
        commit('SET_USER_REPOS', { loading: false, data })
      } catch (e) {
        commit('SET_USER_REPOS', { loading: false })
        console.error('repos: no username')
        console.error(e)
      }
    },

    async fetchUserFollowing ({ commit }) {
      commit('SET_USER_FOLLOWING', { loading: true })
      try {
        const response = await api.client.getUserFollowing()
        const data = await response.data
        commit('SET_USER_FOLLOWING', { loading: false, data })
      } catch (e) {
        commit('SET_USER_FOLLOWING', { loading: false })
        console.error('following: no username')
        console.error(e)
      }
    },

    async unfollowUser ({ commit }, { username }) {
      try {
        await api.client.unfollowUser(username)
      } catch (e) {
        console.error(e)
      }
    }
  }
}
