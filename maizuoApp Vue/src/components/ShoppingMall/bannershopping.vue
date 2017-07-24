<template lang="html">
  <transition name="slide">
    <div class="bannershopping">
      1111
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

}
</script>

<style lang="css">
.bannershopping{
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
