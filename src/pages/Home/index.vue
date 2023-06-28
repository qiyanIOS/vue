<template>
  <div>
    <el-row>
      <el-col :span="8"
        ><div class="grid-content bg-purple">
          <el-card class="box-card">
            <div class="userHeader">
              <div class="top">
                <img src="../../assets/images/pp.webp" alt="" />
                <div class="userinfo">
                  <h3>Admin</h3>
                  <p>超级管理员</p>
                </div>
              </div>
            </div>
          </el-card>
        </div></el-col
      >
      <el-col :span="16"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style lang="less" scoped>
.userHeader {
  display: flex;
}
</style>