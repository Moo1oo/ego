// 请求的接口配置
const base = {
  host: 'http://localhost:9898',
  homeCount: '/api/home/dataCount', // 首页数据统计
  homeFormat: '/api/home/format', // 首页的折线图
  homeOrder: '/api/home/orderinfo',
  // 产品管理的接口
  goodsList: '/api/goods/projectList', // 产品列表
  goodsSearch: '/api/goods/search', // 产品查询
  goodDeleteById: '/api/goods/deleteItemById', // 通过ID删除商品
  goodsType: '/api/goods/itemCategory/selectItemCategoryByParentId',
  // 登录接口
  login: '/api/login', // 登录的时候传的是账号密码user pwd
  permission: 'api/permission'// 返回token，用户权限标识
}

export const upload = '/api/upload'

export default base
