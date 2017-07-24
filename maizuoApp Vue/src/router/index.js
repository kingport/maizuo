import Vue from 'vue'
import Router from 'vue-router'


// 引入电影，影院，演出，商城，我的 五个分页面组件 其中电影页面为默认页面
import Film from "@/components/Film/film.vue"
import Cinema from "@/components/Cinema/cinema.vue"
import Show from "@/components/show/show.vue"
import ShoppingMall from "@/components/ShoppingMall/shoppingmall.vue"
import Me from "@/components/Me/me.vue"

// 引入电影页面中的详情页面，点击影片进入该影片详情
import Details from "@/components/Film/details.vue"
//引入电影页面中的定位页面，点击地址
import Position from "@/components/Film/position.vue"

// 引入影院页面中的详情页面，点击影院进入影院详情
import Cinemadetails from "@/components/Cinema/cinemadetails.vue"
// 引入影院页面中的影院介绍页面
import Introduction from "@/components/Cinema/introduction.vue"

//引入演出页面中的详情页面，点击进入
import Showdetails from "@/components/show/showdetails.vue"

// 引入商城点击进入详情页面
import Shoppingdetails from "@/components/ShoppingMall/shoppingdetails.vue"

//引入商城详情页面中列表的详情页中的详情页
import Shoppinglistdetails from "@/components/ShoppingMall/shoppinglistdetails.vue"

// 引入商城中有品专区的详情页面
import qualityZone from "@/components/ShoppingMall/qualityZone.vue"

// 引入商城中点击进去banner 详情页面
import Bannershopping from "@/components/ShoppingMall/bannershopping.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component:Film},
    {
      path:"/film",component:Film,
      children:[
        {path:"details/:id",component:Details},
        {path:"position",component:Position}
      ]

    },
    {
      path:"/cinema",component:Cinema,
      children:[
        {
          path:"cinemadetails/:id",component:Cinemadetails,
          children:[
            {path:"introduction",component:Introduction}
          ]
        }

      ]
    },
    {
      path:"/show",component:Show,
      children:[
        {path:"showdetails/:id",component:Showdetails}
      ]
    },
    {
      path:"/shoppingmall",component:ShoppingMall,
      children:[
        {
          path:"shoppingdetails/:id",component:Shoppingdetails,
          children:[
            {path:"shoppinglistdetails/:id",component:Shoppinglistdetails}
          ]
        },
        {
          path:"qualityZone",component:qualityZone
        },
        {
          path:"bannershopping",component:Bannershopping
        }
      ]
    },
    {path:"/me",component:Me}
  ]
})
