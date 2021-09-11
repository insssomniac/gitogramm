import { makeRequest } from '../requests'
import env from '../../../env'

export const getUser = () => {
  return makeRequest({
    url: '/user'
  })
}

export const getUserRepos = (username) => {
  return makeRequest({
    url: `/users/${username}/repos`
  })
}

export const getUserFollowing = () => {
  return makeRequest({
    url: '/user/following'
  })
}

export const unfollowUser = (username) => {
  return makeRequest({
    url: `/user/following/${username}`,
    method: 'delete'
  })
}

export const getToken = (code) => {
  return makeRequest({
    url: 'https://webdev-api.loftschool.com/github',
    withBaseUrl: false,
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      clientId: env.clientId,
      code,
      clientSecret: env.clientSecret
    }
  })
}
