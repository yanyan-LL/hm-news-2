import Vue from 'vue'
// 导入app是为了下面渲染根组件
import App from './App.vue'
// 如果不写后缀名默认去找文件夹里的index文件
import router from './router'
// 导入css文件
import './styles/base.less'
// 导入字体图标css
import './styles/iconfont.css'
// 导入vant组件
import Vant from 'vant'
import 'vant/lib/index.css'
// 导入amfe-flexible  html的fontSize会被设置为屏幕宽度的 1/10
import 'amfe-flexible'
// 导入头部组件
import HmHeader from './components/HmHeader.vue'
// 导入logo组件
import HmLogo from './components/HmLogo.vue'
// 导入axios
import axios from 'axios'
// 给axios配置默认的baseURL , 基准地址
axios.defaults.baseURL = 'http://localhost:3000'
// 使用vant插件
Vue.use(Vant)

// 把axios挂载到vue原型上就不用每次都引用axios  通过this.$axios
Vue.prototype.$axios = axios

// 全局注册
Vue.component('hm-header', HmHeader)
Vue.component('hm-logo', HmLogo)

// 用来关闭控制台的提示消息
Vue.config.productionTip = false

new Vue({
  router,
  // 通过render把app渲染成根组件
  render: h => h(App)
}).$mount('#app')
