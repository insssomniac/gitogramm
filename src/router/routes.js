import { feeds } from '../pages/feeds'
import { stories } from '../pages/stories'
import { login } from '../pages/login'

export default [
  {
    path: '/',
    component: feeds,
    name: 'feeds'
  },
  {
    path: '/stories',
    component: stories,
    name: 'stories',
    props: true
  },
  {
    path: '/auth',
    component: login,
    name: 'auth'
  }
]
