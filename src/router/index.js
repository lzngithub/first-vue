import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/page/home/index.vue';
import Login from '@/page/login/index.vue';
Vue.use(Router);

const router = new Router({
  mode:'history',
  base:process.env.BASE_URL,
  routes:[{
    path:'/home',
    name:'home',
    component:Home
  },{
    path:'/login',
    name:'login',
    component:Login
  }
]
});

export default router;