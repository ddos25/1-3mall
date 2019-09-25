<template>
    <div class="good-item" @click="itemClick">
      <!--<a :href="goodsItem.videourl"><img :src="goodsItem.image1" alt="" @load="imgLoad"></a>-->
      <a :href="goodsItem.videourl"><img v-lazy="goodsItem.image1"  alt="" @load="imgLoad"></a>

      <div><p>{{goodsItem.text}}</p>
        <span class="price">{{goodsItem.ding|priceFilter(goodsItem.ding)}}</span>
        <span class="collect">{{goodsItem.favourite}}</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "goodsListItem",
      props:{
          goodsItem:{
            type:Object,
            default(){
              return {}
            }
          }
      },
      // created(){
      //   console.log(this.goodsItem);
      // },
      filters:{
        priceFilter(price){
          return parseFloat(price).toFixed(2)
        }
      },
      methods:{
        //  当所有图片加载完成后，scroll进行刷新
        imgLoad(){
          this.$bus.$emit('itemImgLoad')
        },
        itemClick(){
          // console.log('tianhuan');
          this.$router.push('/detail'+this.goodsItem.user_id)
        }
      }
    }
</script>

<style scoped>
.good-item{
  width: 48%;

}
  .good-item img{
    width: 100%;
  }
  .good-item {
    
  }
</style>
