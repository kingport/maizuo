<template lang="html">
  <!-- 热门活动组件 -->
  <div class="">
    <banner></banner>
    <div class="hot-events">
      <ul class="hotevents-ul">
        <li class="hotevents-li">
          <img src="" alt="">
          <div class="hot-text">
            <p>卖座演出</p>
            <span>折扣特惠享不停</span>
          </div>
        </li>
        <li class="hotevents-li">
          <img src="" alt="">
        <div class="hot-text">
            <p>卖座演出</p>
            <span>折扣特惠享不停</span>
          </div>
        </li>
        <li class="hotevents-li">
          <img src="" alt="">
        <div class="hot-text">
            <p>卖座演出</p>
            <span>折扣特惠享不停</span>
          </div>
        </li>
        <li class="hotevents-li">
          <img src="" alt="">
          <div class="hot-text">
            <p>卖座演出</p>
            <span>折扣特惠享不停</span>
          </div>
        </li>
      </ul>
    </div>

    <div class="film-list">
      <div class="film-list-box">

        <div class="film-list-box-img"><img ></div>
        <div class="film-list-box-right">
          <p>哇哇在线</p>
          <span>免费领取16张电影票</span>
          <span class="data-fimt">活动时间：2017-07-01至12-01</span>
        </div>
      </div>
    </div>

    <div class="film-list">
      <div class="film-list-box">

        <div class="film-list-box-img"><img ></div>
        <div class="film-list-box-right">
          <p>哇哇在线</p>
          <span>免费领取16张电影票</span>
          <span class="data-fimt">活动时间：2017-07-01至12-01</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import banner from "../banner/banner.vue"
export default {
  components:{
    banner
  }

}
</script>

<style lang="css">
  @import "../../../css/hotevents.css";
</style>
