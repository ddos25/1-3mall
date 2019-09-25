<template>
  <div class="back-top">
    <img src="../../../assets/img/icons/t1.png" alt="">
  </div>
</template>

<script>
    export default {
        name: "backTop"
    }
</script>

<style scoped>
.back-top{
  position: fixed;
  right: 10px;
  bottom: 58px;
  z-index: 100;
}
.back-top img{
  width: 30px;
  height: 30px;
  transform:rotateZ(180deg);


}
</style>
