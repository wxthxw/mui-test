<template>
<div>
  <!-- 图片列表 start -->
  <div>
    <ul class="photo-list">
      <!-- <li v-for="item in img_list" :key="item.id">
        <img :src="item.img_url"> <!-- 指定图片的字段 -->
      <!-- </li> -->
        <!-- <div style="height: 1000px; background-color: pink;"></div> -->
        <vue-preview
            :list="img_list"
            :thumbImageStyle="{width: '80px', height: '80px', margin: '10px'}"
            :previewBoxStyle="{border: '1px solid #eee'}"
            :tapToClose="true"
            @close="closeHandler"
            @destroy="destroyHandler"
            />
    </ul>
  </div>
  <!-- 图片列表 end -->
  <comment></comment>
</div>
</template>

<script>
import comment from '../subComponents/comment.vue';
export default {
    components: {
        comment
    },
  data() {
    return {
      img_list: [
        {id: 1, w: 600, h: 600, src: 'https://hbimg.huabanimg.com/637be97fef29c76a208c0f9cb3d9ff48a4425e9928852-MGaisT_fw658'},
        {id: 2, w: 600, h: 600, src: 'https://hbimg.huabanimg.com/637be97fef29c76a208c0f9cb3d9ff48a4425e9928852-MGaisT_fw658'},
        {id: 3, w: 600, h: 600, src: 'https://hbimg.huabanimg.com/637be97fef29c76a208c0f9cb3d9ff48a4425e9928852-MGaisT_fw658'},
        {id: 4, w: 600, h: 600, src: 'https://hbimg.huabanimg.com/637be97fef29c76a208c0f9cb3d9ff48a4425e9928852-MGaisT_fw658'},
      ]
    }
  },
  methods: {
    // 即将关闭的时候，调用这个处理函数
    closeHandler() {
      console.log('closeHandler')
    },
    // 完全关闭之后，调用这个函数清理资源
    destroyHandler() {
      console.log('destroyHandler')
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
  }
}
</style>