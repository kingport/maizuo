<template lang="html">
  <transition name="slidepos">
    <div class="position">
      <!-- 定位标题栏 -->
      <div class="shopping-head">
        <p>城市列表</p>
        <div @click="FanAction"  class="wechat"><i class="iconfont">&#xe671;</i></div>
      </div>
      <!--  定位列表-->
      <!-- <div class="position-list"> -->
        <div  @scroll="handleScroll" class="position-list-box">
          <ul  ref="pos-ul" :style="{top:indextop}">
            <li>
              <dt>GPS定位您所在的城市</dt>
              <dd class="one">深圳市</dd>
            </li>
            <li>
              <dt>热门城市</dt>
              <dd>深圳</dd>
              <dd>武汉</dd>
              <dd>北京</dd>
              <dd>上海</dd>
            </li>
            <li class="item" :id="item.letter" v-for="item in arr">
              <dt >{{item.letter}}</dt>
              <dd v-for="pos in item.data">{{pos}}</dd>
            </li>
          </ul>
        </div>
      <!-- </div> -->



  <!-- 侧边栏目定位 -->
  <div class="position-right">
    <ul>
      <li>GPS</li>
      <li>热</li>
      <li @click="btnAction(index)" :key="index"  v-for="(items,index) in arr" ><a :style="{color:acolor}">{{items.letter}}</a></li>
    </ul>
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
      arr:[],
      scrolled:false,

      classA:"cc",
      isB:false,
      scroll:'',
      indextop:"",
      aid:"#",
      acolor:"",
      index:0
    }
  },
  methods:{

    // 点击切换到对应位置
    btnAction(index){
      // console.log(index);
      let jump = document.querySelectorAll('.item');
      //点击时候获取top植
      let total = jump[index].offsetTop;
      document.getElementsByClassName("position-list-box")[0].scrollTop = total;

      console.log(document.getElementsByClassName("position-list-box")[0].scrollTop);
      console.log(total)
    },
    handleScroll () {

      var scroltop = document.getElementsByClassName("position-list-box")[0].scrollTop
      var jumps = document.querySelectorAll('.item');

      let total = jumps[0].offsetTop;
      if(scroltop == total){
        jumps[0].addClassName = "colorsty"
      }
      console.log(total);
      console.log(scroltop);
    },
    FanAction(){
      router.go(-1)
    }
  },
  mounted() {
   document.getElementsByClassName("position-list-box")[0].addEventListener('scroll', this.handleScroll)

  },
  created(){
    let arrone = [];
    for(var i=0;i<26;i++){
      var Letter =String.fromCharCode(65+i);
      var obj ={
        letter:Letter,
        data:[]
      }
      arrone.push(obj)
      console.log(arrone);
    }
      axios.get(api.positionApi)
      .then((response)=>{
        // console.log(response.data.data.cities);
        response.data.data.cities.map((item,index)=>{
          // console.log(item);
          // console.log(item.pinyin);
          var i = item.pinyin.slice(0,1);
          var index = i.charCodeAt()-65;
          arrone[index].data.push(item.name)
        })
        arrone.map((item,index)=>{
          if(item.data.length !=0){
            // console.log(item.data);
            this.arr.push(item.data.name)
            // this.arr = arrone;
          }

        })
        this.arr = arrone;

        // console.log(this.arr);

      })
      .catch((error)=>{
        console.log(error);
      })

      //过滤器
      Vue.filter('posid', function(value, param){
            console.log(value);
            return value+param;
          })

    }




  // http://m.maizuo.com/v4/api/city?__t=1499166655554



}
</script>

<style lang="css">
@import "../../css/position.css";

.position{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 11;

}
@keyframes slidepos-enter {
  from{
    transform: translateY(100%);
  }
  to{
    transform:translateY(0%);
  }
}

@keyframes  slidepos-leave{
  from{
    transform: translateY(0%);

  }
  to{
    transform: translateY(100%);
  }
}
.slidepos-enter-active{
  animation: slidepos-enter 400ms ease-in
}
.slidepos-leave-active{
  animation: slidepos-leave 400ms ease-in
}

</style>
