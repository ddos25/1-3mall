<template>
    <div class="detail-navBar">
      <nav-bar>
        <div slot="left" @click="Back"><img src="../../../assets/img/de-navbar/back.svg" alt=""></div>
        <div slot="center" class="title" >
          <div v-for="(item,index) in titles" class="title-item"
               :class="{active:index===curIndex}"
               @click="itemClick(index)"
          >{{item}}</div>
        </div>

      </nav-bar>
    </div>
</template>

<script>
  import navBar from '@/components/common/navbar/navbar'
    export default {
        name: "detailNavBar",
      data(){
        return{
          titles:['商品','参数','评论','推荐'],
          curIndex:0,

        }
      },
      props:{
        scrollIndex:{
          type:Number
        }
      },
      components:{
        navBar
      },

      created(){
          this.curIndex=this.scrollIndex;
        console.log(this.scrollIndex);
      },
      methods:{
        itemClick(index){
          this.curIndex=index

          this.$emit('itemClick',index)
        },
        Back(){
          this.$router.back()
        }
      }
    }
</script>

<style scoped>

  .title{
    display: flex;
    font-size: 13px;
  }
 .title-item{
   flex: 1;
 }
  .active{
    color: #ff3573;
  }
  img{
    margin-top: 8px;
  }
</style>
