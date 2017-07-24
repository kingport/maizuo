<template lang="html">
  <div class="">
    <div class="show-head">
      <p>  演出票务</p>
    </div>


    <div class="iscorrl2">
    <mt-loadmore  :top-method="loadTop" :bottom-method="loadBottom"  ref="loadmore" :autoFill="false">
    <div class="show-img" :key="index" @click="btnAction(item.id)" v-for="(item,index) in showlist">
      <div class="imgbox">
        <img :src="item.skuList[0].image" alt="">
        <p><span>{{item.masterName}}</span></p>
      </div>
    </div>

  </mt-loadmore>
  </div>
  <!-- 装载容器 -->
  <router-view></router-view>
  
  </div>
</template>

<script>

import Vue from "vue"
//引入api路径
import api from "../../Api/Api"
//引入ajax请求模块
import axios from "axios"

import router from "../../router"


import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);


export default {
  data(){
    return{
      showlist:null
    }

  },
  created(){
    //即将上映数据的请求
    axios.get("../../../static/show.json")
    .then((response)=>{
      console.log(response.data.data.list);
      this.showlist = response.data.data.list
    })
    .catch((error)=>{
      console.log(error)
    })
  },
  methods:{
    loadTop() {
      this.$refs.loadmore.onTopLoaded();
    },
    loadBottom() {

      this.allLoaded = true;// if all data are loaded
      this.$refs.loadmore.onBottomLoaded();
    },
    btnAction(id){
      router.push({
        path:"./show/showdetails/"+id
      })
    }

  }

}
</script>

<style lang="css">
  @import "../../css/show.css"
</style>
