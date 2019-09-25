<template>
    <div  :class="{  'check':isChecked  }" class="check-button">
      <img src="../../../assets/img/checkbox.png" alt="">
    </div>

</template>

<script>
    export default {
        name: "checkButton",
      props:{
        isChecked:{
          type:Boolean,
        }
      },


    }
</script>

<style scoped>
.check-button{
  width: 20px;
  height:20px;
  border: 1px solid rgba(114, 114, 114, 0.64);
  border-radius: 50%;
}
img{
  width: 18px;
  padding-top: 1px;
}
  .check{
    /*background: url(../../../assets/img/checkbox.svg)center center;*/
    /*background-size:100% auto;*/
    /*border: none;*/
    background-color: #ffacb1;
  }
</style>
