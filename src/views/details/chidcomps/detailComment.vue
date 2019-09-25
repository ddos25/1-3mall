<template>
  <div class="detailComment">
    <div class="comment-info">
      <div class="title">
        <h2>comments</h2>
        <h3>comments</h3>
        <h4>comments</h4>
      </div>
      <div class="imgbox" v-for="value in image">
        <img :src="value" alt="" @load="loadImg">
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "detailComment",
      props:{
         image:{
           type:Array
         }
      },
      methods:{
        loadImg(){
          if (this.counter===this.imgLength){
            this.$emit('loadImg')
          }
        },
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
