<template>
  <div class="detail-baseInfo" v-if="Object.keys(goods).length !==0">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newprice|price(goods.newprice)}}</span>
      <span class="o-price">{{goods.oldprice|price(goods.oldprice)}}</span>
      <span class="discount" v-if="">大减价</span>
    </div>
    <div class="info-other">
      <span>{{goods.sale}}</span><span>{{goods.love}}</span><span>{{goods.express}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="value in goods.services" >
        <img :src="goods.img_small" class="info-img" alt="">
        <span>{{value}}</span>
      </span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "detailBaseInfo",
      props:{
        goods:{
          type:Object,
          default(){
            return {}
          }
        }
      },
      created(){
        console.log(this.goods);
      },
      filters:{
          price(p){
            var np=parseFloat(p).toFixed(2)
            return '￥'+np
          }
      }
    }
</script>

<style scoped>
.detail-baseInfo{
  /*height: 100px;*/
  padding: 10px;
}
  .info-title{
    font-size: 18px;
  }
  .n-price{
    font-size: 20px;
    color: #ff3573;
    line-height: 55px;
  }
  .o-price{
    margin-left: 10px;
    font-size: 13px;color: #cccccc;
  }
  .discount{
    border-radius: 10px;
    background-color:pink ;
    font-size: 13px;
    color: white;
  }
  .info-other{
    padding: 8px 5px ;
    font-size: 12px;color: #cccccc;
    display:flex;
    justify-content: space-between;
    box-shadow: 0  1px 0 rgba(203, 203, 203, 0.22);
  }
  .info-service{
    padding: 18px 5px ;
    font-size: 15px;color: #5d5d5d;
    display:flex;
    justify-content: space-between;
    box-shadow: 0  4px 0 rgba(203, 203, 203, 0.27);
  }
  .info-service-item{

  }
.info-img{
  width: 12px;
  height: 12px;
}
</style>
