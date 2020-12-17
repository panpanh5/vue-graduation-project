<template>
  <div class="login">
    <van-button type="info" @click="login">登录</van-button>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push("/admin");
    },
  },
};
</script>

<style></style>
