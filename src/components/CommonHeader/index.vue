<template>
  <div class="header-content">
    <div class="l-content">
      <el-button icon="el-icon-menu" size="mini"></el-button>
    </div>
    <div class="r-content"></div>
  </div>
</template>

<script>
export default {
  name: "CommonHeader",
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
}
</style>