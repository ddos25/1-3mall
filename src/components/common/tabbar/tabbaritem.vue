<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive"><slot name="item-pic"></slot></div>
    <div v-else><slot name='active-item-pic'></slot></div>
    <div :style="activeStyle"><slot name="item-title"></slot></div>
  </div>
</template>

<script>
    export default {
        name: "tabbaritem",
      data(){
          return{

          }
      },
      props:{
          path:String,
          activeColor:{
            type:String,
            default:'#ff3573',
          }
      },
      computed:{
        isActive(){
          return this.$route.path.indexOf(this.path)
        },
        activeStyle(){
          return !this.isActive?{color:this.activeColor}:{}
        }
      },
      methods:{
        itemClick(){
          this.$router.replace(this.path)
          console.log(this.path);
          // console.log(this.$route.path);
        }


    }
    }
</script>

<style scoped>
.tab-bar-item{
  flex:1;
  height: 49px;
  font-size: 14px;
  text-align: center;
}
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    display: inline-block;
    margin-top: 3px;
    vertical-align: middle;

  }
</style>
