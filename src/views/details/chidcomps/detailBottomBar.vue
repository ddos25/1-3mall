<template>
    <div class="bottom-bar">
      <div class="bar-item f-left" >
        <div>
          <i></i>
          <span class="text">客服</span>
        </div>
        <div>
          <i></i>
          <span class="text">店铺</span>
        </div>
        <div>
          <i></i>
          <span class="text">收藏</span>
        </div>
      </div>
      <div class="bar-item f-right">
        <div class="cart" @click="addToCart">加入购物车</div>
        <div class="buy">购买</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "detailBottomBar",
      methods:{
        //添加购物车
        addToCart(){
        //  将此点击传给父组件，得到当前商品的id
          this.$emit('addToCart')

        }
      }
    }

</script>

<style scoped>
.bottom-bar{
  position: fixed;
  bottom: 0;
  height: 49px;
  left: 0;
  right: 0;
  background-color: #FFFFFF;
  z-index: 15;

  display: flex;
}
.bar-item{
  flex: 1;
  display: flex;
  font-size: 13px;
  color: #cbcbcb;

}
.bar-item>div{
  flex: 1;
  text-align: center;

}
i{
   width: 22px;
  height: 22px;
  display:block;
  margin: 10px auto 5px;
  background-size:20px 20px ;
  background: url("http://wimg.spriteapp.cn/profile/large/2019/07/04/5d1d6d8d8b82b_mini.jpg") center center;
}

  .f-left{
    font-size: 13px;
    color: #cbcbcb;
  }
  .f-right{
    text-align: center;
    line-height: 49px;
    font-size: 15px;
  }
  .cart{
    background-color: yellow;
    color: #000;
  }
  .buy{
    background-color: pink;
    color: white;
  }
</style>
