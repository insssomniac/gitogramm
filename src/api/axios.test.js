import axios from 'axios'
import * as api from '../api'

jest.mock('axios')

const params = {
  owner: {
    login: 'testUserLogin'
  },
  name: 'repo'
}
const issues = [{ id: '123', title: 'Test issue' }]

axios.mockImplementation(() => Promise.resolve({
  data: {
    results: issues
  }
}))

const getIssuesData = async () => {
  const response = await api.issues.getIssues(params)
  return response.data
}

it('should request issues', async () => {
  console.log(await getIssuesData())
})
