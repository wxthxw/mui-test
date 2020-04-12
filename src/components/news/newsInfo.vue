<template>
  <div>新闻详情{{id}}
      <comment></comment>
  </div>
</template>

<script>
import comment from '../subComponents/comment.vue'
export default {
    components: {
        comment
    },
    data() {
        return {
            id: 0, 
        }
    },
    created() {
        this.id = this.$route.params.id;
    }
}
</script>

<style lang="scss" scoped>

</style>