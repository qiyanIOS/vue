<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapsed"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <h3>后台管理系统</h3>
    <el-menu-item
      @click="clickMenu(item)"
      v-for="item in noChildren"
      :key="item.name"
      :index="item.name"
    >
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>

    <el-submenu
      v-for="subItem in hasChildren"
      :key="subItem.label"
      :index="subItem.label"
    >
      <template slot="title">
        <i :class="`el-icon-${subItem.icon}`"></i>
        <span slot="title">{{ subItem.label }}</span>
      </template>
      <el-menu-item-group v-for="item in subItem.children" :key="item.name">
        <el-menu-item @click="clickMenu(item)" :index="item.name">{{
          item.label
        }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100vh;
  h3 {
    color: #fff;
    font-size: 16px;
    font-weight: 400px;
    text-align: center;
    line-height: 30px;
  }
}
</style>



<script>
export default {
  data() {
    return {
      menuData: [
        {
          path: "home",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          path: "mall",
          name: "mall",
          label: "商品管理",
          icon: "video-play",
          url: "MallManage/MallManage",
        },
        {
          path: "user",
          name: "user",
          label: "用户管理",
          icon: "user",
          url: "UserManage/UserManage",
        },
        {
          label: "其它",
          icon: "location",
          children: [
            {
              path: "page1",
              name: "page1",
              label: "页面1",
              icon: "setting",
              url: "Other/PageOne",
            },
            {
              path: "page2",
              name: "page2",
              label: "页面2",
              icon: "settin2",
              url: "Other/PageTwo",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    //点击菜单
    clickMenu(item) {
      this.$router.push({
        name: item.path,
      });
    },
  },
  computed: {
    noChildren() {
      console.log("ccc");
      return this.menuData.filter((item) => !item.children);
    },
    hasChildren() {
      return this.menuData.filter((item) => item.children);
    },
    isCollapsed() {
      console.log("nn", this.$store);
      return this.$store.state.tab.isCollapse;
    },
  },
};
</script>
