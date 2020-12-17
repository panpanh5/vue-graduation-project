<template>
  <div class="admin">
    <!-- 头部 -->
    <keep-alive>
      <Header class="header"></Header>
    </keep-alive>

    <!-- 中间显示 -->
    <div class="container">
      <router-view></router-view>
    </div>
    <!-- 底部固定 -->
    <keep-alive>
      <Footer class="footer"></Footer>
    </keep-alive>
  </div>
</template>

<script>
import footer from "../../components/footer/footer";
import header from "../../components/header/header";
export default {
  // 注册组件
  components: {
    Header: header,
    Footer: footer,
  },
};
</script>

<style lang="scss" scoped>
.admin {
  height: 100vh;
  //   width: 100vw;
  display: flex;
  flex-direction: column;
  .header {
    height: 50px;
  }
  .container {
    height: 100%;
  }
  .footer {
    height: 50px;
  }
}
</style>
