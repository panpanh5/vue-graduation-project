<template>
  <div class="task">
    <!-- 科目 -->
    <!-- 选择科目提交作业 -->
    <div v-for="item in subjectList" :key="item.id">{{ item.name }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 科目列表
      subjectList: [
        { name: "数学" },
        { name: "语文" },
        { name: "英语" },
        { name: "政治" },
      ],
    };
  },
};
</script>

<style></style>
