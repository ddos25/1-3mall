<template>
 <div class="detail-swipper">
   <swiper class="ac">
     <swiperitem v-for="img in image"><img :src="img" alt="">
     </swiperitem>
   </swiper>
 </div>

</template>

<script>
import { swiper,swiperitem} from '@/components/common/swiper'

    export default {
        name: "detailSwipper",
       data(){
              return{

              }
       },
      props:{
          image:{
            type:Array,

          }
      },
      components:{
        swiper,swiperitem
      },
      created(){

      }
    }
</script>

<style scoped>
.ac{
  height: 300px;
  overflow: hidden;
}

</style>
