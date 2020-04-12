<template>
   <!-- 图片列表 start -->
  <div>
    <ul class="photo-list">
      <!-- 为了保证样式生效，指定tag => li -->
      <li v-for="item in img_list" :key="item.id">
        <img v-lazy="item.img_url"> <!-- 指定图片的字段 -->
      </li>
    </ul>
  </div>
  <!-- 图片列表 end -->
</template>
<script>
export default {
  data() {
      return {
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
  }
}
</script>
<style lang="scss" scoped>
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

