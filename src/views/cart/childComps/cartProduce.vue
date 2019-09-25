<template>
    <div class="cart-list">
      <scroll class="content" ref="scroll">
        <produce-item class="" v-for="(value,index) in cartList " :key=index
        :produce="value">
        </produce-item>
      </scroll>
    </div>

</template>

<script>
  import { mapGetters } from 'vuex'
  import scroll from '@/components/common/scroll/scroll'
  import produceItem from './produceItem'

    export default {
        name: "cartList",
      components:{
        scroll,
        produceItem
      },
      computed:{
          ...mapGetters({cartList:'cartList'})
      },
      activated(){
        this.$refs.scroll.refresh();
      }
    }
</script>

<style scoped>



  .cart-list{
    height: calc(100% - 133px);
    /*font-size: 30px;*/
  }

  .content{
    height: 100%;
    overflow: hidden;
  }

li{
  line-height: 30px;
}
</style>
