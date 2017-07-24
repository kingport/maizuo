<template lang="html">
  <transition name="slide">
  <div class="shoppingdetails">

    <!-- 商城页面头部标题 -->
    <div class="shopping-head one">
      <div class="fanhuitop"><i class="iconfont">&#xe60c;</i></div>
      <p>卖座商城</p>
      <div class="wechat"><i class="iconfont">&#xe60c;</i></div>
    </div>

    <div class="shopping-3d">
      <img :src="shoppingtitle.image" alt="">
      <span>{{shoppingtitle.name}}</span>
    </div>
    <div class="selection">
        <ul>
          <li @click="btnAction(item.id)" v-for="item in shoppingdata" >
            <img :src="item.skuList[0].image"  alt="">
            <span class="one">{{item.masterName}}</span>
            <div class="two">
              <span class="two-s">¥{{(item.skuList[0].price/100)}}</span> <span class="two-p">已售{{item.displaySalesCount}}</span>
            </div>
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
// http://aura.maizuo.com/api/active?id=15&page=1&pageSize=20
export default {
  data(){
    return{
      id:this.$route.params.id,
      shoppingdata:[],
      shoppingtitle:[]
    }
  },
  created(){
    console.log(this.id)
    //请求商品列表详情数据
    axios.get(api.shoppingdetailsApi+"?id="+this.id+"&page=1&num=20")
    .then((response)=>{
      this.shoppingdata = response.data.data.list
      // console.log(response.data.data.list);
    })
    .catch((error)=>{
      console.log(error)
    })

    //请求点击标题数据
    // shoppingdetailstitle
    axios.get(api.shoppingdetailstitleApi+"?id="+this.id)
    .then((response)=>{
      this.shoppingtitle = response.data.data
      this.price =response.data.data.skuList[0].price

      // console.log(response.data.data);

    })
    .catch((error)=>{
      console.log(error)
    })

  },
  methods:{
    btnAction(id){
      router.push({
        path:"./shoppingdetails/shoppinglistdetails/"+id
      })
    }
  }


}
</script>

<style lang="css">
@import "../../css/shoppingdetails.css";


.shoppingdetails{
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
