<template>
  <div>
      <div>发表评论</div>
      <textarea name="" v-model="msg" placeholder="请输入你的评论内容" id="" cols="30" rows="10"></textarea>
      <button @click="sendBtn"> 发送</button>
      <ul class="mui-table-view mui-table-view-striped mui-table-view-condensed">
        <li class="mui-table-view-cell" v-for="item in list" :key="item.id">
            <router-link :to="'/home/newsInfo/'+item.id" class="mui-table">
                <div class="mui-table-cell mui-col-xs-10">
                    <h4 class="mui-ellipsis">{{ item.name }}</h4>
                    <h5>{{ item.msg }}</h5>
                </div>
                <div class="mui-table-cell mui-col-xs-2 mui-text-right">
                    <span class="mui-h5">{{ item.date | dateFormat('YYYY-MM') }}</span>
                </div>
            </router-link>
        </li>
  </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
            id: 0, 
             list: [
                { id: 1, name:'111', msg: 'hahhaha', date: new Date() },
                { id: 2, name:'111', msg: 'hahhaha', date: new Date() },
                { id: 3, name:'111', msg: 'hahhaha', date: new Date() },
                { id: 4, name:'111', msg: 'hahhaha', date: new Date() },
                { id: 5, name:'111', msg: 'hahhaha', date: new Date() },
            ],
            msg: ''
        }
    },
    created() {
        this.id = this.$route.params.id;
    },
    methods: {
        sendBtn() {
            console.log('评论内容 =》', this.msg);
            this.list.unshift({
                id: Math.random(), name: 'ziji', msg: this.msg, date: new Date()
            })
            this.msg = '';n 
        }
    }
}
</script>

<style lang="scss" scoped>

</style>