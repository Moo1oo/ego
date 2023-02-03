<template>
  <div>
    <div class="name">
        <p v-show="!isCollapse">易购后台管理系统</p>
    </div>
    <el-menu default-active="/"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    router
    background-color="#112f50"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">系统首页</span>
    </el-menu-item>
    <el-submenu index="/goods">
        <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">产品管理</span>
        </template>
        <el-menu-item-group>
        <el-menu-item index="/goods/goodslist">产品列表</el-menu-item>
        <el-menu-item index="/goods/goodscategory">产品分类</el-menu-item>
        </el-menu-item-group>
    </el-submenu>
    <el-submenu index="/order">
        <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">订单管理</span>
        </template>
        <el-menu-item-group>
            <el-menu-item index="/order/orderlist">订单列表</el-menu-item>
            <el-menu-item index="/order/orderall">汇总清单</el-menu-item>
            <el-menu-item index="/order/ordercheck">订单审核</el-menu-item>
        </el-menu-item-group>
    </el-submenu>
    <el-submenu index="/advert">
        <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">广告分类</span>
        </template>
        <el-menu-item-group>
            <el-menu-item index="/advert/advertlist">广告列表</el-menu-item>
            <el-menu-item index="4-2" disabled>广告管理</el-menu-item>
        </el-menu-item-group>
    </el-submenu>
    <el-submenu index="5" disabled>
        <template slot="title">
            <i class="el-icon-setting"></i>
            <span slot="title">系统管理</span>
        </template>
        <el-menu-item-group>
            <el-menu-item index="5-1">角色管理</el-menu-item>
            <el-menu-item index="5-2">部门管理</el-menu-item>
        </el-menu-item-group>
    </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: ['isCollapse']
}
</script>

<style lang="less" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .name{
    width: 100%;
    height: 50px;
    color: #fff;
        p{
        text-align: center;
        line-height: 50px;
    }
  }
</style>
