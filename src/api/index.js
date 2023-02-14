import base from './base'
import axios from '../request/request'

const api = {
  // 首页顶部的数据统计
  getHomeCount () {
    return axios.get(base.homeCount)
  },
  getHomeFormat () {
    return axios.get(base.homeFormat)
  },
  getHomeOrder () {
    return axios.get(base.homeOrder)
  },
  // 产品列表,可传page参数
  getGoodsList (params) {
    return axios.get(base.goodsList, { params })
  },
  // 搜索产品 可传search参数
  getGoodsSearch (params) {
    return axios.get(base.goodsSearch, { params })
  },
  // 根据ID删除商品 可传参数id
  getGoodDeleteById (params) {
    return axios.get(base.goodDeleteById, { params })
  },
  getGoodsType (params) {
    return axios.get(base.goodsType, { params })
  },
  // 登录
  login (params) {
    return axios.post(base.login, params)
  },
  // 用户权限 token
  permission (params) {
    return axios.get(base.permission, { params })
  }
}

export default api
