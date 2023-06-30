<template>
  <div class="header-content">
    <div class="l-content">
      <el-button
        @click="isHiddenMethon"
        icon="el-icon-menu"
        size="mini"
        style="margin-right: 20px"
      ></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="item in tags"
          :key="item.path"
          :to="{ path: item.path }"
          >{{ item.label }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img src="../../assets/images/pp.webp" alt="" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>我的</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import tab from "../../store/tab";
import { mapState } from "vuex";
export default {
  name: "CommonHeader",
  methods: {
    isHiddenMethon() {
      this.$store.commit("collapsMenu");
    },
  },
  computed: {
    ...mapState({
      tags: (state) => state.tab.menuList,
    }),
  },

  mounted() {
    console.log("@@@", mapState(["menuList"]));
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
  .l-content {
    display: flex;
    align-items: center;
    /deep/.el-breadcrumb__item {
      .el-breadcrumb__inner {
        &.is-link {
          color: #666;
        }
      }
      &:last-child {
        .el-breadcrumb__inner {
          color: #fff;
        }
      }
    }
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