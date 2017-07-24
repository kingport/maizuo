<template lang="html">
  <div class="">
    <div class="film-list">
      <div class="film-list-box" @click="btnAction(item.id)" :key="index" v-for="(item,index) in list">
        <div class="score">{{item.grade}}</div>

        <div class="film-list-box-img"><img :src="item.poster.origin"></div>
        <div class="film-list-box-right">
          <p>{{item.name}}</p>
          <span>{{item.intro}}</span>
          <span>{{item.cinemaCount}}个影院上线</span>
          <div class="youhui"><a href="#">购票立减7.2元</a><span>首两张特惠→</span></div>
          <div class="zixun"> <a href="#">资讯</a><span>即使被黑化，她依旧在努力的路上！</span></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Vue from "vue"
//引入路由模块
import router from "../../../router"
//引入api路径
import api from "../../../Api/Api"
//引入ajax请求模块
import axios from "axios"
// 引入muin-ui swiper 组件

export default {
  data(){
    return{

      num:2
    }
  },
  methods:{
    btnAction(id){
      console.log(id)
      // http://m.maizuo.com/v4/api/film/3710?__t=1499061274034
      router.push({
        path:"./film/details/"+id
      })
    }
  },
  created(){
    //列表数据的请求
    // axios.get(api.hotShowApi+"?page=1&count=7 ")
    // .then((response)=>{
    //   // console.log(response.data.data.films);
    //   // console.log(response);
    //   this.hotshowdata = response.data.data.films
    // })
    // .catch((error)=>{
    //   console.log(error)
    // })

  },
  props:["list"]


}
</script>

<style lang="css">
.film-list{
  width: 100%;
}
.film-list .film-list-box{
  /*width: 100%;*/
  padding-left: .15rem;
  padding-top: .3rem;
  margin-right: .3rem;
  display: flex;
  padding-bottom: .28rem;
  position: relative;
  /*border-bottom:1px solid #ccc;*/

  position: relative;
}
.film-list .film-list-box:after{
  content:"";
  position: absolute;
  left:0;
  top:0;
  bottom:-1px;
  border-bottom: 1px solid #ccc;
  width: 100%;
  height: 0;
  transform: scaleY(0.5);
}

.film-list .film-list-box .film-list-box-img{
  width:1rem;
  height: 1.4rem;
}
.film-list .film-list-box .film-list-box-img img{
  width: 100%;
  height: 100%;
}
.film-list .film-list-box .film-list-box-right{
  display: flex;
  flex-direction: column;
  padding-left: .2rem;
}
.film-list .film-list-box .film-list-box-right p{
  /*font-size: .27rem;
  color:#7a7a7a;*/
}
.film-list .film-list-box .film-list-box-right span:nth-of-type(1){
  color:#b2b2b2;
  font-size: .2rem;
  padding-top: .25rem;
}
.film-list .film-list-box .film-list-box-right span:nth-of-type(2){
  color:#b2b2b2;
  font-size: .2rem;
  padding-top: .25rem;
}
.film-list .film-list-box .film-list-box-right .youhui{
  display: flex;
  flex-direction: row;
  padding-top: .42rem;
}
.film-list .film-list-box .film-list-box-right .zixun{
  display: flex;
  flex-direction: row;
  padding-top: .40rem;
}
.film-list .film-list-box .film-list-box-right .zixun a{
  color:#ffbd80;
  font-size: .13rem;
  display: inline-block;
  padding: 1px 4px;
  border :1px solid #ffbd80;
  border-radius: 5px;
}
.film-list .film-list-box .film-list-box-right .youhui a{
  color:#ff8381;
  font-size: .13rem;
  display: inline-block;
  width:1.48rem;
  height: .26rem;
  line-height: .26rem;
  text-align: center;
  border:1px solid #ff8381;
  border-radius: 4px;
}
.film-list .film-list-box .film-list-box-right .youhui span{
  display: inline-block;
  color:#5b5b5b;
  font-size: .22rem;
  padding: 0;
  padding-left: .1rem;
}
.film-list .film-list-box .film-list-box-right .zixun span{
  display: inline-block;
  color:#5b5b5b;
  font-size: .22rem;
  padding: 0;
  padding-left: .1rem;
}
.score{
  position: absolute;
  top:.27rem;
  color:#ff5930;
  font-size: .23rem;
  right:0;
}
</style>
