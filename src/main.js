import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
// import VueAMap from 'vue-amap';

// Vue.use(VueAMap);
// VueAMap.initAMapApiLoader({
//     key: '58cd16d8e5dab86f9c8fdfbaacc26959', // 自己到官网申请，我随便写的
//     plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Geolocation', 'Geocoder'], //plugin所要用到的模块功能，按需添加
//     v: '1.4.4', //高德 sdk 版本为 1.4.4
// });
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')