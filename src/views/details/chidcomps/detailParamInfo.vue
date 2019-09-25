<template>
  <div class="param-info">
    <div class="title">
      <h2>param-info</h2>
      <h3>param-info</h3>
      <h4>param-info</h4>
    </div>
    <div class="imgbox" v-for="value in image">
      <img :src="value" alt="">
    </div>
  </div>
</template>

<script>
    export default {
        name: "detailParamInfo",
      props:{
        image:{
          type:Array
        }
      }
    }
</script>

<style scoped>
  .imgbox{
    padding: 10px;
  }
  .title{
    padding-left: 10px;
  }

img{
  width: 100%;
}
</style>
