<template lang="html">
  <!-- 热映电影组件 -->
  <div class="">
    <slot name="banner"></slot>
    <slot name="list"></slot>
  </div>
</template>

<script>
//引入轮播图组件
// import banner from "../banner/banner.vue"
// 引入列表组件
// import list from "../list/list.vue"


export default {
  components:{
    // banner,
    // list
  }

}
</script>

<style lang="css">
</style>
