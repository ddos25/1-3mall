<template>
  <swiper>
    <swiper-item v-for="item in banners" >
      <a :href="item.link"><img :src="item.image" alt="" @load="imgLoad"></a>

    </swiper-item>
  </swiper>
</template>

<script>
  import swiper from '@/components/common/swiper/swiper'
  import swiperItem from '@/components/common/swiper/swiperitem'

    export default {
        name: "homeSwiper",
      props:{
        banners: {
          type: Array,
          default() {
            return []
          }
        }
      },
      data(){
          return{
            isLoad:false,
          }
      },
      components:{
        swiper,
        swiperItem
      },
      methods:{
        imgLoad(){
          if ( !this.isLoad){
            this.$emit('swipetimgLoad')
            this.isLoad=true
          }
        }
      }
    }
</script>

<style scoped>

</style>
