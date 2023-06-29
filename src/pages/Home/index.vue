<template>
  <div>
    <el-row>
      <el-col style="padding-right: 10px" class="elCol" :span="8"
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
                <p>上次登录时间：<span>2023.06.29 10:00</span></p>
                <p>上次登录地点：<span>西安</span></p>
              </div>
            </div>
          </el-card>
        </div>
        <el-card class="box-card pcard" style="margin-top: 20px">
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
      <el-col style="padding-left: 10px" :span="16"
        ><div class="grid-content bg-purple-light flexContent">
          <el-card
            class="content"
            v-for="itemd in priceList"
            :key="itemd.title"
            :body-style="{ padding: 0 }"
          >
            <div class="num">
              <i
                :class="`el-icon-${itemd.icon}`"
                :style="{ backgroundColor: itemd.color }"
              ></i>
              <div class="priceDetail">
                <p class="price">¥{{ itemd.price }}</p>
                <p class="detail">{{ itemd.title }}</p>
              </div>
            </div>
          </el-card>

          <el-card class="chat" style="height: 280px">
            <!-- //折线 -->
            <div class="myChart" style="height: 280px" ref="mycharts"></div>
          </el-card>
          <div class="doubleChat">
            <el-card :body-style="{ padding: '0px' }">
              <div
                class="bar"
                ref="bar"
                style="height: 280px; background-color: #ccc"
              ></div>
            </el-card>
            <el-card :body-style="{ padding: '0px' }">
              <div class="pei" ref="pei" style="height: 280px"></div>
            </el-card>
          </div></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
import { getData } from "../../api/index";
import * as echarts from "echarts";
export default {
  name: "Home",
  data() {
    return {
      tableData: [],
      labels: {
        name: "产品",
        todybuys: "日购买",
        monthbuys: "月购买",
        totalbuys: "总购买",
      },
      priceList: [
        {
          price: 1234,
          title: "今日支付订单",
          icon: "success",
          color: "#5F9EA0",
        },
        {
          price: 310,
          title: "今日收藏订单",
          icon: "goods",
          color: "#DAA520",
        },
        {
          price: 1245,
          title: "今日未支付订单",
          icon: "info",
          color: "#DC143C",
        },

        {
          price: 1234,
          title: "本月支付订单",
          icon: "success",
          color: "#5F9EA0",
        },
        {
          price: 310,
          title: "本月收藏订单",
          icon: "goods",
          color: "#DAA520",
        },
        {
          price: 1245,
          title: "本月未支付订单",
          icon: "info",
          color: "#DC143C",
        },
      ],
    };
  },
  mounted() {
    getData().then(({ data }) => {
      console.log(data);
      const { tableData } = data.data;
      //拿到table数据
      this.tableData = tableData;
      //拿到折线图数据
      const { orderData } = data.data;
      var lineData = {
        nameList: [], //图例数据
        date: orderData.date, //xAxis数据
        series: [], //展示数据
      };
      lineData.nameList = Object.keys(orderData.data[0]);

      let arr = [];

      -lineData.nameList.forEach((key) => {
        arr.push({
          name: key,
          type: "line",
          data: orderData.data.map((item) => item[key]),
        });
      });

      const myChart = echarts.init(this.$refs.mycharts);
      myChart.setOption({
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: lineData.nameList,
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "10%",
          containLabel: true,
        },

        xAxis: {
          type: "category",
          boundaryGap: false,
          data: lineData.date,
        },
        yAxis: {
          type: "value",
        },
        series: arr,
      });
      //拿到bar图数据
      const { userData } = data.data;

      let monArr = [];
      let valuArr = [];
      userData.forEach(({ dnew, data }) => {
        monArr.push(data);
        valuArr.push(dnew);
      });
      //bar
      const bar = echarts.init(this.$refs.bar);
      bar.setOption({
        xAxis: {
          type: "category",
          data: monArr,
        },
        yAxis: {
          type: "value",
        },
        grid: {
          left: "1%",
          right: "2%",
          bottom: "30%",
          // top:"10%"
          containLabel: true,
        },
        series: [
          {
            data: valuArr,
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
          },
        ],
      });

      //pie

      const { videoData } = data.data;

      const pei = echarts.init(this.$refs.pei);
      pei.setOption({
        tooltip: {
          trigger: "item",
        },

        series: [
          {
            name: "chanping",
            type: "pie",
            radius: "50%",
            data: videoData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      });
    });
  },
};
</script>
<style lang="less" scoped>
.userHeader {
  margin: 20px 0 0 20px;
  border-bottom: 1px solid #ccc;
  .top {
    display: flex;

    img {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      margin-bottom: 20px;
    }

    .userinfo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 60px;
      text-align: center;
      p {
        margin-top: 10px;
        color: #666;
      }
    }
  }
}
.bottom {
  p {
    color: #666;
    margin: 15px 0 15px 20px;
    span {
      margin-left: 40px;
    }
  }
}

.pcard {
  flex: 1;
}
.elCol {
  display: flex;
  flex-direction: column;
}
.flexContent {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .content {
    width: 32%;
    margin-bottom: 10px;
    .num {
      display: flex;
      flex-direction: row;

      i {
        width: 80px;
        height: 80px;
        line-height: 80px;
        color: white;
        font-size: 32px;
        text-align: center;
      }
      .priceDetail {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 20px;
        .price {
          font-size: 25px;
        }
        .detail {
          font-size: 16px;
          color: #999;
        }
      }
    }
  }
}
.chat {
  width: 100%;
}
.doubleChat {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .el-card {
    margin-top: 20px;
    width: 48%;
    height: 200px;
  }
}
</style>