<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
    export default {
        name: "navbar"
    }
</script>

<style scoped>
.nav-bar{
  display: flex;
  height: 44px;
  /*background-color: plum;*/
  text-align: center;line-height: 44px;

}
  .left,.right{
    width: 60px;
    /*background-color: yellow;*/
  }
  .center{
    flex: 1;
    /*background-color: green;*/
  }
</style>
