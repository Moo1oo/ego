<template>
  <div>
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [{
        label: '产品分类',
        children: []
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  created () {
    this.getGoodsType()
  },
  methods: {
    handleNodeClick (data) {
      // console.log(data.label)
      if (data.label !== '产品分类') {
        this.$emit('goodsType', data)
      }
    },
    async getGoodsType () {
      const res = await this.$api.getGoodsType()
      if (res.status === 200) {
        // console.log(res.data.result)
        // console.log(this.data[0].children)
        res.data.result.forEach(element => {
          this.data[0].children.push({ label: element.name })
        })
      } else {
        this.data[0].children = []
      }
    }
  }
}
</script>

<style>

</style>
