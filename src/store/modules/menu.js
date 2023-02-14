// 存路由导航
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
  }
}
