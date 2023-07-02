<template>
  <div class="login">
    <el-card>
      <el-form ref="loginform" :model="form" :rules="rules" :inline="true">
        <el-form-item label="账号" prop="name">
          <el-input v-model="form.name" placeholder="请输入账号"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="pwd">
          <el-input
            type="password"
            v-model="form.pwd"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-button @click="loginMethonClick" type="primary">登录</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { Message } from "element-ui";
export default {
  name: "Login",
  data() {
    return {
      form: {
        name: "",
        pwd: "",
      },
      rules: {
        name: [{ required: true, message: "请输入账号", trigger: "blur" }],
        pwd: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    loginMethonClick() {
      console.log(this);
      this.$refs.loginform.validate((validate) => {
        if (validate) {
          if (this.form.name !== "qiyan") {
            Message({
              message: "用户名错误",
              type: "error",
            });
          } else if (this.form.pwd !== "643815") {
            Message({
              message: "密码错误错误",
              type: "error",
            });
          } else {
            localStorage.setItem("token", "778899");
            this.$router.push("home");
          }
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login {
  width: 350px;
  margin: 250px auto;
  .el-button {
    margin-left: 50%;
    transform: translateX(-50%);
  }
}
</style>