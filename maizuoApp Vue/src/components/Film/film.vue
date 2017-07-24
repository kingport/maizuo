<template lang="html">
  <div class="">
    <!-- 头部定位及页面标签电影页面 -->
    <div class="header">
      <div class="head-top">
        <div class="head-left">
          <i @click="posAction" class="iconfont posi">&#xe604;</i>
          <span>深圳</span>
        </div>
        <div class="head-m">
          电影
        </div>
      </div>
    </div>
    <!-- 电影页面分页面的tab切换栏 -->
    <div class="film-tabs">
      <li class="film-tabs-a" :class="index==indexs?'color':''"  :key="index" @click="btnclick(index)" v-for="(tab,index) in filmtabs">
        <a class="active">{{tab.title}}</a>
      </li>
    </div>

    <div class="iscroll">
      <mt-loadmore bottomDropText="加载中..."
                   bottomPullText="上拉加载"
                   :top-method="loadTop"
                   :bottom-method="loadBottom"
                   ref="loadmore"
                   :autoFill="false"
                   :bottom-all-loaded="allLoaded">

        <ul>
          <!-- 热映电影 -->
          <hotfilm v-if="indexs==0?true:false">
            <banner slot="banner"></banner>
            <list slot="list" :list="hotshowdata"></list>
          </hotfilm>
          <!-- 即将上映 -->
          <comingsoon :cominglist="comingdata" v-if="indexs==1?true:false"></comingsoon>
          <!-- 热门活动 -->
          <hotevents v-if="indexs==2?true:false"></hotevents>
        </ul>

      </mt-loadmore>
    </div>
    <!-- 路由组件装载详情页面 -->
      <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue"

// 引入热映电影组件
import hotfilm from "./hotfilm/hotfilm.vue"
// 引入即将上线的电影组件
import comingsoon from "./comingSoon/comingsoon.vue"
// 引入热门活动组件
import hotevents from "./hotevents/hotevents.vue"
// 引入列表组件
import list from "./list/list.vue"
// 引入banner组件
import banner from "./banner/banner.vue"
//引入api 接口
import api from "../../Api/Api"
//引入ajax请求模块
import axios from "axios"
//引入路由模块
import router from "../../router"



import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);

export default {
  components:{
    hotfilm,
    comingsoon,
    hotevents,
    list,
    banner
  },
  data(){
    return{
      filmtabs:[

        {"title":"热映电影",path:"hotfilm"},
        {"title":"即将上线",path:"gogilm"},
        {"title":"热门活动",path:"hotstar"}
      ],
      allLoaded:false,
      indexs:"",
      loadmore:true,
      hotshowdata:[],
      page:1,
      page2:1,
      comingdata:[]
    }

  },
  methods:{
    btnclick(index){
      // console.log(index)
      this.indexs = index;
    },
    //点击进入定位页面
    posAction(){
        router.push({
          path:"./film/position"
        })
    },
    loadTop() {
      this.$refs.loadmore.onTopLoaded();
    },
    loadBottom() {
      this.page++;
      this.page2++;
      this.ajaxdata(this.page);
      this.ajaxcomingdata(this.page2)

      // 做判断 因为数据有限 在全部加载完毕后不能再次加载 只有6页数据
      if(this.page >= 6){
        this.allLoaded = true;
      }
      // 即将上映的电影列表数据
      if(this.page2 >= 13){
        this.allLoaded = true;
      }
      this.$refs.loadmore.onBottomLoaded();
    },
    //热门电影列表数据的请求
    ajaxdata(page){
      axios.get(api.hotShowApi+"?page="+page+"&count=7")
      .then((response)=>{
        //需要先结构出数组
        this.hotshowdata.push(...response.data.data.films);
        // console.log(this.hotshowdata);
      })
      .catch((error)=>{
        console.log(error);
      })
    },

    //即将上映数据的请求
    ajaxcomingdata(page2){
      axios.get(api.soonShowApi+"?page="+page2+"&count=7 ")
      .then((response)=>{
        // console.log(response.data.data.films);
        // console.log(response.data.data.films[0].premiereAt);
        this.comingdata.push(...response.data.data.films)
      })
      .catch((error)=>{
        console.log(error)
      })
    }
  },
  created(){
    //热映电影
    this.ajaxdata(1);
    //即将上映
    this.ajaxcomingdata(1)

  }

}
</script>

<style>
  @import "../../css/head.css";
</style>
