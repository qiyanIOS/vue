<template>
  <div>
    <el-container>
      <el-aside width="200px"><Common-asid /></el-aside>
      <el-container>
        <el-header><CommonHeader /></el-header>
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
export default {
  name: "Main",
  components: { CommonAsid, CommonHeader },
};
</script>

<style lang="less" scoped>
.el-header {
  padding: 0;
}
</style>