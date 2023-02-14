import router from './index'
import store from '../store/index'

// 导航守卫
router.beforeEach((to, from, next) => {
  console.log('---to---', to)
  // 判断是否需要登录
  if (to.matched.length && !to.matched.some(item => item.meta.isLogin)) {
    next()
  } else {
    // 需要登录
    // 1.判断是否已经登录了，2，根据token
    const token = store.state.loginModule.userInfo.token
    // const token = '123'
    if (token) {
      next()
    } else {
      next('/login')
    }
  }
})
