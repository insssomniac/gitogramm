import { makeRequest } from '../requests'

export const starRepo = ({ owner, repo }) => {
  return makeRequest({
    url: `/user/starred/${owner}/${repo}`,
    method: 'put',
    headers: {
      accept: 'application/vnd.github.v3.html+json'
    }
  })
}

export const unStarRepo = ({ owner, repo }) => {
  return makeRequest({
    url: `/user/starred/${owner}/${repo}`,
    method: 'delete',
    headers: {
      accept: 'application/vnd.github.v3.html+json'
    }
  })
}

export const checkStatus = ({ owner, repo }) => {
  return makeRequest({
    url: `/user/starred/${owner}/${repo}`,
    method: 'get',
    headers: {
      accept: 'application/vnd.github.v3.html+json'
    }
  })
}

export const getStarredRepos = ({ limit }) => {
  const params = new URLSearchParams()
  if (limit) {
    params.append('per_page', limit)
  }

  return makeRequest({
    url: `/user/starred?${params}`
  })
}
