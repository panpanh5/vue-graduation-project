<template>
  <div class="task">
    <!-- 科目 -->
    <!-- 选择科目提交作业 -->

    <div v-for="item in subjectList" :key="item.id">
      <van-cell :title="item.name" is-link :url="'/submit:' + item.id" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 科目列表
      subjectList: [
        { name: "数学", id: 1 },
        { name: "语文", id: 2 },
        { name: "英语", id: 3 },
        { name: "政治", id: 4 },
      ],
    };
  },
};
</script>

<style></style>
