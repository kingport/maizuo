<template lang="html">
  <!-- 添加移入动画 -->
  <transition name="slide">
    <div class="cinemadetails">

      <!-- 影院头部标题 -->
      <div class="cinema-header">
        <p>{{cinemadlistimg.name}}</p>
        <i @click="btnAction" class="iconfont">&#xe66a;</i>
      </div>

      <!-- 影院名字 3d眼镜  -->
      <div class="cinema-title">
        <div class="">
          <ul>
            <li class="cinema-one">{{cinemadlistimg.name}}</li>
            <li class="cinema-two">
              <span v-for="item in Discount">{{item.name}}</span>
            </li>
            <div class="cinema-three">
              <span class="cinema-span"><i class="iconfont">&#xe67f;</i>&nbsp;{{cinemadlistimg.address}}</span>
              <span class="cinema-spans"><i class="iconfont">&#xe67f;</i>&nbsp联系影院</span>
            </div>

            <i @click="introductionAction" class="iconfont position">&#xe670;</i>
          </ul>
        </div>
      </div>

      <!-- 影片图片封面 -->

          <swiper :options="swiperOption">
            <swiper-slide   v-for="(item,index) in fimlslistimg"><img  @click="imgAction(index)" :src="item.posterAddress"  alt=""></swiper-slide>
          </swiper>


      <!-- 影片对应的名字 -->
      <div class="cinema-name">
        <p>{{fimlslistimg[filmindex]?fimlslistimg[filmindex].filmName:''}}</p>
        <li>
          <span>地区：{{fimlslistimg[filmindex]?fimlslistimg[filmindex].nation:""}}</span>
          <span>|</span>
          <span>类型：{{fimlslistimg[filmindex]?fimlslistimg[filmindex].category:""}}</span>
        </li>
        <i class="iconfont position2">&#xe670;</i>
      </div>
      <!-- 放映日期 -->
      <div class="Fangdate">
        <ul>
          <span  @click="dataAction(index)" :class="{active:dataindex==index}" v-for="(item,index) in Singlefilm?Singlefilm[filmindex]:''">{{item.month}}月{{item.day}}日</span>

          <li><i class="iconfont">&#xe67f;</i>温馨提示：电影开场前15分钟关闭在线售票</li>
        </ul>
      </div>

      <!-- 影片场次列表 -->
      <div class="film-time">
        <ul>
          <li v-for="listiten in Singlefilm?Singlefilm[filmindex][dataindex].arr3:''" >

            <div class="">
              <span>{{listiten.showAt?listiten.showAt:''|time}}</span>
              <i>{{(listiten.showAt?listiten.showAt:'')+(listiten.film?listiten.film.mins:'')*60000|time1}}结束</i>
            </div>
            <div class="guoyu3d">
              <span>{{listiten.film?listiten.film.language:""}}&nbsp;{{listiten.imagery?listiten.imagery:""}}</span>
              <i>{{listiten.hall?listiten.hall.name:""}}</i>
            </div>
            <span class="span-p">
              ¥{{listiten.price?listiten.price.maizuo:""}}
              <i class="iconfont">&#xe670;</i>
            </span>

          </li>
        </ul>
      </div>
      <router-view></router-view>
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

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  },
  data(){
    return{
      id:this.$route.params.id,
      fimlslistimg:[],
      filmindex:0, // 影片索引
      dataindex:0, // 日期索引
      Singlefilm:null,
      num:0,
      Schedule:[],
      swiperOption: {
         pagination: '.swiper-pagination',
         slidesPerView: 4,
         centeredSlides: true,
         paginationClickable: true,
         spaceBetween: 30,
         notNextTick: true,
         onSlideChangeEnd: swiper => {
                this.filmindex = swiper.realIndex;
              //  console.log(this.filmindex);
           }
       },
       cinemadlistimg:[],
       Discount:[]
    }
  },
  methods:{
    // 点击返回 退回上一个页面
    btnAction(){
      router.go(-1)
    },
    introductionAction(){
      router.push({
        path:"./cinemadetails/introduction"
      })
    },
    dataAction(index){
      this.dataindex = index
      console.log(this.dataindex)
    },
    imgAction(index){
      this.filmindex = index
    }

  },
  created(){
    let filmarr = []; // 声明一个空数组来保存 电影列表
    let newtime = new Date();
    let time = newtime.getTime();//获取时间戳为请求实时电影数据做准备
    // console.log(time);
    // http://m.maizuo.com/v4/api/cinema/3280/film?__t=1499270253303
    //请求影院详情列表详情数据
    axios.get(api.filmslistApi+"/"+this.id+"/film?__t="+time)
    .then((response)=>{
      this.fimlslistimg = response.data.data.filmList;
      // 遍历影片 得到每个影片id 为排期做准备
      response.data.data.filmList.map((item)=>{
        var obj ={
          "fimlid":item.filmID,
          "arr1":[]
        }
        filmarr.push(obj)
        // console.log(filmarr);

      })
    })
    .catch((error)=>{
      console.log(error)
    })
    // http://m.maizuo.com/v4/api/cinema/230?__t=1499302581132
    // 电影院名称的详情获取
    axios.get(api.filmslistApi+"/"+this.id)
    .then((response)=>{
      // 影院标题详情
      this.cinemadlistimg = response.data.data.cinema
      // 影院优惠活动政策 ，停车 3d
      this.Discount = response.data.data.cinema.services
      // console.log(response.data.data.cinema.services);
    })
    .catch((error)=>{
      console.log(error)
    })
    // 影片排期数据请求
    // http://m.maizuo.com/v4/api/schedule?__t=1499392535188&film=0&cinema=2791
    axios.get(api.filmScreeningsApi+"?__t="+time+"&film=0&cinema="+this.id)
    .then((response)=>{
      // console.log(response.data.data.schedules);
      let schedules = response.data.data.schedules
      // 先遍历 filmarr 来比较id 将相同的影片提取出来
      filmarr.map((item,index)=>{
        schedules.map((items,j)=>{
          if(item.fimlid == items.film.id){
            item.arr1.push(items)
          }
        })
      })
      console.log(filmarr);
      //遍历新数组
      filmarr.map((item)=>{
        var Finalarr = [];
        // console.log(item);
        item.arr1.map((items)=>{
          let showtime = new Date(items.showAt)
          let month = showtime.getMonth()+1 //月
          let date = showtime.getDate() //日
          // console.log(items)
          let obj ={
            "day":date,
            "month":month,
            "arr3":[]
          }
          obj.arr3.push(items)
        // console.log(obj);
          let bool = false;
          if(Finalarr.length == 0){
            Finalarr.push(obj);
            bool = true
          }else{
            Finalarr.map((res)=>{
              if(res.day == obj.day){
                res.arr3.push(items);
                bool = true
                // console.log(res);
              }else{
                bool = false;
              }
            })
          }
          if(!bool){
            Finalarr.push(obj)
          }
        })
        item.arr1 = Finalarr
      })
      let sarr = [];
      filmarr.map((item)=>{
        sarr.push(item.arr1)
      })
      this.Singlefilm = sarr;
      // console.log(this.Singlefilm[this.filmindex][this.dataindex].arr3.showAt);
      // console.log(this.filmindex);
      console.log(this.dataindex);


    })
    .catch((error)=>{
      console.log(error)
    })
  }
}
</script>

<style lang="css">
  @import "../../css/cinemadetails.css";

  .swiper-slide {
    width: 60%;
  }
  .swiper-slide:nth-child(2n) {
      width: 40%;
  }
  .swiper-slide:nth-child(3n) {
      width: 20%;
  }

.cinemadetails{
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
