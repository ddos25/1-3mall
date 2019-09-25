<template>
  <div class="home-recommend">
    <div v-for="item in recommends" class="recommends-item">
      <a href="javascript:;">
        <img :src="item.image" alt=""><div class="title">{{item.acm}}</div>
     </a>
    </div>
  </div>
</template>

<script>

    export default {
        name: "homeRecommed",
      props:{
          recommends:{
            type:Array,
            default(){
           return []
            }
          }
      },



    }
</script>

<style scoped>
.home-recommend{
  display: flex;
  width: 100%;
  font-size: 12px;
  padding: 10px 0 15px 0;
  border-bottom: 10px solid #EEEEEE;
}
 .recommends-item{
   flex: 1;
   text-align: center;

 }
.recommends-item img{
  width: 65px;
  height: 65px;
}
.recommends-item a{
  text-decoration: none;
  color: #727272;
}
.recommends-item .title{
  line-height: 30px;
}
</style>
