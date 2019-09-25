<template>
  <div class="tab-control">
    <div  v-for="(item, index) in titles"
          class="tab-title"
          :class="{active:index===curIndex}"
         @click="itemClick(index)">
      <span class="text">{{item}}</span></div>

  </div>
</template>

<script>
    export default {
      name: "tabControl",
      props: {
        titles: {
          type: Array,
          default() {
            return []
          }
        }
      },
      data(){
        return{
          curIndex:0
        }
      },
      mounted(){
        // console.log(this.titles);
        //必须将div的click设置为true，防止兼听不到
        this.click=true



      },
      methods:{
        itemClick(index){

          console.log(index);
          this.curIndex=index;
          //将当前index传到home
          this.$emit('tabClick',index)
        }

      }
    }
</script>

<style scoped>
.tab-control{
  display:flex;
  /*display: inline-block;*/
  width: 100%;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: white;
}
  .tab-title{
    flex: 1;


  }
  .line{

    border-bottom: 1px solid #000;
  }
.active{
  color: hotpink;
}
  .active span{
    border-bottom: 3px solid hotpink;
  }
  .text{
    padding: 5px;
  }
</style>
