<template>
  <div>
    <div class="header">
      <div class="icon">
        <i class="iconfont icon-toggle-left" @click="changemenu" v-if="showFirst"></i>
        <i class="iconfont icon-toggle-right" @click="changemenu" v-else></i>
      </div>
      <div class="right">
        <span>当前时间：{{ nowTime }}</span>
        <span class="line">|</span>
        <span>欢迎：{{ userInfo.user }}</span>
        <span class="line">|</span>
        <span class="exit">
          <i class="iconfont icon-sign-out"></i>
        </span>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      showFirst: true,
      nowTime: ''
    }
  },
  computed: {
    ...mapState('loginModule', ['userInfo'])
  },
  methods: {
    changemenu () {
      this.showFirst = !this.showFirst
      this.$emit('changeMenu', !this.showFirst)
    }
  },
  created () {
    this.nowTime = dayjs().format('YYYY年MM月DD日')
  }
}
</script>

<style lang="less" scoped>
  .header {
    background-color: #1e78bf;
    height: 40px;
    width: 100%;
    line-height: 40px;
    color: #fff;
    .icon {
      float: left;
      height: 50px;
      .iconfont {
        font-size: 25px;
        margin-left: 5px;
      }
    }
    .right {
      float: right;
      position: relative;
      font-size: 12px;
      padding-right: 30px;
      .line {
        font-size: 12px;
        padding: 0 10px;
        color: #f5f5f5;
      }
      .exit{
        position: absolute;
        // top: 1px;
        right: 10px;
        i{
          font-size: 22px;
          color: red;
        }
      }
    }
  }
</style>
