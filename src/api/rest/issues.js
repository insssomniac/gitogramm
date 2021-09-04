import { makeRequest } from '../requests'

export const getIssues = ({ owner, repo }) => {
  return makeRequest({
    url: `/repos/${owner}/${repo}/issues`,
    headers: {
      accept: 'application/vnd.github.v3.html+json'
    }
  })
}
