<template lang="html">
  <div class="">
    <mt-swipe :auto="3000" :show-indicators="false">
      <mt-swipe-item v-for="(item,index) in bannerdata"><img   :src="item.imageUrl" /></mt-swipe-item>
    </mt-swipe>

  </div>
</template>

<script>
import Vue from "vue"
//引入api路径
import api from "../../../Api/Api"
//引入ajax请求模块
import axios from "axios"
//引入路由模块
import router from "../../../router"
// 引入muin-ui swiper 组件
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

export default {
  data(){
    return{
      bannerdata:null,
      imgurl:""
    }
  },
  created(){
    //轮播图的请求
    axios.get(api.bannerApi)
    .then((response)=>{
      // console.log(response.data.data.billboards)
      this.bannerdata = response.data.data.billboards
      this.imgurl = response.data.data.billboards.imageUrl
    })
    .catch((error)=>{
      console.log(error)
    })
  },
  methods:{

  }
}
</script>

<style lang="css">
.mint-swipe-items-wrap img{
  width: 100%;
  height:100%;

}
.mint-swipe-items-wrap {
    position: relative;
    overflow: hidden;
    height: 1.71rem;

}
.mint-swipe {
    overflow: hidden;
    position: relative;
    height: 100%;
    margin-top: 2px;
}
</style>
