<template>
  <!-- 今天晚上回去研究一下怎么打包成移动端app -->
  <div id="submit_vue">
    <!-- 头部 -->
    <van-nav-bar
      title="上交作业"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 内容区 -->
    <div class="container">
      <!-- 学科 -->
      <!-- 题目 -->
      <van-cell-group>
        <van-field label="科目" :value="subject.course" readonly />
        <van-field label="题目" :value="subject.title" readonly />
      </van-cell-group>

      <!-- 作业内容 -->
      <van-field name="uploader" label="作业上交">
        <template #input>
          <van-uploader v-model="uploader" />
        </template>
      </van-field>
      <!-- 提交 -->
    </div>
    <div class="footer">
      <van-button type="info" round @click="submitTask">信息按钮</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subject: {
        title: "大自然的起源?",
        course: "英语",
      },
      uploader: [
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        { url: "https://cloud-image", isImage: true },
      ],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    submitTask() {
      // 学号
      // 科目
      // 作业
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  margin-top: 10px;
  button {
    width: 80%;
  }
}
</style>
