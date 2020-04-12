import Vue from 'vue'
import VueRouter from 'vue-router'; // 导入路由模块
import HomeContainer from './components/tabbar/HomeContainer.vue';
import memberContainer from './components/tabbar/memberContainer.vue';
import shopCarContainer from './components/tabbar/shopCarContainer.vue';
import searchContainer from './components/tabbar/HomeContainer.vue';

import newsList from './components/news/newsList.vue';
import newsInfo from './components/news/newsInfo.vue';

import photoshare from './components/photo/photoshare.vue';
import photoInfo from './components/photo/photoInfo.vue';
import goodsList from './components/goods/goodsList.vue';

let router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home'},
        { path: '/home', component: HomeContainer },
        { path: '/shopCar', component: shopCarContainer },
        { path: '/search', component: searchContainer },
        { path: '/member', component: memberContainer },
        { path: '/home/newsList', component: newsList },
        { path: '/home/newsInfo/:id', component: newsInfo }, // 带参数id的写法
        { path: '/home/photoshare', component: photoshare },
        { path: '/home/photoInfo/:id', component: photoInfo },
        { path: '/home/goodsList', component: goodsList },
    ],
    linkActiveClass: 'mui-active', // 设置路由高亮
})
export default router