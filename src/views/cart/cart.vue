<template>

  <div class="cart">
    <nav-bar class="cart-bar">
      <div slot="center">购物车(<span>{{cartLength}}</span>)</div>
    </nav-bar>

    <cart-list ></cart-list>
    <bottom-bar ></bottom-bar>
  </div>
</template>

<script>
  import navBar from '@/components/common/navbar/navbar'
  import cartList from './childComps/cartProduce'
  import bottomBar from './childComps/bottomBar'

  import { mapGetters } from 'vuex'
    export default {
        name: "cart",
      components:{
        navBar,
        bottomBar,
        cartList
      },
      computed:{
        ...mapGetters(['cartLength','cartList'])

      }
    }
</script>

<style scoped>
.cart-bar{
  background-color: #ffacb1;
  color: #FFFFFF;
  line-height: 44px;
  font-size: 18px;


}
  .cart{
    height: 100vh;
    /*position: relative;*/
  }

</style>
