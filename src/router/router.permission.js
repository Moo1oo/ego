import router from './index'
import store from '../store/index'

// 导航守卫
router.beforeEach((to, from, next) => {
  console.log('---to---', to)
  console.log(to.matched.length)
  console.log(!to.matched.some(item => item.meta.isLogin))
  // 判断是否需要登录
  if (to.matched.length && !to.matched.some(item => item.meta.isLogin)) {
    console.log('不需要登录')
    next()
  } else {
    // 需要登录
    // 1.判断是否已经登录了，2，根据token
    const token = store.state.loginModule.userInfo.token
    console.log('token:', token)
    // const token = '123'
    if (token) {
      // 是否有导航存储到vuex仓库里，如果有，则进入，如果没有，则在此处获取导航
      console.log(store.state.menu.dyMenu.length)
      if (store.state.menu.dyMenu.length > 0) {
        console.log('有匹配')
        next()
      } else {
        // 没有导航的或就获取导航
        console.log('需要获取导航')
        store.dispatch('menu/getMenuList').then(result => {
          console.log('promise返回的结果', result)
          router.addRoute(result[0])
          console.log('totototo', to)
          next({ ...to, replace: true })
        })
      }
    } else {
      next('/login')
    }
  }
})
