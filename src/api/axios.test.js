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

const mockFn = jest.fn(() => Promise.resolve({
  data: {
    results: issues
  }
}))

axios.mockImplementation(mockFn)

const getIssuesData = async () => {
  const response = await api.issues.getIssues(params)
  return response.data
}

it('should request issues', async () => {
  await getIssuesData()
  expect(mockFn.mock.calls.length).toBe(1)
})
