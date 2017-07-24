<template lang="html">
  <transition name="slide">
    <div class="qualityZone">
      <!-- 商城页面头部标题 -->
      <div class="shopping-head qualityZone">
        <div class="fanhuitop1"><i class="iconfont">&#xe60c;</i></div>
        <p>手机壳专区</p>
        <div class="wechat1"><i class="iconfont">&#xe60c;</i></div>
      </div>
      <!-- 手机壳专辑 logo -->
      <div v-html="qualityZone" class="qualityZone-logo">

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
export default {
  data(){
    return{
      qualityZone:""
    }  
  },
  created(){
    // 手机专区 数据请求
    axios.get(api.qualityZoneApi+"?cityId=10&id=1190")
    .then((response)=>{
      // this.detailshtml = response.data.data.desc
      console.log(response.data.data.data.content);
      this.qualityZone = response.data.data.data.content
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  // http://m.maizuo.com/act/active/api/active-detail?cityId=10&id=1190
}
</script>

<style lang="css">

@import "../../css/qualityZone.css";

.qualityZone{
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
