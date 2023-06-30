<template>
  <div>
    <el-container>
      <el-aside width="auto"><Common-asid /></el-aside>
      <el-container>
        <el-header><CommonHeader /></el-header>
        <common-tag />
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAsid from "../../components/CommonAsid";
import CommonHeader from "../../components/CommonHeader";
import CommonTag from "../../components/CommonTag";
export default {
  name: "Main",
  components: { CommonAsid, CommonHeader, CommonTag },
};
</script>

<style lang="less" scoped>
.el-header {
  padding: 0;
}
</style>