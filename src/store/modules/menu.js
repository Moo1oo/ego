// 存路由导航
// 导入api接口
import api from '../../api/index'
import menuList from '../../router/menuList'
// 路由比对的方法
import { ruleMenu } from '../../utils/ruleMenu'

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
      api.permission({
        token: context.rootState.loginModule.userInfo.token
      }).then(res => {
        console.log('后端返回的动态路由', res.data.data)
        console.log('前端的路由', menuList)
        // 比对前后端的路由文件，筛选出符合后端接口的路由配置文件
        const menus = ruleMenu(menuList, res.data.data)
        context.state.dyMenu = menus
        console.log(menus)
      })
    }
  }
}
