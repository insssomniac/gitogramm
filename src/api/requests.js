import axios from 'axios'

const baseURL = 'https://api.github.com'
const token = sessionStorage.getItem('token')

export const makeRequest = ({
  url, method = 'get', data = {}, withBaseUrl = true, headers = {}
}) => axios({
  url,
  method,
  data,
  baseURL: withBaseUrl ? baseURL : '',
  headers: {
    Authorization: `token ${token}`,
    ...headers
  }
})
