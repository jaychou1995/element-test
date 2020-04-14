import Vue from 'vue'
import App from './App.vue'

//引入路由
import router from '@/router/index.js'

//引入rem
import '@/config/rem.js'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
Vue.use(ElementUI);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts


Vue.config.productionTip = false

new Vue({
	router: router,
	render: h => h(App),
}).$mount('#app')
