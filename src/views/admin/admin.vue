<template>
  <div class="admin">
    <!-- 头部 -->
    <keep-alive>
      <Header class="header" :header-title="headerTitle"></Header>
    </keep-alive>

    <!-- 中间显示 -->
    <div class="container">
      <router-view></router-view>
    </div>
    <!-- 底部固定 -->
    <keep-alive>
      <Footer class="footer" @footer-active="footerActive"></Footer>
    </keep-alive>
  </div>
</template>

<script>
import footer from "../../components/footer/footer";
import header from "../../components/header/header";
export default {
  data() {
    return {
      headerTitle: {
        active: 0,
        name: "首页",
      },
    };
  },
  // 注册组件
  components: {
    Header: header,
    Footer: footer,
  },
  methods: {
    footerActive(data) {
      console.log(data.active, data.name);
      this.headerTitle = {
        active: data.active,
        name: data.name,
      };
    },
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
