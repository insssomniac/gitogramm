import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import * as api from '../api'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const authRoute = to.name === 'auth'

  if (authRoute) {
    next()
    return
  }

  // const response = await api.client.getUser(sessionStorage.getItem('token'))
  // const response = await fetch('https://api.github.com/user', {
  //   headers: {
  //     Authorization: `token ${localStorage.getItem('token')}`
  //   }
  // })
  // console.log('status: ' + response.status)
  // console.log(response)

  // const token = sessionStorage.getItem('token')
  console.log(sessionStorage.token)

  try {
    const response = await api.client.getUser(sessionStorage.getItem('token'))
    if (response.status === 401) throw new Error()
    next()
  } catch (e) {
    console.error(e)
    next({ name: 'auth' })
  }
})

export default router
