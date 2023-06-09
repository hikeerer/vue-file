import {createRouter, createWebHistory} from 'vue-router';

// 定义路由配置
const routes = [
    // { path: '/', redirect: 'http://localhost:8081/login' }, // 将根路径重定向到'/home'页面
    // { path: '/home', component: () => import('@/components/nobodyUse/VueMain.vue') },
    { path: '/login', component: () => import('@/components/login-user.vue') },
    { path: '/userinfo', component: () => import('@/components/user-interface.vue') },
    { path: '/flight', component: () => import('@/components/flightPage.vue') },
    { path: '/about', component: () => import('@/components/AboutView.vue') },
    { path: '/bklist/:depart?/:arrival?/:date?', name:'bklist',component: () => import('@/components/bookingList.vue') },
    { path: '/bkdtls/:hotelId?/:flightId?/:depart?/:arrival?/:days?/:price?/:name?/:deaprtTime?/:arrivalTime?/:grade?',name:'bkdtls', component: () => import('@/components/bookingDetails.vue') },
    // { path: '/userinfo1', component: () => import('@/components/userinterface_n.vue') },
    { path: '/attraction', component: () => import('@/components/AttractionPage.vue') },
    { path: '/attraction1', component: () => import('@/components/AttractionPage1.vue') },
    // 其他路由配置项
    { path: '/', redirect: '/flight' }, // 将根路径重定向到'/home'页面
];

// 创建路由实例
const router = createRouter({
    history: createWebHistory(),
    routes
});

// 导出路由实例
export default router;
