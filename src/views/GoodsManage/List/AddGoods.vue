<template>
  <div class="addGoods">
    <el-row :gutter="5">
      <el-col :span="4"><div class="grid-content bg-purple">
        <div class="menu">
            <div class="title">
                产品类型列表
            </div>
            <div class="tree">
                <GoodsTree @goodsType="goodsType"></GoodsTree>
            </div>
        </div>
      </div></el-col>
      <el-col :span="20"><div class="grid-content bg-purple">
        <div class="content">
            <div class="subtitle">
                添加商品
            </div>
            <div class="wrapper">
                <el-form :model="goodsForm" :rules="rules" ref="goodsForm" label-width="100px" class="demo-goodsForm">
                    <el-form-item label="所属分类" prop="category">
                        <span>{{ goodsForm.category }}</span>
                    </el-form-item>
                    <el-form-item label="商品名称" prop="title">
                        <el-input v-model="goodsForm.title"></el-input>
                    </el-form-item>
                    <el-row>
                        <el-col :span="8">
                            <el-form-item label="商品价格" prop="price">
                                <el-input v-model="goodsForm.price"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="商品数量" prop="num">
                                <el-input v-model="goodsForm.num"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-form-item label="商品卖点" prop="sellPoint">
                        <el-input v-model="goodsForm.sellPoint"></el-input>
                    </el-form-item>
                    <el-form-item label="发布时间" required>
                        <el-col :span="11">
                        <el-form-item prop="date1">
                            <el-date-picker type="date" placeholder="选择日期" v-model="goodsForm.date1" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                        <el-form-item prop="date2">
                            <el-time-picker placeholder="选择时间" v-model="goodsForm.date2" style="width: 100%;"></el-time-picker>
                        </el-form-item>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="图片上传" prop="image">
                        <AddPhoto></AddPhoto>
                    </el-form-item>
                    <el-form-item label="商品描述" prop="descs">
                        富文本编辑器
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">立即添加</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
      </div></el-col>
    </el-row>
  </div>
</template>

<script>
import GoodsTree from './GoodsTree.vue'
import AddPhoto from './AddPhoto.vue'
export default {
  components: {
    GoodsTree,
    AddPhoto
  },
  data () {
    return {
      goodsForm: {
        category: '', // 所属分类
        title: '', // 商品名称
        price: '',
        num: '',
        image: '',
        descs: '',
        sellPoint: '',
        date1: '',
        date2: ''
      },
      rules: {
        category: [
          { required: true }
        ],
        title: [
          { required: true, message: '请输入商品名称', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        price: [
          { required: true, message: '请输入商品价格', trigger: 'blur' }
        ],
        num: [
          { required: true, message: '请输入商品数量', trigger: 'blur' }
        ],
        image: [
          { required: true, message: '请输入商品数量', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        descs: [
          { required: true, message: '请输入商品数量', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    goodsType (val) {
      this.goodsForm.category = val.label
    }
  }
}
</script>

<style lang="less" scoped>
    .addGoods {
        margin: 10px;
        background-color: #fff;
    }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple {
    background: rgb(240, 235, 235);
  }
  .bg-purple-light {
    background: rgb(240, 235, 235);
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .menu {
    height: 600px;
    border: 1px solid #eee;
    .title {
        height: 50px;
        line-height: 50px;
        padding-left: 10px;
        background-color: skyblue;
        border-radius: 4px;
        color:white;
    }
  }
  .content {
    height: 650px;
    border: 1px solid #fff;
    font-size: 14px;
    .subtitle {
        height: 50px;
        line-height: 50px;
        background-color: #d2c6c6;
        padding-left: 10px;
        color: #000;
        border-radius: 4px;
        font-weight: bold;
    }
    .wrapper {
        padding: 10px;
    }
  }
</style>
