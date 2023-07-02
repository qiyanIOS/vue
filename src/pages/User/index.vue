<template>
  <div class="manage">
    <div class="user-header">
      <el-button @click="dialogVisible = true" type="primary">
        + 新增
      </el-button>
    </div>
    <!-- 医生数据 -->
    <div class="cardContent" ref="dd" :style="{ height: h }">
      <el-card
        v-for="item in myData"
        :key="item.doctorCode"
        :body-style="{ padding: '0px' }"
      >
        <img :src="item.userLogoUrl" class="image" />
        <div style="padding: 14px">
          <span>{{ item.userName }}</span>
          <div class="bottom clearfix">
            <time class="time">{{ item.doctorTitleName }}</time>
          </div>
        </div>
      </el-card>
    </div>

    <div class="myblock">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="100"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>

    <el-dialog
      title="新增"
      :visible.sync="dialogVisible"
      width="40%"
      :before-close="handleClose"
    >
      <el-form
        :inline="true"
        :label-position="labelPosition"
        ref="form"
        :model="form"
        label-width="80px"
        :rules="rules"
      >
        <el-form-item label="姓名" prop="name">
          <el-input placeholder="请输入姓名" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input
            placeholder="请输入年龄"
            v-model.number="form.age"
          ></el-input>
        </el-form-item>

        <el-form-item label="性别" prop="sex">
          <el-select v-model="form.sex" placeholder="请选择性别">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出生日期" prop="birth">
          <el-date-picker
            v-model="form.birth"
            type="datetime"
            placeholder="选择日期时间"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="地址" prop="addr">
          <el-input placeholder="请输入地址" v-model="form.addr"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="doBtnClick">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getUserData } from "../../api/index";
import { jiyiData } from "../../api/index";

export default {
  name: "User",
  data() {
    return {
      dialogVisible: false,
      labelPosition: "right",
      myData: [],

      form: {
        name: "",
        sex: "",
        age: "",
        birth: "",
        addr: "",
      },
      rules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        age: [
          { required: true, message: "年龄不能为空", trigger: "blur" },
          { type: "number", message: "年龄必须为数字值", trigger: "blur" },
        ],
        sex: [{ required: true, message: "性别不能为空", trigger: "blur" }],
        birth: [{ required: true, message: "日期不能为空", trigger: "blur" }],
        addr: [{ required: true, message: "地址不能为空", trigger: "blur" }],
      },
    };
  },

  methods: {
    doBtnClick() {
      this.$refs.form.validate((avalidate) => {
        if (avalidate) {
          console.log(this.form);
          this.handleClose();
        }
      });
    },

    //关闭dialog
    handleClose() {
      this.dialogVisible = false;
      this.$refs.form.resetFields();
    },

    handleCurrentChange(e) {
      console.log(e);
      this.getData(e);
    },

    getData(pageNum) {
      const from = {
        rowNum: 20,
        pageNum: pageNum,
        hasSigning: -1,
        patientCode: "01001d8a9d474edb548819b9c8b16662",
        hasAttention: -1,
        patientName: "齐*",
        hospitalInfoCode: "84f92a46f9d646a1afb4aa1f0fa5963e",
        hasMedical: -1,
        hasPackage: 0,
        requestClientType: 1,
        departmentSecondId: "",
        departmentId: "",
        province: "",
        city: "",
        hospitalType: "",
        searchName: "",
        area: "",
        doctorTitle: "",
        loginUserPosition: "37.3^-122",
        medicalType: "",
      };

      const data = {
        jsonDataInfo: JSON.stringify(from),
      };

      jiyiData(data).then(({ data: { resJsonData } }) => {
        const resultData = JSON.parse(resJsonData);
        console.log(resultData);
        this.myData = resultData;
      });
    },
  },
  computed: {
    h() {
      return `${window.innerHeight - 250}px`;
    },
  },

  mounted() {
    this.getData(1);
  },
};
</script>

<style lang="less" scoped>
.manage {
  flex-direction: column;

  .user-header {
    height: 40px;
  }
  .cardContent {
    // flex: 1;
    display: flex;
    flex-wrap: wrap;

    overflow: auto;
    // justify-content: space-between;

    .el-card {
      margin-top: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
      margin-bottom: 10px;

      flex: 1;
      min-width: 200px;
      max-width: 200px;
      .image {
        width: 150px;
        height: 150px;
      }
    }
  }
  .myblock {
    margin-top: 20px;

    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>