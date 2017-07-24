<template lang="html">
  <div class="">
    <!-- t头部用户信息 -->
    <div class="me-top">
      <div class="me-top-user">
        <img  alt="">
        <p>点击登录</p>
      </div>
      <div class="me-position"><i class="iconfont">&#xe610;</i></div>
    </div>

    <!-- 用户 影片订单 商城订单  演出订单选项栏-->
    <div class="user-tabs">
      <ul>
        <li>
          <i class="iconfont one">&#xe680;</i>
          <span>影片订单</span>
        </li>
        <li>
          <i class="iconfont two">&#xe67b;</i>
          <span>商城订单</span>
        </li>
        <li>
          <i class="iconfont three">&#xe673;</i>
          <span>演出订单</span>
        </li>
      </ul>
    </div>

    <!-- 会员中心 卖座卡 预售卡 现金卷 余额 设置 -->
    <div class="user-xinxi">

        <ul>
          <!-- 会员中心 -->
          <li class="user-xinxi-li">
            <div class="user-li-box">
              <i class="iconfont one">&#xe62c;</i>
              <span>会员中心</span>
              <i class="iconfont two">&#xe670;</i>
            </div>
          </li>
          <!-- 卖座卡 -->
          <li class="user-xinxi-li">
            <div class="user-li-box">
              <i class="iconfont one">&#xe62c;</i>
              <span>卖座卡</span>
              <i class="iconfont two">&#xe670;</i>
            </div>
          </li>
          <!-- 预售卡 -->
          <li class="user-xinxi-li2">
            <div class="user-li-box">
              <i class="iconfont one">&#xe62c;</i>
              <span>预售卡</span>
              <span class="xian"></span>
              <i class="iconfont two">&#xe670;</i>
            </div>
          </li>
          <!-- 现金卷 -->
          <li class="user-xinxi-li2">
            <div class="user-li-box">
              <i class="iconfont one">&#xe62c;</i>
              <span>现金卷</span>
              <span class="xian"></span>
              <i class="iconfont two">&#xe670;</i>
            </div>
          </li>
          <!-- 余额 -->
          <li class="user-xinxi-li2">
            <div class="user-li-box">
              <i class="iconfont one">&#xe62c;</i>
              <span>余额</span>
              <span class="xian"></span>
              <i class="iconfont two">&#xe670;</i>
            </div>
          </li>
          <!--  设置-->

          <li class="user-xinxi-li fist">
            <div class="user-li-box">
              <i class="iconfont one">&#xe62c;</i>
              <span>设置</span>
              <i class="iconfont two">&#xe670;</i>
            </div>
          </li>

        </ul>
      
    </div>

  </div>
</template>

<script>

export default {


}
</script>

<style lang="css">
@import "../../css/me.css"
</style>
