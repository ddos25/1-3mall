<template>
  <div class="bottom-bar">
    <div class="left">
      <check-button class="button" :isChecked="isSelectAll" @click.native="SelectAll" ></check-button>
      <span>全选</span>
    </div>
    <div class="center">合计：{{totalPrice()}}</div>
    <div class="right">去计算({{checkLength()}})</div>
  </div>
</template>

<script>
  import checkButton from '@/components/common/checkButton/checkButton'
  import { mapGetters } from 'vuex'
    export default {
        name: "bottomBar",
      data(){
          return{
          isActive:true
        }
      },
      components:{
        checkButton
      },
      methods:{
        /**
         * reduce 为数组中的每一个元素依次执行回调函数，
         * 不包括数组中被删除或从未被赋值的元素，接受四个参数：
         * 初始值（或者上一次回调函数的返回值），当前元素值，当前索引，调用 reduce 的数组。
         */
        totalPrice(){
            //1.筛选出isChecked为true的produce，将此元素返回给reduce（）进行计算、记录
         return '￥'+ this.$store.state.cartList.filter(item=>{
            return item.checked
          }).reduce((preValue,item)=>{
            return preValue+item.counts*item.price
          },0).toFixed(2)

        },

        checkLength(){
          return this.$store.state.cartList.filter(item=>item.checked).length
        },

        SelectAll(){
          if (this.isSelectAll){
            this.cartList.forEach(item=>{
            item.checked=false
          })
          }else{
            this.cartList.forEach(item=>{
              item.checked=true
            })
          }
        }

      },

      computed:{
        ...mapGetters({cartList:'cartList'}),
      //    与methods的区别：comp是属性，被动触发，当data数据不变时直接返回原来的计算结果，
      //  methods是方法，主动触发
        /**过滤cartlist的button状态，有一个不是isChecked，全选按钮就是未选中状态，点击后list全选中
         * 全为isChecked时，全选按钮是选中状态，此时再次点击，list中的item全为非选中状态
         */

        isSelectAll(){
          // 方法一
          //if(this.cartList.length===0)return false
          // return !this.cartList.filter(item=> item.isChecked).length

          // 方法二：
          //if(this.cartList.length===0)return false
          // return !this.cartList.find(item=>item.isChecked)
          //  方法三：
          if(this.cartList.length===0){return false}
          for (let item of this.cartList){
            if ( !item.checked ){
                return false
              }
          }
          return true
        }



      }
    }
</script>

<style scoped>
.bottom-bar{
  height: 40px;
  /*background-color: #EEEEEE;*/
  line-height: 40px;
  color: rgba(114, 114, 114, 0.71);
  font-size: 15px;
  align-items: center;

  position: relative;
  display:flex;
}
  .left{
    display: flex;
   align-items: center;
    margin-left: 10px;
  }

.button{
  line-height: 20px;
  /*background-color: white;*/
}
span{
  margin-left: 5px;
}
  .center{
    margin-left: 30px;
    flex: 1;
  }
  .right{
    text-align: center;
    width: 90px;
    background-color: orangered;
    color: #FFFFFF;
  }


</style>
