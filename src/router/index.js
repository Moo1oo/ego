import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout'
import Login from '../views/Login'
import Home from '../views/Home'

Vue.use(VueRouter)

const baseRoutes = [
  {
    path: '/',
    component: Layout,
    meta: {
      isLogin: true
    },
    children: [
      {
        path: '/',
        name: Home,
        component: Home
      }
    ]
  }
]

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
