<template>
  <div class="pagination">
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page="currentPage1"
      :page-size="pageSize"
      layout="total, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
export default {
  methods: {
    handleCurrentChange (current) {
    //   console.log(`当前页: ${current}`)
      this.$emit('pageChange', current)
    }
  },
  data () {
    return {
      currentPage1: 1
    }
  },
  props: {
    total: {
      type: Number,
      default: 100
    },
    pageSize: {
      type: Number,
      default: 10
    }
  }
}
</script>

<style lang="less" scoped>
.pagination {
    // position: absolute;
    text-align: right;
    background-color: #fff;
    padding: 3px;
}
</style>
