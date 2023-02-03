import base from './base'
import axios from '../request/request'

const api = {
  // 首页顶部的数据统计
  getHomeCount () {
    return axios.get(base.homeCount)
  }
}

export default api
