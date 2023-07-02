<template>
  <div class="header-content">
    <div class="l-content">
      <el-button
        @click="isHiddenMethon"
        icon="el-icon-menu"
        size="mini"
      ></el-button>
      <span class="text">首页</span>
    </div>
    <div class="r-content">
      <el-dropdown @command="loginoutMethon">
        <span class="el-dropdown-link">
          <img src="../../assets/images/pp.webp" alt="" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>我的</el-dropdown-item>
          <el-dropdown-item command="loginout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonHeader",

  methods: {
    isHiddenMethon() {
      this.$store.commit("collapsMenu");
    },
    loginoutMethon(command) {
      if (command === "loginout") {
        console.log(command);
        localStorage.removeItem("token");
        this.$router.push({ name: "login" });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.header-content {
  display: flex;
  background-color: #333;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  .text {
    color: #fff;
    font-size: 14px;
    padding: 0 20px;
  }

  .r-content {
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
</style>