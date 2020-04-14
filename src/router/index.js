import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
	routes:[
		{path:'/dashboard',name:'dashboard',component:()=>import( '@/views/dashboard/dashboard.vue')},
		{path:'/history',name:'history',component:()=>import( '@/views/history/history.vue')}
	]
})