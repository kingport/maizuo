<template lang="html">
  <div class="shoppingmall-box">
    <!-- 商城页面头部标题 -->
    <div class="shopping-head">
      <p>商城</p>
      <div class="wechat"><i class="iconfont">&#xe60c;</i></div>
    </div>


    <div class="iscorrl3">
    <mt-loadmore  :top-method="loadTop"
                  :bottom-method="loadBottom"
                  ref="loadmore"
                  :autoFill="false">
    <!-- 商城页面的轮播图，调用组件 -->
    <banner></banner>

    <!-- 商城页面的选项列表 -->
    <div class="shopping-list">
      <ul>
        <li @click="btnAction(index)" v-for="(item,index) in shoppinglist[0]">
          <img :src="item.imageSrc" alt="">
          <span :name="item.name">{{item.name}}</span>
        </li>
      </ul>
    </div>
    <!-- 39封顶，非常推荐 -->
    <div class="tuijian">
      <div class="" >

        <img @click="ImgAction(id2)" :src="farr.imageSrc"  >
        <img :src="farr1.imageSrc" >
      </div>
    </div>

    <!-- 有品专区 -->
    <div class="quality">
      <p>--有品专区--</p>
      <div  class="quality-img">
        <img @click="mobilePhoneShell" :src="farr4.imageSrc" alt="">
        <div class="">
          <img @click="spiderMan(id)" :src="farr3.imageSrc" alt="">
          <img @click="Bear(id1)"  class="two" :src="farr5.imageSrc" alt="">
        </div>
      </div>
    </div>

    <!-- 小黄人 6个同模板组件 -->
    <div class="shoppingmall-yellow" v-for="item in newzarrdata[0]" >
      <div class="shopping-small">
        <img :src="item.imageSrc"  alt="">
      </div>
      <div class="list-shopping">
        <ul>
          <li @click="periphery(index,items.id)" v-for="(items,index) in item.products">
            <img :src="items.image" alt="">
            <span class="yellowname">{{items.name}}</span>
            <span class="two">¥{{ items.price /100}}.00</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 好货精选 -->
    <div class="selection">
      <p>--好货精选--</p>
        <ul>
          <li @click="btnlistAction(index,item.id)" v-for="(item,index) in listdata">
            <img :src="item.skuList[0].image" alt="">
            <span class="one">{{item.masterName}}</span>
            <div class="two">
              <span class="two-s">¥{{item.maxPrice/100}}.00</span> <span class="two-p">已售{{item.displaySalesCount}}</span>
            </div>
          </li>
        </ul>
    </div>

  </mt-loadmore>
  </div>


  <router-view></router-view>
  </div>
</template>

<script>
//引入轮播图组件
import banner from "../Film/banner/banner.vue"
//引入路由模块
import router from "../../router"

import Vue from "vue"
//引入api路径
import api from "../../Api/Api"
//引入ajax请求模块
import axios from "axios"
// 引入muin-ui swiper 组件
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);

export default {
  data(){
    return{
      id:"",
      id1:"",
      id2:"",
      shoppinglist:[],
      farr:[],
      farr1:[],
      farr3:[],
      farr4:[],
      farr5:[],
      newzarrdata:[],
      listdata:[],
      page:1,
      allLoaded:false,
      loadmore:true

    }
  },
  components:{
    banner
  },
  created(){
    //列表数据的请求
    axios.get("../../../static/shoppingmall.json")
    .then((response)=>{
      // console.log(response.data);
      this.farr = response.data.data[12];
      this.farr1 = response.data.data[11];
      this.farr3 = response.data.data[13];
      this.farr4 = response.data.data[14];
      this.farr5 = response.data.data[15];
      console.log(response.data.data[12]);

      let str4 = response.data.data[12].url;
      let str5 = str4.substring(str4.length-2,str4.length)
      this.id2 = str5
      console.log(this.id2);

      let str = response.data.data[13].url;
      let str1 = str.substring(str.length-4,str.length)
      this.id = str1;

      let str2 = response.data.data[15].url;
      let str3 = str2.substring(str2.length-4,str2.length)
      this.id1 = str3;
      // console.log(this.id1);
      // http://aura.maizuo.com/?showwxpaytitle=1#/item/1215

      let zarr = response.data.data
      var newzarr = [];
      newzarr.push(zarr.splice(16,22))
      this.newzarrdata = newzarr
      // console.log(this.newzarrdata)

      let arr = response.data.data
      // console.log(arr.length)
      var newarr = [] ;
      newarr.push(arr.splice(0,8))
      // console.log(newarr)
      this.shoppinglist = newarr
      // console.log(this.shoppinglist)
    })
    .catch((error)=>{
      console.log(error);
    })

    //好货精选的数据请求
    this.godlistajax(1)

  },
  methods:{
    loadTop() {
      this.$refs.loadmore.onTopLoaded();
    },
    loadBottom() {
      this.page++;
      this.allLoaded = true;
      this.$refs.loadmore.onBottomLoaded();
      setTimeout(()=>{
        this.godlistajax(this.page);
      },2000)
      //判断数据只有13页
      if(this.page >=13){
        this.allLoaded = true;
      }
    },
    //点击进入详情
    btnAction(id){
      id +=8
      console.log(id);
      router.push({
        path:"./shoppingmall/shoppingdetails/"+id
      })
    },
    //封装请求函数
    godlistajax(page){
      axios.get(api.mallGoodsApi +"?page="+page+"&num=20")
      .then((response)=>{
        // console.log(response.data.data.list);
        this.listdata.push(...response.data.data.list)
      })
      .catch((error)=>{
        console.log(error)
      })
    },
    // 点击有品专区 进去手机壳专区
    mobilePhoneShell(){
      router.push({
        path:"./shoppingmall/qualityZone"
      })
    },
    // 点击进入蜘蛛侠手办 购买页面
    spiderMan(id){
      router.push({
        path:"./shoppingmall/shoppingdetails/shoppingdetails/shoppinglistdetails/"+id
      })
    },
    // 点击维尼小熊进入 购买页面
    Bear(id){
      router.push({
        path:"./shoppingmall/shoppingdetails/shoppingdetails/shoppinglistdetails/"+id
      })
    },
    periphery(index,id){
      router.push({
        path:"./shoppingmall/shoppingdetails/shoppingdetails/shoppinglistdetails/"+id
      })
    },
    // 好货精选列表点击进入 购买页面
    btnlistAction(index,id){
      router.push({
        path:"./shoppingmall/shoppingdetails/shoppingdetails/shoppinglistdetails/"+id
      })
      // console.log(id);
    },
    ImgAction(id){
      router.push({
        path:"./shoppingmall/shoppingdetails/"+id
      })
    }
  }
}
</script>

<style lang="css">
@import "../../css/shoppingmall.css"
</style>
