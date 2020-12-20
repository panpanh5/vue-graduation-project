<template>
  <div class="location">
    <div>
      <div class="header">
        当前打卡位置:
        <div>weizhi</div>
      </div>
      <div class="container">星期{{ currentTime.week }} 打卡</div>
    </div>
  </div>
</template>

<script>
import AMap from "AMap";
export default {
  data() {
    return {
      // 可以自定义管道操作符来处理
      currentTime: {
        week: new Date().getDay(),
        time: "",
        month: new Date().getMonth() + 1,
      },
      // 高德地图获取当前位置
      location: "",
      lat: 0,
      lng: 0,
    };
  },
  mounted() {
    this.getLocation(); // 调用获取地理位置
  },
  methods: {
    getTime() {
      console.log(new Date());
    },

    /** 获取高德地图定位 */
    // 获取当前定位
    getLocation() {
      let that = this;
      var map = new AMap.Map("container", {
        resizeEnable: true,
      });
      AMap.plugin("AMap.Geolocation", function () {
        var geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
          timeout: 10000, //超过10秒后停止定位，默认：5s
          buttonPosition: "RB", //定位按钮的停靠位置
          buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          zoomToAccuracy: true, //定位成功后是否自动调整地图视野到定位点
        });
        geolocation.getCurrentPosition(function (status, result) {
          if (status == "complete") {
            that.onComplete(result);
          } else {
            that.onError(result);
          }
        });
      });
    },
    //解析定位结果
    onComplete(data) {
      this.signAddress = data.formattedAddress;
    },
    //解析定位错误信息
    onError(data) {
      console.log("定位失败:" + data.message);
    },
  },
};
</script>

<style></style>
