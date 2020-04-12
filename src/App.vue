<template>
  <div class="c-container">
	  	<div class="c-header">
			<mt-header fixed title="首页"></mt-header>
		</div>
     	<div class="c-content">
			<transition>
				<router-view></router-view>
			</transition>
		 </div>
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-tag" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-tag" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-tag" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-tag" to="search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
.c-header {
	height: 40px;
	z-index: 99; /** 防止主体区域滚动时，在header区域也有显示 */
}
.c-content {
	height: calc(100% - 80px);
}
.v-enter{ /***右边进入 */
	opacity: 0;
	transform: translateX(100%)
}
.v-leave-to { /***左边消失 */
	opacity: 0;
	transform: translateX(-100%);
	position: absolute; /** 脱离文档流，使动画切换不会抖动 */
}
.v-enter-active,
.v-leave-active {
	transition: 0.1s all ease;
}
/* 防止路由切换时，头尾超出动画 */
.c-container {
	overflow-x: hidden; 
}

/* 为了解决图片分享中，tabbar与下面标签栏冲突的问题 */
/* 我们可以使用类名重命名的方式 */
/* .mui-tab-item => .mui-tab-item-tag */
.mui-bar-tab .mui-tab-item-tag {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-tag .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-tag .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
/* 设置路由高亮的样式 */
.mui-bar-tab .mui-active {
	color: #007aff;
}
</style>


