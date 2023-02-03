<template>
  <div class="layout">
    <div class="menu">
      <Menu :isCollapse="isCollapse"></Menu>
    </div>
    <div class="content" :class="{active: isCollapse}">
      <Content @changeMenu="changeMenu"></Content>
    </div>
  </div>
</template>

<script>
import Menu from './Menu'
import Content from './Content'

export default {
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    changeMenu (att) {
      this.isCollapse = att
    }
  },
  components: {
    Menu,
    Content
  }
}
</script>

<style lang="less" scoped>
    .layout{
        .menu {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            height: 100%;
            // width: 200px;
            background-color: #112f50;
        }
        .content {
          margin-left: 200px;
          transition: all .5s;
        }
        .active {
          margin-left: 64px;
        }
    }
</style>
