<template>
  <div class="login">
  <div class="title">
    <h1>用户登录：</h1>
    <!-- <p>账号密码随意输入，admin账号的管理员账号</p> -->
  </div>
  <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
  <el-form-item
    prop="user"
    label="用户名"
    :rules="[
      { required: true, message: '请输入用户名', trigger: 'blur' },
    ]"
  >
    <el-input v-model="dynamicValidateForm.user"></el-input>
  </el-form-item>
  <el-form-item
    prop="psw"
    label="密码"
    :rules="[
      { required: true, message: '请输入密码', trigger: 'blur' },
    ]"
  >
    <el-input v-model="dynamicValidateForm.psw" show-password></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm">登录</el-button>
  </el-form-item>
  </el-form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      dynamicValidateForm: {
        user: '',
        psw: ''
      }
    }
  },
  methods: {
    ...mapMutations('loginModule', ['setUser']),
    submitForm () {
      this.login(this.dynamicValidateForm.user, this.dynamicValidateForm.psw)
    },
    async login (user, pwd) {
      const res = await this.$api.login({ user, pwd })
      console.log(res.data)
      if (res.data.status === 200) {
        const userInfo = {
          user: user,
          token: res.data.token
        }
        // 保存用户信息
        this.setUser(userInfo)
        // 跳转网页
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .login {
    width: 500px;
    height: 300px;
    margin: 200px auto;
    .title {
      margin: 10px;
      text-align: center;
    }
  }
</style>
