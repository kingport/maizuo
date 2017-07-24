<template lang="html">
  <!-- 添加动画组件 -->
  <transition name="slide">
  <div class="showdetails">
    <!-- 演唱会详情 头部导航 -->
    <div class="show-header">
      <ul>
        <li>
          <i @click="btnclick" class="iconfont one">&#xe671;</i>
          <span class="span-one">关闭</span>
          <span class="span-two">卖座·HOPPA卖座</span>
          <i class="iconfont two">&#xe671;</i>
        </li>
      </ul>
    </div>
    <!-- 下单流程盒子 -->
    <!-- 添加滚动组件 -->
    <div class="iscroll3">
      <mt-loadmore  :top-method="loadTop"
                    :bottom-method="loadBottom"
                    ref="loadmore"
                    :autoFill="false">
    <div class="process">
      <div class="process-box">
        <li>
          <span class="progress-span">详情</span>
          <span>下单</span>
          <span>支付</span>
        </li>
        <svg class="step-line"
              xmlns="http://www.w3.org/2000/svg"
              width="200" height="13" viewBox="0 0 267 13">
              <g fill="none" fill-rule="evenodd">
              <g opacity=".26" transform="translate(3 2)">
              <path stroke="#979797" stroke-dasharray="1,4,1,4" stroke-linecap="square" d="M257.5 4.5H.498">
              </path>
              <ellipse cx="133" cy="5" fill="#FFF" stroke="#000" rx="5" ry="5"></ellipse>
              <ellipse cx="258" cy="5" fill="#FFF" stroke="#000" rx="5" ry="5"></ellipse>
              </g><ellipse cx="6" cy="6" fill="#FF5000" rx="6" ry="6"></ellipse></g>
        </svg>
      </div>
    </div>

    <!-- 演出地点 -->
    <div class="show-position">
      <div class="show-position-box">
        <img :src="starUrl" alt="">
        <div class="right">
          <p>{{stardata.masterName}}</p>
          <span class="position-s">{{stardata.slaveName}}</span>
          <!-- <span class="position-s2">深圳湾春茧体育馆</span> -->
          <b>{{price}}</b>
        </div>
      </div>
    </div>

    <!-- 优惠卷 -->

    <div class="coupon">
      <p>优惠卷</p>
      <ul>
        <li v-for="item in couponarr">
          <b>¥{{priceobj+10}}</b>
          <span>{{item}}</span>
        </li>
      </ul>
      <div class="yjlq">
        一键领取
      </div>
    </div>

    <!-- 演出详情 -->
    <p class="img-title">演出详情</p>
    <div v-html="html" class="show-img-details">
      {{showdetailsimg}}
    </div>

  </mt-loadmore>
</div>

    <div class="tabs-show">
      <div class="">
        先领卷在下单
      </div>
    </div>
  </div>
</transition>
</template>

<script>
import Vue from "vue"
//引入路由模块
import router from "../../router"
//引入api路径
import api from "../../Api/Api"
//引入ajax请求模块
import axios from "axios"

import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);

export default {
  data(){
    return{
      id:this.$route.params.id,
      showdetailsimg:[],
      html:"",
      stardata:[],
      starUrl:"",
      couponarr:[],
      price:"",
      priceobj:20
    }
  },
  methods:{
    btnclick(){
      router.go(-1);
    },
    loadTop() {
      this.$refs.loadmore.onTopLoaded();
    },
    loadBottom() {

      this.allLoaded = true;// if all data are loaded
      this.$refs.loadmore.onBottomLoaded();
    }

  },
  created(){
    //演出详情大图片数据的请求
    axios.get(api.showdetailsimgApi+this.id+"/description")
    .then((response)=>{
      this.html = response.data.data.desc
      // console.log(this.html);
    })
    .catch((error)=>{
      console.log(error)
    })
    // 演出明星介绍
    // http://ticket.maizuo.com/api/schedule/31?
    axios.get(api.showdetailsimgApi+this.id)
    .then((response)=>{
      this.stardata = response.data.data
      // 明星人物图像
      this.starUrl = response.data.data.skuList[0].images[1]

      // 优惠券数组
      this.couponarr = response.data.data.options[1].item

      // 价格区间
      let pricemin = response.data.data.skuList[0].marketPrice /100
      let len = response.data.data.skuList.length -1
      let pricemax = response.data.data.skuList[len].marketPrice /100
      this.price = pricemin+"-"+pricemax+"元"

      // console.log(pricemax)

    })
    .catch((error)=>{
      console.log(error)
    })

  }


}
</script>

<style lang="css">

@import "../../css/showdetails.css";

.showdetails{
width: 100%;
  height: 100%;
  background: white;
  position: absolute;
  top: 0;
  z-index: 11;

}
@keyframes slide-enter {
  from{
    transform: translateX(100%);
  }
  to{
    transform:translateX(0%);
  }
}

@keyframes  slide-leave{
  from{
    transform: translateX(0%);

  }
  to{
    transform: translateX(100%);
  }
}
.slide-enter-active{
  animation: slide-enter 400ms ease-in
}
.slide-leave-active{
  animation: slide-leave 400ms ease-in
}

</style>
