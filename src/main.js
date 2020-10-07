import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入element
import './plugins/element.js'
// 导入全局样式
import './assets/css/global.css'
// 导入字体图标
import './assets/fonts/iconfont.css' 

// 导入NProgress, 包对应的JS和CSS
// import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
