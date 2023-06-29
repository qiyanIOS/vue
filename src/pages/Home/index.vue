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
              <div class="bottom">
                <p>上次登录时间:<span>2023.06.28 10:00</span></p>
                <p>上次登录地点:<span>西安</span></p>
              </div>
            </div>
          </el-card>
        </div>
        <el-card style="margin-top: 20px">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column
              v-for="(val, k) in labels"
              :key="k"
              :prop="k"
              :label="val"
            >
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="16"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      tableData: [
        {
          name: "苹果",
          todybuy: 100,
          monthBuy: 300,
          totalBuy: 500,
        },
        {
          name: "小米",
          todybuy: 200,
          monthBuy: 300,
          totalBuy: 600,
        },
        {
          name: "华为",
          todybuy: 100,
          monthBuy: 300,
          totalBuy: 500,
        },
        {
          name: "三星",
          todybuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "魅族",
          todybuy: 100,
          monthBuy: 300,
          totalBuy: 500,
        },
        {
          name: "洛基亚",
          todybuy: 100,
          monthBuy: 300,
          totalBuy: 500,
        },
      ],

      labels: {
        name: "课程",
        todybuy: "日购买",
        monthBuy: "月购买",
        totalBuy: "总购买",
      },
    };
  },
};
</script>
<style lang="less" scoped>
.userHeader {
  .top {
    display: flex;
    justify-content: left;
    padding: 20px 0;
    border-bottom: 1px solid #ccc;

    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-left: 40px;
    }
    .userinfo {
      display: flex;
      flex-direction: column;
      margin-left: 60px;
      text-align: center;
      justify-content: center;
    }
  }
  .bottom {
    p {
      font-size: 16px;
      color: #666;
      margin: 15px 0 15px 40px;
      span {
        margin-left: 10px;
      }
    }
  }
}
</style>