import Vue from 'vue';
import VueRouter from 'vue-router';
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css'; // 引入扩展的css，不然不显示购物车图标，注意：还需要引入其ttf文件
import app from './App.vue';
import router from './router';
Vue.use(VueRouter);
// 按需导入mint-ui的组件
// import { Header, Swipe, SwipeItem, Lazyload  } from 'mint-ui';
import 'mint-ui/lib/style.css'; // mt-header还需要引入其样式
// Vue.component(Header.name, Header); // 注册
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.use(Lazyload)

// 由于按需导入，加载的小图标无法显示，所以我们直接采用全部导入
import MintUI from 'mint-ui'
Vue.use(MintUI)

import VuePreview from 'vue2-preview' // 使用图片预览插件
Vue.use(VuePreview) 

import moment from 'moment'; // 导入格式化时间的插件
Vue.filter('dateFormat', function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern);
})

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})

