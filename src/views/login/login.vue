<template>
  <div class="login">
    <!-- 
          登录页面：
          1.想实现一个点击可以显示密码和隐藏密码  已经实现
          2.在实际开发中密码应该使用加密手法--来传递登录
       -->
    <div>
      <van-form>
        <van-field
          v-model="loginPar.username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="loginPar.password"
          :type="password.type"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        >
          <!-- <van-icon name="eye-o" /> -->
          <template #button>
            <van-icon :name="password.icon" @click="showPassword" />
          </template>
        </van-field>
        <div style="margin: 16px;">
          <van-button
            round
            block
            type="info"
            native-type="submit"
            @click="login"
            >登录</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import * as CryptoJS from "crypto-js/crypto-js";
export default {
  data() {
    return {
      loginPar: {
        username: "",
        password: "",
      },
      password: {
        icon: "closed-eye",
        visible: false,
        type: "password",
      },
    };
  },
  methods: {
    login() {
      console.log(this.loginPar);
      this.$router.push("/admin");
    },
    showPassword() {
      this.password.visible = !this.password.visible;
      if (this.password.visible) {
        this.password.icon = "eye-o";
        this.password.type = "text";
      } else {
        this.password.type = "password";
        this.password.icon = "closed-eye";
      }
      console.log(this.passwordVisible);
    },
  },
};
</script>

<style></style>
