<template>
  <div>
    <!-- 头部 -->
    <!-- 中间显示 -->

    <router-view></router-view>
    <!-- 底部固定 -->
    <Footer></Footer>
  </div>
</template>

<script>
import footer from "../../components/footer/footer";
export default {
  components: {
    Footer: footer,
  },
};
</script>

<style></style>
