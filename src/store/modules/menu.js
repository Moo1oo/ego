// 存路由导航
// 导入api接口
import api from '../../api/index'
import menuList from '../../router/menuList'
// 路由比对的方法
import { ruleMenu } from '../../utils/ruleMenu'
// 导入路由的基本配置
import { baseRoutes } from '../../router/index'

export default {
  namespaced: true,
  state: {
    dyMenu: [] // 动态导航路由
  },
  mutations: {
    // 设置动态路由
    setMenu (state, payload) {
      state.dyMenu = payload
    },
    // 清空动态路由
    deleteMenu (state) {
      state.dyMenu = []
    }
  },
  actions: {
    // 定义获取路由的网络请求方法
    getMenuList (context) {
      console.log(context.rootState.loginModule)
      return new Promise((resolve, reject) => {
        api.permission({
          token: context.rootState.loginModule.userInfo.token
        }).then(res => {
          console.log('后端返回的动态路由', res.data.data)
          console.log('前端的路由', menuList)
          // 比对前后端的路由文件，筛选出符合后端接口的路由配置文件
          const menus = ruleMenu(menuList, res.data.data)
          context.state.dyMenu = menus
          console.log('menus', menus)
          console.log('只有首页的路由', baseRoutes)
          console.log('baseRoutes[0].children', baseRoutes[0].children)
          // 组合了后端返回的路由与基础路由的结果
          const beforeLoginRoutes = baseRoutes[0].children.concat(menus)
          console.log('befor', beforeLoginRoutes)
          baseRoutes[0].children = beforeLoginRoutes
          console.log('除登录页面以外的全部路由', baseRoutes)
          // 把动态路由送到vux仓库中
          context.commit('setMenu', baseRoutes)
          // console.log(context.state.dyMenu)
          // 完成路由的合并
          // router.addRoute(context.state.dyMenu[0])
          resolve(baseRoutes)
        })
      })
    }
  }
}
