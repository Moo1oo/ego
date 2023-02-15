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
      // 是否有导航存储到vuex仓库里，如果有，则进入，如果没有，则在此处获取导航
      if (store.state.menu.dyMenu.length > 0) {
        next()
      } else {
        // 没有导航的或就获取导航
        store.dispatch('menu/getMenuList')
      }
    } else {
      next('/login')
    }
  }
})
