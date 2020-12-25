import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false

import Vant from 'vant';
import 'vant/lib/index.css';

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(Vant, VueAxios, axios);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')