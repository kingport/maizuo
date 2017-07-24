<template lang="html">
  <transition name="slide">
  <div class="shoppinglistdetails">
    <!-- 商城页面头部标题 -->
    <div class="shopping-head two">
      <div @click="FanAction" class="fanhuitop"><i class="iconfont">&#xe60c;</i></div>
      <p>卖座商城</p>
      <div class="wechat"><i class="iconfont">&#xe60c;</i></div>
    </div>
    <!-- 商品图片介绍 名字 价格 -->
    <div class="shoppinglisttile">
      <!-- 商品图片轮播 -->
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide :key="index" v-for="(banner,index) in banners">
            <img :src="banner" alt="">
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      <!-- 商品名字 价格 快递 销量 -->
      <div class="title-name">
        <p>{{shoppinglistdata.masterName}}</p>
        <span class="onespan">{{shoppinglistdata.slaveName}}</span>
        <b>¥{{price/100}}</b>
        <div class="">
          <span>快递：{{shoppinglistdata.isMember}}.00元</span>
          <span>销量：{{shoppinglistdata.displaySalesCount}}</span>
          <span>全国</span>
        </div>
      </div>

      <!-- 选择规格数量 -->
      <div @click="specifAction" class="Specifications">
        <div class="">
          <span>选择 规格 数量</span>
          <i class="iconfont">&#xe60c;</i>
        </div>
      </div>

      <!-- 详情图片 -->
      <div class="titlie-imgsss" v-html="detailshtml">

      </div>
    </div>

    <!-- 底部购买栏目 -->
    <div class="list-tabs">
      <div class="tabs-one">
        <i class="iconfont">&#xe730;</i>
        <span>首页</span>
      </div>
      <div class="starshopping">立即购买</div>
    </div>
    <mt-popup
          v-model="popupVisible"
          position="bottom">
          <div class="Popup-details">
              <div class="popup-top">
                <ul>
                  <li>
                    <img :src="minimg"  alt="">
                    <div class="">
                      <b>¥{{price/100}}</b>
                      <span>选择 规格 数量</span>
                    </div>
                  </li>
                  <dl class="two-puspu">
                    <dt class="two-span">{{Model.name}}</dt>
                    <div class="">
                      <a v-for="item in Model.item">{{item}}</a>

                    </div>
                  </dl>
                  <div class="ul-div">
                    <dt class="two-span">选择数量</dt>
                    <div class="">
                      <a>-</a>
                      <a>1</a>
                      <a>+</a>
                    </div>
                  </div>
                </ul>
              </div>
              <!--底部  -->
              <div class="list-tabs1">
                <div class="tabs-one1">
                  <i class="iconfont">&#xe730;</i>
                  <span>首页</span>
                </div>
                <div class="starshopping1">立即购买</div>
              </div>
          </div>

    </mt-popup>
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
// 引入mnit组件 从下方弹出
import { Popup } from 'mint-ui';
Vue.component(Popup.name, Popup);

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  },
  data(){
    return{
      id:this.$route.params.id,
      shoppinglistdata:[],
      banners:[],
      detailshtml:"",
      swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true
        },
      popupVisible:false,
      price:"",
      Model:[],
      minimg:""
    }
  },
  methods:{
    specifAction(){
      console.log("zzzzz");
      this.popupVisible = true
    },
    FanAction(){
      router.go(-1)
    }
  },
  created(){
    // http://aura.maizuo.com/api/active?id=14&page=1&pageSize=20
    //请求商品列表详情数据
    //  http://aura.maizuo.com/api/active?id=22&page=1&pageSize=20
    axios.get(api.shoppinglistdetailsApi+"?id="+this.id)
    .then((response)=>{
      this.detailshtml = response.data.data.desc
      // console.log(response.data.data.desc);
    })
    .catch((error)=>{
      console.log(error)
    })

    // 标题头部信息
    axios.get(api.shoppinglistdetailsnameApi+"?id="+this.id)
    .then((response)=>{
      // 图片数据
      this.banners = response.data.data.skuList[0].images
      // 商品名字  标题
      this.shoppinglistdata = response.data.data
      //价格
      this.price = response.data.data.skuList[0].price
      //结算小图
      this.minimg = response.data.data.skuList[0].images[0];
      // 由于有些产品中没有型号 所以得到数据要进行判断 没有型号的为underfied 让其为""
      if(response.data.data.options[0].item == undefined ||
          response.data.data.options[0].name == undefined){
            this.Model = ""
          }else{
            //型号类型
            this.Model = response.data.data.options[0];
          }
      // console.log(this.Model);
    })
    .catch((error)=>{
      console.log(error)
    })

  }
}
</script>

<style lang="css">
@import "../../css/shoppinglistdetails.css";

.shoppinglistdetails{
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
