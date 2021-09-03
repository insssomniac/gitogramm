import { makeRequest } from '../requests'

export const getUser = ({ token }) => {
  return makeRequest({
    url: '/user',
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  })
}
