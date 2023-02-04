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
        <div class="title">产品销售额</div>
        <div id="chartpie"></div>
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
              <div>今日订单数</div>
              <div class="num">{{ downData.curOrderCount }}</div>
            </el-col>
            <el-col :span="8">
              <div>汇总确认订单</div>
              <div class="num">{{ downData.curCollect }}</div>
            </el-col>
            <el-col :span="8">
              <div>累计金额</div>
              <div class="num">{{ downData.curMoney }}</div>
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
              <div>本月订单数</div>
              <div class="num">{{ downData.orderCount }}</div>
            </el-col>
            <el-col :span="8">
              <div>汇总确认订单</div>
              <div class="num">{{ downData.collect }}</div>
            </el-col>
            <el-col :span="8">
              <div>累计金额</div>
              <div class="num">{{ downData.money }}</div>
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
import * as echarts from 'echarts'
export default {
  data () {
    return {
      list: [],
      downData: []
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
    this.getHomeFormat()
    this.getHomeOrder()
  },
  methods: {
    draw1 (xaxisData, yAmountData, yNumData) {
      var chartDom = document.getElementById('chart')
      var myChart = echarts.init(chartDom)
      var option

      option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['销售额', '销售量']
        },
        xAxis: {
          type: 'category',
          data: xaxisData
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '销售额',
            data: yAmountData,
            type: 'line',
            smooth: true
          },
          {
            name: '销售量',
            type: 'bar',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: yNumData
          }
        ]
      }

      option && myChart.setOption(option)
    },
    draw2 (pieData) {
      var chartDom = document.getElementById('chartpie')
      var myChart = echarts.init(chartDom)
      var option

      option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: '销售额',
            type: 'pie',
            radius: '50%',
            data: pieData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }

      option && myChart.setOption(option)
    },
    async getHomeCount () {
      const res = await this.$api.getHomeCount()
      console.log(res.data.data.list)
      this.list = res.data.data.list
    },
    async getHomeFormat () {
      const res = await this.$api.getHomeFormat()
      console.log('这是折线图数据', res.data.result.data.sale_money)
      const data = res.data.result.data.sale_money
      const xaxis = []
      const yNum = []
      const yAmount = []
      const pieData = []
      for (const item of data) {
        // 获取获取折线图需要的数据
        xaxis.push(item.name)
        yNum.push(item.num)
        yAmount.push(item.total_amount)
        const i = { value: item.total_amount, name: item.name }
        pieData.push(i)
      }
      this.draw1(xaxis, yAmount, yNum)
      this.draw2(pieData)
    },
    async getHomeOrder () {
      const res = await this.$api.getHomeOrder()
      console.log('这是最下边的订单信息', res.data.list)
      this.downData = res.data.list
    }
  }
}
</script>

<style lang="less" scoped>
  .home {
    margin: 10px;
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
    #chart{
      width: 100%;
      height: 100%;
    }
    }
    .area {
      flex: 1;
      background: #fff;
      padding: 10px;
      // background-color: red;
      #chartpie {
        width: 100%;
        height: 100%;
      }
    }
  }
  .home-footer {
    display: flex;
    padding-left: 20px;
    margin-bottom: 20px;
    text-align: center;
    .box-card {
      flex: 1;
      margin-right: 30px;
      .num {
        margin-top: 8px;
      }
      span {
        font-weight: 600;
      }
    }
  }
</style>
