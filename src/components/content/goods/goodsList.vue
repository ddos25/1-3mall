<template>
    <div class="goods-list" >
      <goods-list-item v-for="item in goodsList" :goodsItem="item">

      </goods-list-item>
    </div>
</template>

<script>
  import goodsListItem from './goodsListItem'


    export default {
        name: "goodsList",
      props:{
        goodsList:{
          type:Array,
          default(){
            return []
          }
        }
      },
      data(){
          return{

          }
      },
      components:{
        goodsListItem,
      },
      created(){
        console.log(this.goodsList);
      }
    }
</script>

<style scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;justify-content: space-around;
  text-align: center;
  padding: 0 10px 0 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

}
</style>
