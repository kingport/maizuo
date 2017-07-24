<template lang="html">
  <!-- 即将上映组件 -->
  <div class="">
    <banner></banner>
    <div class="film-list" :key="index" v-for="(item,index) in cominglist">
      <div class="hotfilm-title">
        <p @change="formdata(item.premiereAt)">{{item.premiereAt|time2}}</p>
      </div>
      <div class="film-list">
        <div class="film-list-box">
          <div class="score"></div>

          <div class="film-list-box-img"><img :src="item.poster.origin"></div>
          <div class="film-list-box-right">
            <p>{{item.name}}</p>
            <span>{{item.intro}}</span>
            <span class="data-fimt">上映日期：2017年{{item.premiereAt|time2}}</span>
            <div class="zixun"> <a href="#">资讯</a><span>为什么取名 明月几时有？</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue"
//引入api路径
import api from "../../../Api/Api"
//引入ajax请求模块
import axios from "axios"
// /api/film/coming-soon?__t=1498841918806&page=1&count=3
//引入轮播图组件
import banner from "../banner/banner.vue"
export default {
  data(){
    return{
      comingdata:null,
      fimldate:[]
    }
  },
  components:{
    banner
  },
  methods:{
    // 时间戳的转化
    // formdata(now) {
    //   var date = new Date(now);
    //   var newdate = date.getYear()+"/"+(date.getMonth()+1)+"/"+date.getDate()
    //   return newdate
    //
    //   // let year = now.getYear();
    //   // let month = now.getMonth()+1;
    //   // let date = now.getDate();
    //   // // let hour = now.getHours();
    //   // // let second = now.getSeconds();
    //   // return month + "月" + date + "日"
    //   // console.log(year)
    //     console.log(newdate)
    // }

  },
  created(){

  },
  props:["cominglist"]
}
</script>

<style lang="css">
  @import "../../../css/comingsoon.css";
</style>
