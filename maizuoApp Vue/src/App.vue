<template>
  <div id="app">
    <router-view></router-view>
    <nav class="tabs">
      <router-link  :key="index" v-for="(tab,index) in tabs" :to="tab.path">
        <em  :class="tab.name"></em>
        <span>{{tab.title}}</span>
      </router-link>
    </nav>
  </div>
</template>

<script>


export default {
  data(){
    return{
      tabs:[
        {title:"电影",path:"/Film",name:"icon-dianying1 iconfont"},
        {title:"影院",path:"/Cinema",name:"icon-xuanyingyuan iconfont"},
        {title:"演出",path:"/Show",name:"icon-maikefeng1 iconfont"},
        {title:"商城",path:"/ShoppingMall",name:"icon-shangcheng1 iconfont"},
        {title:"我的",path:"/Me",name:"icon-wo iconfont"}
      ],
      colorindex:"coloes"
    }
  },
  methods:{
    btnAction(index){
      console.log(index);

    }
  }

}
</script>

<style>
  @import "css/icon.css";
</style>
