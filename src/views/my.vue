<template>
  <div class="my">
    <div>
      <div class="header">
        <!-- 头像 -->
        <img :src="imgSrc" alt="" />
      </div>
      <div class="container">
        功能
        <van-cell is-link @click="showPopup">退出</van-cell>
        <van-popup
          v-model="show"
          position="bottom"
          :style="{ height: '150px' }"
          closeable
          round
        >
          <div class="over_lay">
            <div @click="signOut">退出登陆</div>
            <div @click="showPopup">取消</div>
          </div>
        </van-popup>
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
      show: false,
    };
  },
  methods: {
    // 获取我的资料信息
    getSelfInf() {},
    /**
     * 点击退出显示弹出层
     */
    showPopup() {
      this.show = !this.show;
    },
    /**
     * 退出登录
     */
    signOut() {
      this.$router.push({ path: "/login" });
    },
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
.over_lay {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  & > div {
    height: 40px;
  }
}
</style>
