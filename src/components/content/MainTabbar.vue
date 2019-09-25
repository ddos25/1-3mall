<template>
  <tab-bar>
    <tab-bar-item path='/home' activeColor="#ff3573">
      <img slot="item-pic" src="../../assets/img/tabbar/home.svg" alt="">
      <img slot='active-item-pic' src="../../assets/img/tabbar/home-active.png" alt="">
      <div slot="item-title">首页</div>
    </tab-bar-item>
    <tab-bar-item path='/category' activeColor="pink">
      <img slot="item-pic" src="../../assets/img/tabbar/list.svg" alt="">
      <img slot='active-item-pic' src="../../assets/img/tabbar/list-active.png" alt="">
      <div slot="item-title">分类</div>
    </tab-bar-item>
    <tab-bar-item path='/cart' activeColor="pink">
      <img slot="item-pic" src="../../assets/img/tabbar/cart.svg" alt="">
      <img slot='active-item-pic' src="../../assets/img/tabbar/cartactive.png" alt="">
      <div slot="item-title">购物车</div>
    </tab-bar-item>



    <tab-bar-item path='/profile' activeColor="pink">
      <img slot="item-pic" src="../../assets/img/tabbar/my.svg" alt="">
      <img slot='active-item-pic' src="../../assets/img/tabbar/my-active.png" alt="">
      <div slot="item-title">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import tabBar from '../common/tabbar/tabbar'
  import tabBarItem from '../common/tabbar/tabbaritem'
    export default {
        name: "MainTabbar",
      components:{
          tabBar,
        tabBarItem,
      }
    }
</script>

<style scoped>

</style>
