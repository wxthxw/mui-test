<template>
<div>
  <div id="slider" class="mui-slider"> <!-- 去掉 mui-fullscreen ，这会导致全屏显示，占用头尾的区域-->
    <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
      <div class="mui-scroll">
        <!-- mui自带点击高亮，所以我们只需要定义初始的高亮位置 -->
        <a :class="['mui-control-item', item.id === 1 ? 'mui-active' : '']"
            v-for="item in list" :key="item.id">{{ item.name }}</a>
      </div>
    </div>
  </div>
  <!-- 图片列表 start -->
  <div>
    <ul class="photo-list">
      <!-- 为了保证样式生效，指定tag => li -->
      <router-link v-for="item in img_list" :key="item.id" :to="'/home/photoInfo/'+item.id" tag="li">
        <img v-lazy="item.img_url"> <!-- 指定图片的字段 -->
      </router-link>
    </ul>
  </div>
  <!-- 图片列表 end -->
</div>
</template>

<script>
import mui from  '../../lib/mui/js/mui.js'; // 直接这样导入mui，会报错 => Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
// 分析原因： mui.js 中的caller、callee、arguments与 webpack打包使用的严格模式冲突
// 解决方案：禁用webpack的严格模式
// 1 安装： cnpm i babel-plugin-transform-remove-strict-mode
// 2 在.babelrc文件的plugins中配置 "transform-remove-strict-mode"
// 需要注意的是，要去掉"@babel/plugin-transform-runtime",

export default {
  data() {
    return {
      list: [
        { id: 1, name: '标签1' },
        { id: 2, name: '标签2' },
        { id: 3, name: '标签3' },
        { id: 4, name: '标签4' },
        { id: 5, name: '标签5' },
      ],
      img_list: [
        {id: 1, title: '12121',img_url: 'https://hbimg.huabanimg.com/637be97fef29c76a208c0f9cb3d9ff48a4425e9928852-MGaisT_fw658'},
        {id: 2, title: '12121',img_url: 'https://hbimg.huabanimg.com/637be97fef29c76a208c0f9cb3d9ff48a4425e9928852-MGaisT_fw658'},
        {id: 3, title: '12121',img_url: 'https://hbimg.huabanimg.com/637be97fef29c76a208c0f9cb3d9ff48a4425e9928852-MGaisT_fw658'},
        {id: 4, title: '12121',img_url: 'https://hbimg.huabanimg.com/637be97fef29c76a208c0f9cb3d9ff48a4425e9928852-MGaisT_fw658'},
        {id: 5, title: '12121',img_url: 'https://hbimg.huabanimg.com/637be97fef29c76a208c0f9cb3d9ff48a4425e9928852-MGaisT_fw658'},
        {id: 6, title: '12121',img_url: 'https://hbimg.huabanimg.com/637be97fef29c76a208c0f9cb3d9ff48a4425e9928852-MGaisT_fw658'},
        {id: 7, title: '12121',img_url: 'https://hbimg.huabanimg.com/637be97fef29c76a208c0f9cb3d9ff48a4425e9928852-MGaisT_fw658'},
        {id: 8, title: '12121',img_url: 'https://hbimg.huabanimg.com/637be97fef29c76a208c0f9cb3d9ff48a4425e9928852-MGaisT_fw658'},
        {id: 9, title: '12121',img_url: 'https://hbimg.huabanimg.com/637be97fef29c76a208c0f9cb3d9ff48a4425e9928852-MGaisT_fw658'},
        {id: 10, title: '12121',img_url: 'https://hbimg.huabanimg.com/637be97fef29c76a208c0f9cb3d9ff48a4425e9928852-MGaisT_fw658'},
        {id: 11, title: '12121',img_url: 'https://hbimg.huabanimg.com/637be97fef29c76a208c0f9cb3d9ff48a4425e9928852-MGaisT_fw658'},
        {id: 12, title: '12121',img_url: 'https://hbimg.huabanimg.com/637be97fef29c76a208c0f9cb3d9ff48a4425e9928852-MGaisT_fw658'},
        {id: 13, title: '12121',img_url: 'https://hbimg.huabanimg.com/637be97fef29c76a208c0f9cb3d9ff48a4425e9928852-MGaisT_fw658'},
        {id: 14, title: '12121',img_url: 'https://hbimg.huabanimg.com/637be97fef29c76a208c0f9cb3d9ff48a4425e9928852-MGaisT_fw658'},
      ]
    }
  },
  mounted() {
    // 初始化滑动控件
    mui('.mui-scroll-wrapper').scroll({ // 需要在组件挂载之后再去进行初始化操作，不然会导致第一次进入不生效
      deceleration: 0.0005
    })
  }
}
</script>

<style lang="scss" scoped>
* {
  touch-action: pan-y; // 谷歌为了提高页面的滑动流畅度， 解决一个警告
}

.photo-list {
  margin: 0;
  padding: 10px;
  padding-bottom: 0; // 可以抵消掉最后一个li的bottom为0
  li {
    list-style: none;
    background-color: #cccccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    border-radius: 10px;
    overflow: hidden;
    img { // 加载后的展示图片样式
      width: 100%;
      vertical-align: middle; // 抵消掉下部阴影
    }
    img[lazy=loading] { // 注意，文档给的是image（坑，需要修改）
      width: 40px;
      height: 300px;
      margin: auto;
    }
  }
}
</style>