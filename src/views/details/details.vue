<template>


   <div class="detail">
     <detail-navBar ref="navbar" class="navbar" @itemClick="titleClick" ></detail-navBar>
     <scroll class="content" ref="scroll" @cntScroll="detailScroll" :probeType="3">
       <detail-swipper :image="imgs"></detail-swipper>
       <detail-baseInfo :goods="goods"></detail-baseInfo>
       <detail-shopInfo :shop="shop"></detail-shopInfo>
       <detail-goodsInfo  :image="imgs" @loadImg="loadImg"></detail-goodsInfo>
       <detail-paramInfo ref="param" :image="imgs" @loadImg="loadImg"></detail-paramInfo>
       <detail-comment ref="comment" :image="imgs" @loadImg="loadImg"></detail-comment>
       <detail-recommend ref="recommend" :image="imgs" @loadImg="loadImg"></detail-recommend>

     </scroll>
     <detail-bottomBar @addToCart="addCart"></detail-bottomBar>
     <back-top @click.native="backClick" v-show="isbackTop"></back-top>


   </div>

</template>

<script>
  import detailNavBar from './chidcomps/detailNavBar'
  import detailSwipper from './chidcomps/detailSwipper'
  import detailBaseInfo from './chidcomps/detailBaseInfo'
  import detailShopInfo from './chidcomps/detailShopInfo'
  import detailGoodsInfo from './chidcomps/detailGoodsInfo'
  import detailParamInfo from './chidcomps/detailParamInfo'
  import detailComment from './chidcomps/detailComment'
  import detailRecommend from './chidcomps/detailRecommend'
  import detailBottomBar from './chidcomps/detailBottomBar'
  import backTop from '@/components/content/backTop/backTop'

  import scroll from '@/components/common/scroll/scroll'

  import {getDetail,Goods,Shop,Param,cartGoods} from '@/network/details'
  import {debounce}from '@/common/utils'



    export default {
        name: "detail",
      data(){
          return{
            id:null,
            imgs:[],
            goods:{},
             shop:{},
            themeTopY:[],
            getThemeTop:null,
            // curIndex:0
            isbackTop:false,



          }
      },
    components:{
      detailNavBar,
      detailSwipper,
      detailBaseInfo,
      detailShopInfo,
      scroll,
      detailGoodsInfo,
      detailParamInfo,
      detailComment,
      detailRecommend,
      detailBottomBar,
       backTop,


    },

      created(){
        // console.log(this.$route.params);
        // 保存id
        this.id=this.$route.params.id;
        console.log(this.id);

        //  请求相关信息
        getDetail(this.id).then(res=>{
          var data=res.data.data,item;
          // console.log(data);

          //*************************************************
          /**
           * api未匹配到user_id，使用正确的api此段代码删除
           */
          for (var i =0;i<data.length;i++ ){
            if (data[i].user_id===this.id){
              console.log(1,data[i]);
              item=data[i];
            } else{
              item=data[0];
            }
          }
          console.log(0,item);
          // this.id=item.user_id;
          //**************************************

          // 主图，将多图打包传递给子组件
          this.imgs=[item.image0, item.image1, item.image2]

          //商品描述，多个信息使用类函数进行打包传递给子组件
          var services={0:'七天无理由退换',1:'72小时发货',2:'退货补运费'}
          this.goods=new Goods(item,services);
          console.log(this.goods);

        //  店铺信息
          this.shop=new Shop(item)
          // console.log(this.shop);

        //  保证所有信息已经渲染完成
        //  作用与updated（）类似，但是updated（）刷新太多次
        //  方法三：this.getThemeTop()防抖函数
        //   this.$nextTick(()=>{
        //     this.themeTopY=[];
        //     this.themeTopY.push(0);
        //     this.themeTopY.push(this.$refs.param.$el.offsetTop);
        //     this.themeTopY.push(this.$refs.comment.$el.offsetTop);
        //     this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
        //     // console.log(this.$refs.param.$el.offsetTop);
        //     console.log(this.themeTopY);
        //   })

        })

        //  防抖函数
        this.getThemeTop=debounce(()=>{
          this.themeTopY=[];
          this.themeTopY.push(0);
          this.themeTopY.push(this.$refs.param.$el.offsetTop);
          this.themeTopY.push(this.$refs.comment.$el.offsetTop);
          this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
          // console.log(this.$refs.param.$el.offsetTop);
          // console.log(this.themeTopY);
        })







      },



      methods:{
        // 图片加载
        loadImg(){
          // 图片加载完毕刷新
          this.$refs.scroll.refresh();
          //图片加载完毕函数
          this.getThemeTop();
        },

        //点击标题页面滚动到指定位置
        titleClick(index){
          this.$refs.scroll.scrollTo(0,-this.themeTopY[index],500);
          console.log(-this.themeTopY[index]);
          // this.curIndex=index
        },

        //滚动页面，内容与标题对应
        detailScroll(position){
        // themeTopY=[ 0, 2782, 4894, 7006]
        // 遍历positionY，在0-2782之间，index=0；
          // 在2782-4894之间，index=1；
          // 在4894-7006之间，index=2；

          //在7006到非常大的一个值（Number.MAX_VALUE）之间，index=3；
          // 方法二:在themeTopY.push(Number.MAX_VALUE),可将if的判断条件简化为：
          // positionY>=this.themeTopY[i]&& positionY<this.themeTopY[i+1]
          const positionY=-position.y;
          let length=this.themeTopY.length;
          // console.log(length);
          for (let i=0;i<length;i++){
            if ( i<length-1 && positionY>=this.themeTopY[i]
              && positionY<this.themeTopY[i+1]
              || i===length-1 && positionY>this.themeTopY[i]){
              /**
               * 知识点
               * 通过$ref属性修改子组件中curIndex的值
               */
             this.$refs.navbar.curIndex=i;
            }
          }

          //  滚动距离大于1000时，显示返回按钮

            this.isbackTop= positionY>=1000;
          // console.log(this.isbackTop);
        },

        //返回顶部-可抽出封装
        backClick(){
          this.$refs.scroll.scrollTo(0,0,500)
        },

      //  得到当前商品信息，保存到vuex中，购物车模块可以使用
        addCart(){
          const cartInfo={};
          cartInfo.counts=this.goods.counts
          cartInfo.text=this.goods.title;
          cartInfo.price=this.goods.price
          cartInfo.img=this.goods.img;
          cartInfo.id=this.id
          console.log(1,cartInfo);
          // console.log(cartInfo.counts);
          this.$store.dispatch('addList',cartInfo).then(res=>{
            // console.log(res);
            this.$toast.show(res, 2000);
          })
          //dispatch是promise型
          /**
           * toast 弹窗信息提示
           * 加入购物车成功后，显示弹窗消息（如何判断加入成功？dispatch的返回结果）
           */
          // 方法二：
          // 使用mapActions--this.addList(cartList).then(res=>{})


        }





      }
    }
</script>

<style scoped>
.detail{
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;



}
  .content{
    height: calc(100% );

  }
  .navbar{
    position: relative;
    z-index: 17;
    /*position: fixed;*/
    background-color: #fff;
  }

</style>
