<template>
  <div class="location">
    <div>
      <div class="header">
        当前打卡位置:
        <div>
          weizhi
        </div>
      </div>
      <div class="container">星期{{ currentTime.week }} 打卡</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 可以自定义管道操作符来处理
      currentTime: {
        week: new Date().getDay(),
        time: "",
        month: new Date().getMonth() + 1,
      },
    };
  },
  methods: {
    getTime() {
      console.log(new Date());
    },
  },
};
</script>

<style></style>
