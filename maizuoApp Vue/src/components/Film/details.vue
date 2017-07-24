
<template lang="html">
  <transition name="slide">
    <div class="details">
      <!-- 详情页面头部背景 及影片标题 -->
      <div class="details-header" :style="{
        background:imgurl
      }">

        <div class="title"></div>

        <div class="details-top">
          <i @click="goblackAction" class="iconfont one">&#xe671;</i>

          <span ><i class="iconfont">&#xe6dc;</i>&nbsp;剧照</span>
          <span class="span-one"><i class="iconfont">&#xe62f;</i>&nbsp;预告片</span>
        </div>

        <div class="details-main">
          <p>{{detailsdata?detailsdata.name:''}}</p>
          <span>3D</span>
        </div>

        <div class="details-bottom">
          <ul class="bottom-ul">
            <li>{{detailsdata.category}}</li>
            <li>{{detailsdata.nation}}</li>
            <li class="three">{{ parseInt(time/60)}}小时{{time%60}}分钟</li>
          </ul>
          <span>{{detailsdata.grade}}</span>
        </div>

      </div>

      <!-- 影片内容 -->
      <div class="details-main">
        <!-- 影片剧情简介 -->
        <div class="details-text">
          <div class="yext-box">
            <ul>
              <p>
                {{detailsdata.synopsis}}
              </p>
            </ul>
          </div>
        </div>
        <!-- 演员信息列表 -->
        <div class="performer">
          <ul>
            <li v-for="item in actorsdata[0]">
              <img  alt="">
              <span class="performer-one">{{item?item.name:''}}</span>
              <span class="performer-two">夏天</span>
            </li>

          </ul>
        </div>

        <!-- 最新资讯 -->
        <div class="news">
          <div class="news-box">
            <!-- 资讯标题 -->
            <div class="news-title">
              <span class="news-title-one"></span>
              <span class="news-title-two">最新资讯</span>
            </div>
            <!-- 资讯图片 -->
            <div class="news-img">
              <img :src="imgAurl" alt="">
              <p>即使被黑化，她依旧在努力的路上！</p>
            </div>

          </div>
        </div>

        <!-- 评论区域 -->
        <div class="comment">
          <div class="comment-box">
            <!-- 评论标题 -->
            <div class="news-title">
              <span class="news-title-one"></span>
              <span class="news-title-two">评论</span>
            </div>
            <!-- 评论列表 -->
            <ul class="comment-list">
              <li>
                <img  alt="">
                <div class="comment-text">
                  <span class="comment-one">Spring</span>
                  <span class="comment-two">国产科幻片新高度！霍建华的演技真是超赞的，摆脱了自身温润儒雅气质成功诠释变态大反派，杨幂的演技也有突飞猛进的进展</span>
                  <div class="text-bottom">
                    <span>2天前</span>
                    <span>
                      <span>0&nbsp;<i class="iconfont">&#xe612;</i></span>
                      <span class="num-span">300&nbsp;<i class="iconfont">&#xe642;</i></span>
                    </span>
                  </div>
                  <span class="text-bottom-span"></span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
//引入路由模块
import router from "../../router"

//引入api路径
import api from "../../Api/Api"
//引入ajax请求模块
import axios from "axios"

export default {
  data(){
    return{
      id:this.$route.params.id,
      detailsdata:[],
      actorsdata:[],
      imgurl:"",
      time:"",
      imgAurl:''
    }
  },
  methods:{
    goblackAction(){
      router.go(-1);
    },

  },
  created(){
    console.log(this.id)
    //详情数据的请求
    axios.get(api.detailsApi+this.id)
    .then((response)=>{
      console.log(response.data.data.film);
      // console.log(response);
      this.detailsdata = response.data.data.film;
      //切割主演信息
      let arr = response.data.data.film.actors
      let newarr = []
      newarr.push(arr.splice(0,4));
      this.actorsdata = newarr;
      // 提取影片背景图片
      this.imgurl ="url("+ response.data.data.film.cover.origin+") no-repeat"
      // console.log(this.imgurl)
      // 提取
      this.time = response.data.data.film.mins
      // console.log(this.time);

      this.imgAurl = response.data.data.film.photos[8].pictureAddress
    })
    .catch((error)=>{
      console.log(error)
    })
  }
}
</script>

<style lang="css">
@import "../../css/details.css";

.details{
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
      transform:translateX(0%)
    }
}
@keyframes slide-leave {
    from{
      transform: translateX(0%);
    }
    to{
      transform:translateX(100%)
    }
}
.slide-enter-active{
  animation: slide-enter 400ms ease-in
}
.slide-leave-active{
  animation: slide-leave 400ms ease-in
}

</style>
