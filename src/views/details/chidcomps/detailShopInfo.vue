<template>
  <div class="detail-shopInfo">
    <div class="shop-logo">
      <img :src="shop.logo" alt=""><span> {{shop.name}}</span>
    </div>
   <div class="shop-info">
     <div class="shop-left" >
       <div class="sell">
         <p>{{shop.sells|Count(shop.sells)}}</p>
         <p>总销量</p>
       </div>
       <div class="total">
         <p>{{shop.fans}}</p>
         <p>全部宝贝</p>
       </div>
     </div>
     <div class="shop-right">
       <div class="shop-score">描述相符 {{shop.score}}</div>
       <div class="shop-price">价格合理{{shop.score}}</div>
       <div class="shop-quality">质量满意{{shop.score}}</div>
     </div>
   </div>
  </div>
</template>

<script>
    export default {
        name: "detailShopInfo",
      props:{
          shop:{
            type:Object,
            default(){
              return {}
            }
          }
      },
      filters:{
          Count(count){
            var n=parseFloat(count/10000000).toFixed(1)
            return n + '万';

          }
      },
      created(){
        console.log(this.shop);
      }
    }
</script>

<style scoped>
.shop-logo{
  padding: 20px  0 10px 20px;

}
.shop-logo>img{
 vertical-align: middle;

}
.shop-logo>span{
  padding-left: 10px;
}




  .shop-left{
    width: 50%;
    float: left;
    display:flex;
    font-size: 13px;
    color: #404040;
    padding-left: 10px;
    text-align: center;
    border-right: 1px solid rgba(142, 142, 142, 0.36);
    box-sizing: border-box;
  }
  .shop-left>div{
    flex: 1;
    padding: 10px;
  }


  .shop-info{
    box-shadow: 0  4px 0 rgba(203, 203, 203, 0.27);
    /*width: 100%;*/
    height: 100px;
  }
  .shop-right{
    width: 50%;
    float: right;
  }

  .shop-right{
    text-align: center;
    line-height: 30px;
    font-size: 15px;
  }
</style>
