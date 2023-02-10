import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout'
import Login from '../views/Login'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        name: Home,
        component: Home
      },
      {
        path: '/goods',
        component: () => import('../views/GoodsManage'),
        children: [
          {
            path: 'goodslist',
            name: 'GoodsList',
            component: () => import('../views/GoodsManage/List')
          },
          {
            path: 'goodscategory',
            name: 'GoodsCategory',
            component: () => import('../views/GoodsManage/Category')
          },
          {
            path: 'addgoods',
            name: 'AddGoods',
            component: () => import('../views/GoodsManage/List/AddGoods.vue'),
            meta: {
              activeMenu: '/goods/goodslist'
            }
          }
        ]
      },
      {
        path: '/order',
        name: 'Order',
        component: () => import('../views/Order'),
        children: [
          {
            path: 'orderlist',
            name: 'OrderList',
            component: () => import('../views/Order/Orderlist')
          },
          {
            path: 'orderall',
            name: 'OrderAll',
            component: () => import('../views/Order/Orderall')
          },
          {
            path: 'ordercheck',
            name: 'OrderCheck',
            component: () => import('../views/Order/Ordercheck')
          }
        ]
      },
      {
        path: '/advert',
        name: 'Advert',
        component: () => import('../views/Advert'),
        children: [
          {
            path: 'advertlist',
            name: 'AdvertList',
            component: () => import('../views/Advert/Advertlist')
          }
        ]
      }
    ]
  },
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
