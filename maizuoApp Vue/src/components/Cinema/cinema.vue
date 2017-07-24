<template lang="html">
  <div class="">

    <!-- 头部定位及页面标签电影页面 -->
    <div class="header">
      <div class="head-top">
        <!-- 定位 -->
        <div class="head-left">
          <i class="iconfont posi">&#xe604;</i>
          <span>深圳</span>
        </div>
        <!-- 影院 -->
        <div class="head-m">
          全部影院
        </div>
        <!-- 搜索影院 -->
        <div class="cinema-seach"><i class="iconfont">&#xe636;</i></div>

      </div>
      <!-- 全部区域服务 -->
      <div class="cinema-qy">
        <p>全部区域、服务</p>
        <div class="cinma-qy-pos">筛选&nbsp;<i class="iconfont">&#xe61a;</i></div>
      </div>
    </div>

    <div class="iscorrl">
        <mt-loadmore  :top-method="loadTop"
                      :bottom-method="loadBottom"
                      ref="loadmore"
                      :autoFill="false">
        <!-- 轮播图 调用组件 -->
        <banner></banner>
        <!-- 影院地址列表 -->
        <div class="cinema-location">
          <div class="cinema-box" @click="btnAction(item.id)"
                                  :key="index" v-for="(item,index) in cinemadata">
            <ul>
              <li class="one-losction"><span>{{item.name}}</span> <div>¥{{item.minimumPrice}}<span>起</span></div></li>
              <li class="two-location"><span class="address">{{item.address}}</span><span>0.95km</span></li>
              <li class="three-location"><span>购票立减7.2元</span></li>
            </ul>
          </div>
        </div>
      </mt-loadmore>
    </div>
    <!-- 路由组件装载详情页面 -->
  <router-view></router-view>
  </div>
</template>



<script>
import Vue from "vue"
//引入api路径
import api from "../../Api/Api"
//引入ajax请求模块
import axios from "axios"

//引入路由模块
import router from "../../router"




import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);

import banner from "../film/banner/banner.vue"
export default {
  data(){
    return{
      cinemadata:null
    }
  },
  components:{
    banner
  },
  created(){
    //影院列表数据的请求
    axios.get(api.cinemaApi)
    .then((response)=>{
      this.cinemadata = response.data.data.cinemas
      // console.log(response.data.data.cinemas);

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
        path:"./cinema/cinemadetails/"+id
      })
    }
  }
}
</script>

<style lang="css">
@import "../../css/cinema.css";
</style>
