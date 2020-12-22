<template>
  <div>
    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item icon="home-o" replace to="/admin/index">
        首页
      </van-tabbar-item>
      <van-tabbar-item icon="location-o" replace to="/admin/location">
        打卡
      </van-tabbar-item>
      <van-tabbar-item icon="notes-o" replace to="/admin/task">
        作业
      </van-tabbar-item>
      <van-tabbar-item icon="friends-o" replace to="/admin/my">
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      title: [
        {
          active: 0,
          name: "首页",
        },
        {
          active: 1,
          name: "打卡",
        },
        {
          active: 2,
          name: "作业",
        },
        {
          active: 3,
          name: "我的",
        },
      ],
    };
  },

  methods: {
    onChange() {
      //   console.log(this.active);
      this.$emit("footer-active", this.title[this.active]);
    },
  },
};
</script>

<style lang="scss" scoped></style>
