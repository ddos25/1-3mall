<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
    export default {
        name: "Toast",
      // $el:'Toast',
      data(){
          return{


          }
      },
      props:{
          message:{
            type:String,
            default :''
          },
        isShow:{
            type:Boolean,
          default: false
        }
      },
      methods:{
          show(msg,delay){
            console.log('---');
            this.isShow=true
            this.message=msg

            setTimeout(()=>{
              this.isShow=false
            },delay)

          }
      }
    }
</script>

<style scoped>
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 8px 10px;
  font-size: 16px;
  transform: translate(-50%,-50%);


  color: #FFFFFF;
  background-color: rgba(0,0,0,0.8);
  border-radius: 5px;
  z-index: 99;
}
</style>
