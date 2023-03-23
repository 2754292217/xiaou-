import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
Vue.use(uView);
// 把请求挂载到原型上
import api from "@/utils/api.js"
Vue.prototype.$api=api

import tool from "@/utils/tool.js"
Vue.prototype.$tool=tool

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})

app.$mount()
