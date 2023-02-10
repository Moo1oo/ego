<template>
  <div>
    <div class="list">
      <!-- 搜索区域 -->
      <div class="search">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="产品名称">
            <el-input v-model="formInline.name" placeholder="产品名称"></el-input>
          </el-form-item>
          <el-form-item label="添加时间">
            <el-date-picker type="date" placeholder="选择日期" v-model="formInline.date" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" :clickFlag="clickFlag">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="add">
        <el-row>
          <el-button type="success" round size="small" @click="addGoods">添加商品</el-button>
          <el-button type="danger" round size="small">批量删除</el-button>
        </el-row>
      </div>
      <div class="listtable">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="selection" width="40"></el-table-column>
          <el-table-column prop="id" label="商品ID" width="70"></el-table-column>
          <el-table-column prop="title" label="商品名称" width="80"></el-table-column>
          <el-table-column prop="price" label="商品价格" width="80"></el-table-column>
          <el-table-column prop="num" label="商品数量" width="80"></el-table-column>
          <el-table-column prop="category" label="规格类目" width="80"></el-table-column>
          <el-table-column prop="create_time" label="添加时间" width="190" show-overflow-tooltip>
            <!-- 使用template加上slot-scope="scope"可以获取这一行的信息
            <template slot-scope="scope">
              {{ scope }}
            </template> -->
            <template slot-scope="scope">
              {{ dayjs(scope.row.create_time).format('YYYY-MM-DD HH:mm:ss') }}
            </template>
          </el-table-column>
          <el-table-column prop="sellPoint" label="商品卖点" width="140" show-overflow-tooltip></el-table-column>
          <el-table-column prop="descs" label="商品描述" width="200" show-overflow-tooltip>
          </el-table-column>
          <el-table-column label="商品操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="success"
                icon="iconfont icon-edit"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"><i class="iconfont icon-ashbin"></i>删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <Pagination :total="total" :pageSize="pageSize" @pageChange="getPag"></Pagination>
    </div>
  </div>
</template>

<script>
import Pagination from '../../../components/Pagination'
import dayjs from 'dayjs'
export default {
  data () {
    return {
      formInline: {
        name: '',
        date: ''
      },
      tableData: [], // 用于展示的数据
      total: 0,
      pageSize: 0,
      listTotal: [], // 不用于展示的
      clickFlag: false
    }
  },
  components: {
    Pagination
  },
  created () {
    this.getGoodsList(1)
  },
  methods: {
    dayjs,
    addGoods () {
      this.$router.push('/goods/addgoods')
    },
    // 获取产品列表的数据
    async getGoodsList (page) {
      const res = await this.$api.getGoodsList({ page })
      console.log('产品列表的数据', res.data)
      // console.log('产品列表的数据', res.data.pageSize)
      if (res.data.status === 200) {
        this.tableData = res.data.data
        this.total = res.data.total
        this.pageSize = 8
      }
    },
    async getGoodsSearch (name) {
      const res = await this.$api.getGoodsSearch({ search: name })
      if (res.data.status === 200) {
        // console.log(res.data)
        // 获取数据，listTotal表示把搜索好的数据存起来，tableData表示需要渲染的数据存在这里
        this.listTotal = res.data.result
        if (res.data.result.length > 8) {
          this.tableData = res.data.result.slice(0, 8)
        } else {
          this.tableData = res.data.result
        }
        this.pageSize = 8
        this.total = res.data.result.length
      }
      if (res.data.status === 500) {
        this.tableData = []
        this.total = 0
      }
    },
    getPag (page) {
      if (this.clickFlag) {
        this.tableData = this.listTotal.slice(8 * (page - 1), 8 * page)
      } else {
        // 最开始的分页功能
        this.getGoodsList(page)
      }
    },
    onSubmit () {
      // console.log('submit!', this.formInline.name)
      if (!this.formInline.name) {
        this.tableData = this.getGoodsList(1)
        this.$message.error('请输入名称再查询')
      } else {
        this.getGoodsSearch(this.formInline.name)
        this.clickFlag = true
      }
    },
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row.id)
      this.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 在这里执行删除操作
        this.deleteOne(row.id)
        this.$api.getGoodDeleteById({ id: row.id })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 删除单个商品的接口
    async deleteOne (id) {
      const res = await this.$api.getGoodDeleteById({ id })
      console.log('删除单个产品的接口数据', res.data)
      if (res.data.status === 200) {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        // 删除成功之后还需要更新视图
        this.getGoodsList()
      } else {
        this.$message({
          type: 'warning',
          message: '删除失败'
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .list {
    padding: 10px;
    .search {
      padding: 10px;
      background-color: white;
      border-radius: 3px;
      .el-form-item {
        margin-bottom: 0;
      }
    }
    .add {
      padding: 5px;
      border: 1px solid #eee;
      border-radius: 3px;
      background-color: white;
    }
    .listtable {
      margin-top: 5px;
    }
  }
</style>
