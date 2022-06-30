<template>
  <div class="login-wrapper">
    <div class="modal">
      <el-form :model="user" status-icon :rules="rules" ref="userForm">
        <div class="title">火星</div>
        <el-form-item label="账号" prop="userName">
          <el-input type="text" v-model="user.userName">
            <template #prefix>
              <el-icon class="el-input__icon"><user /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="密码" prop="userPwd">
          <el-input type="password" v-model="user.userPwd">
            <template #prefix>
              <el-icon class="el-input__icon"><lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn-login" @click="login"
            >登陆</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { User, Lock } from "@element-plus/icons-vue";
export default {
  mounted() {},
  components: {
    User,
    Lock,
  },
  data() {
    return {
      user: {
        userName: "admin",
        userPwd: "123456",
      },
      rules: {
        userName: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        userPwd: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    login() {
      this.$refs.userForm.validate((valid) => {
        if (valid) {
          this.$api.login(this.user).then((res) => {
            console.log(res);
            this.$router.push("/welecome");
            this.$store.commit("saveUserInfo", res);
            // console.log(res);
          });
        }
      });
    },
  },
};
</script>

<style lang="scss">
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: #f9fcff;
  width: 100vw;
  height: 100vh;
  .modal {
    width: 500px;
    padding: 50px;
    background: #fff;
    box-shadow: 0px 0px 10px 3px #c7c9cb4d;
    .title {
      font-size: 50px;
      line-height: 1.5;
      text-align: center;
      margin-bottom: 30px;
    }
    .btn-login {
      width: 100%;
    }
  }
}
</style>
