<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">
        <router-link to="/admin/index" class="content_title_style"
          >首页</router-link
        >
      </van-tabbar-item>
      <van-tabbar-item icon="location-o">
        <router-link to="/admin/location" class="content_title_style"
          >打卡</router-link
        >
      </van-tabbar-item>
      <van-tabbar-item icon="notes-o">
        <router-link to="/admin/task" class="content_title_style"
          >作业</router-link
        >
      </van-tabbar-item>
      <van-tabbar-item icon="friends-o">
        <router-link to="/admin/my" class="content_title_style"
          >我的</router-link
        >
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
  
    };
  },
 
  methods: {
    
    
  },
};
</script>

<style lang="scss" scoped></style>
