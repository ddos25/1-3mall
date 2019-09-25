<template>
    <div class="detail-goodsInfo">
      <div class="info">
        <div class="title">
          <h2>goods-info</h2>
          <h3>goods-info</h3>
          <h4>goods-info</h4>
        </div>
        <div class="imgs"  ref="imgbox">
          <!--<img v-for="(value,index) in image" :key="index" :src="value" alt="">-->
          <!--<img v-for="(value,index) in image" :key="index" :src="value" alt="">-->
          <!--<img v-for="(value,index) in image" :key="index" :src="value" alt="">-->
          <img v-for="(value,index) in image" :key="index" :src="value" alt=""
               @load="loadImg" >
        </div>
      </div>
      </div>
</template>

<script>
    export default {
        name: "detailGoodsInfo",
      props:{
        image:{
          type:Array
        }
      },
      data(){
          return{
            counter:0,
            imgLength:0
          }
      },

      methods:{
        loadImg(){
          if (this.counter===this.imgLength){
            this.$emit('loadImg')
          }
        },


      },
      watch:{


        // detailInfo(){
        //   this.imgLength=this.detailInfo.detailImage[0].list.length
        //
        // }
      }

    }
</script>

<style scoped>

  .imgs{
    padding: 10px 10px 0 10px ;

  }
  .title{
    padding-left: 10px;
  }
  img{
    width: 100%;
  }

</style>
