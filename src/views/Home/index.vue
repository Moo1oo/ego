<template>
  <div class="home">
    <div class="header">
      <div class="item">
        总销售额
        <div class="num">{{ list.saleTotal | num}}</div>
        <div class="bottom">今日销售额：{{ list.sale | num }}</div>
      </div>
      <div class="item">
        访问量
        <div class="num">{{ list.viewsTotal | num}}</div>
        <div class="bottom">今日访问额：{{ list.views | num}}</div>
      </div>
      <div class="item">
        收藏量
        <div class="num">{{ list.collectTotal | num}}</div>
        <div class="bottom">今日收藏量：{{ list.collect | num}}</div>
      </div>
      <div class="item">
        支付量
        <div class="num">{{ list.payTotal | num}}</div>
        <div class="bottom">今日销售额：{{ list.pay | num}}</div>
      </div>
    </div>
    <div class="content">
      <div class="time-info">
        <div class="title">月销售额</div>
        <div id="chart"></div>
      </div>
      <div class="area">
        比例分配
      </div>
    </div>
    <div class="home-footer">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>今日订单</span>
        </div>
        <div class="text item">
          <el-row>
            <el-col :span="8">
              <div>111</div>
            </el-col>
            <el-col :span="8">
             <div>222</div>
            </el-col>
            <el-col :span="8">
             <div>333</div>
            </el-col>
          </el-row>
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>本月订单</span>
        </div>
        <div class="text item">
          <el-row>
            <el-col :span="8">
              <div>111</div>
            </el-col>
            <el-col :span="8">
             <div>222</div>
            </el-col>
            <el-col :span="8">
             <div>333</div>
            </el-col>
          </el-row>
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>快捷入口</span>
        </div>
        <div class="text item">
          <el-button type="primary" size="small">产品管理</el-button>
          <el-button size="small">消息管理</el-button>
          <el-button size="small">内容管理</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  filters: {
    num (value) {
      if (!value) return ''
      return value.toLocaleString()
    }
  },
  mounted () {
    this.getHomeCount()
  },
  methods: {
    async getHomeCount () {
      const res = await this.$api.getHomeCount()
      console.log(res.data.data.list)
      this.list = res.data.data.list
    }
  }
}
</script>

<style lang="less" scoped>
  .home {
    margin: 10px;
    background-color: rgb(240, 235, 235);
  }
  .header {
    display: flex;
    .item{
      flex: 1;
      padding: 10px;
      height: 100px;
      width: 200px;
      margin: 0 20px;
      color: #fff;
      background-color: orange;
      border-radius: 10px;
      font-weight: bold;
      position: relative;
      .num{
        font-size: 22px;
        font-weight: bold;
        margin: 10px;
      }
      .bottom {
        position: absolute;
        border-top: 1px white solid;
        padding: 10px 20px;
        bottom: 0;
        left: 0;
        right: 0;
        font-weight: normal;
      }
    }
    .item:nth-child(1) {
    background-image: linear-gradient(#df887d, #88554d);
    }
    .item:nth-child(2) {
      background-image: linear-gradient(#409eff, #2e556e);
    }
    .item:nth-child(3) {
      background-image: linear-gradient(#b54fa8, #713c7a);
    }
    .item:nth-child(4) {
      background-image: linear-gradient(#1cd2f1, #39717a);
    }
  }
  .content {
    margin: 20px;
    height: 320px;
    display: flex;
    .time-info {
    flex: 2;
    background: #fff;
    margin-right: 20px;
    padding: 10px;
    // background-color: orange;
    }
    .area {
      flex: 1;
      background: #fff;
      padding: 10px;
      // background-color: red;
    }
  }
  .home-footer {
    display: flex;
    padding-left: 20px;
    margin-bottom: 20px;
    .box-card {
      flex: 1;
      margin-right: 30px;
      span {
        font-weight: 600;
      }
    }
  }
</style>
