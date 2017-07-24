import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"

import MintUI from "mint-ui"

Vue.use(MintUI);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  template: '<App/>',
  components: { App }
})
// 电影开始时间
Vue.filter("time",function(value){
  let d = new Date(value)
  let h = d.getHours();
  let m = d.getMinutes();
  if(h<10){
    h = "0" + h
  }
  if(m<10){
    m = "0"+m
  }

  return  h + ":"+ m
})
// 电影结束时间
Vue.filter("time1",function(value){
  let d = new Date(value)
  let h = d.getHours();
  let m = d.getMinutes();
  if(h<10){
    h = "0" + h
  }
  if(m<10){
    m = "0"+m
  }

  return  h + ":"+ m
})
// 电影上映时间
Vue.filter("time2",function(value){
  let d = new Date(value)
  let m = d.getMonth()+1;
  let day = d.getDate();


  return  m + "月"+ day + "日"
})
