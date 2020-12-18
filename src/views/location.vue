<template>
  <div class="location">
    <div>
      <div class="header">
        当前打卡位置:
        <div>
          weizhi
        </div>
      </div>
      <div class="container">{{ currentTime | date() }} 打卡</div>
    </div>
  </div>
</template>

<script>
import format from "../filter/filter";
export default {
  data() {
    return {
      // 可以自定义管道操作符来处理
      currentTime: new Date(),
    };
  },
  filters: {
    date: new format().formatDate,
  },
  methods: {
    getTime() {
      console.log(new Date());
    },
  },
};
</script>

<style></style>
