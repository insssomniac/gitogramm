import { feeds } from '../pages/feeds'
import { stories } from '../pages/stories'
import { login } from '../pages/login'
import { profile } from '../pages/profile'

export default [
  {
    path: '/auth',
    component: login,
    name: 'auth'
  },
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
    path: '/profile',
    component: profile,
    name: 'profile'
  }
]
