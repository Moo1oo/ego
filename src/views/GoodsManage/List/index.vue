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
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="add">
        <el-row>
          <el-button type="success" round size="small">添加商品</el-button>
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
          <el-table-column prop="image" label="商品图片" width="140" show-overflow-tooltip></el-table-column>
          <el-table-column prop="sellPoint" label="商品卖点" width="140" show-overflow-tooltip></el-table-column>
          <el-table-column prop="descs" label="商品描述" width="250" show-overflow-tooltip>
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
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      formInline: {
        name: '',
        date: ''
      },
      tableData: []
    }
  },
  created () {
    this.getGoodsList(1)
  },
  methods: {
    // 获取产品列表的数据
    async getGoodsList (page) {
      const res = await this.$api.getGoodsList({ page })
      console.log('产品列表的数据', res.data.data)
      if (res.data.status === 200) {
        this.tableData = res.data.data
      }
    },
    onSubmit () {
      console.log('submit!', this.formInline)
    },
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
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
      padding: 10px;
      border: 1px solid #eee;
      border-radius: 3px;
      background-color: white;
    }

    .listtable {
      margin-top: 20px;
    }
  }
</style>
