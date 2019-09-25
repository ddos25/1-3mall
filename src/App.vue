<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <main-tab-bar></main-tab-bar>

  </div>
</template>

<script>

  import MainTabBar from './components/content/MainTabbar'

  export default {
    name: 'App',

    components:{
      MainTabBar,


    },
  }
</script>

<style>
  /*<!--@improt用于引入css文件，低于css2.1不支持-->*/
    @import "assets/css/base.css";



</style>
