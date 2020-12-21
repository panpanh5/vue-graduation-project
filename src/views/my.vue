<template>
  <div class="my">
    <div>
      <div class="header">
        <!-- 头像 -->
        <img :src="imgSrc" alt="" />
      </div>
      <div class="container">
        功能
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc:
        "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1207533529,3946480795&fm=26&gp=0.jpg",
    };
  },
  methods: {
    // 获取我的资料信息
    getSelfInf() {},
  },
  mounted() {
    this.getSelfInf();
  },
};
</script>

<style lang="scss" scoped>
// 头像
.header {
  & > img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
  }
}
</style>
