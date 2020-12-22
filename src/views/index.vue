<template>
  <div class="index">
    <van-grid clickable :column-num="3">
      <!-- 课程表 -->
      <!-- 代课老师信息 -->
      <!-- 缺勤科目 -->
      <van-grid-item icon="todo-list-o" text="课程表" to="/" />
      <van-grid-item icon="orders-o" text="代课老师信息" to="/" />
      <van-grid-item icon="bar-chart-o" text="缺勤记录" to="/" />
      <van-grid-item icon="friends-o" text="班级信息" to="/" />
    </van-grid>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
