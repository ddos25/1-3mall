<template>
  <div id="hy-swiper">
    <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>
    <slot name="indicator"></slot>
    <div class="indicator">
      <div slot="indicator" v-if="showIndicator && slideCount>1">
        <div v-for="(value,index) in slideCount" :key="index" class="indi-item"  :class="{active: index === currentIndex-1}"></div>
      </div>
    </div>

  </div>

</template>

<script>
    export default {
        name: "swiper",
      props:{
        interval: {
          type: Number,
          default: 3000
        },
        animDuration: {
          type: Number,
          default: 300
        },
        moveRatio: {//移动比例
          type: Number,
          default: 0.25
        },
        showIndicator: {// slideCount>1时显示
          type: Boolean,
          default: true
        }
      },
      data(){
          return{
            slideCount:"", // 元素个数
            totalWidth: 0, // swiper的宽度
            swiperStyle: {}, // swiper样式
            currentIndex: 1, // 当前的index
            scrolling: false, // 是否正在滚动
          }
      },
      mounted: function () {
        // 1.操作DOM, 在前后添加Slide
        setTimeout(() => {
          this.createDom();

          // 2.开启定时器
          this.start();
        }, 500)
      },

      methods:{

      //    创建导航圆点
        createDom(){
          let swiper=document.querySelector('.swiper');
          let itemList=swiper.children;

          this.slideCount=itemList.length;
          console.log(this.slideCount);
          //  复制第一张到末尾，复制最后一张到开头

        if (this.slideCount>1){
          let copyFirst=itemList[0].cloneNode(true);
          let copyLast=itemList[this.slideCount-1].cloneNode(true);
          swiper.insertBefore(copyLast,itemList[0]);
          swiper.appendChild(copyFirst);
          // 获取swiper宽度和样式
          this.totalWidth=swiper.offsetWidth;
          this.swiperStyle=swiper.style;
        //  设置初始动画位置
          this.setTransform(-this.totalWidth)
        }

        },


      //  开始定时器
        start(){
          this.timer=window.setInterval(()=>{
            this.currentIndex++;
            this.autoPlay(-this.currentIndex*this.totalWidth);
          },this.interval)

        },
        //  清除定时器
        stop(){
          clearInterval(this.timer)
        },
        //自动播放
        autoPlay(currentPosition){
        //   0.设置正在滚动
          this.scrolling=true;
        //  开始滚动,设置transition参数
          this.swiperStyle.transition='transform '+ this.animDuration + 'ms';
          this.setTransform(currentPosition);
          // 2.判断滚动到的位置
          this.checkIndex();

          // 4.滚动完成

          this.scrolling = false

        },


        //  边界值处理
        checkIndex(){
          window.setTimeout(() => {
            // 1.校验正确的位置
            this.swiperStyle.transition = '0ms';
            if (this.currentIndex >= this.slideCount + 1) {
              this.currentIndex = 1;
              this.setTransform(-this.currentIndex * this.totalWidth);
            } else if (this.currentIndex <= 0) {
              this.currentIndex = this.slideCount;
              this.setTransform(-this.currentIndex * this.totalWidth);
            }

            // 2.结束移动后的回调
            this.$emit('transitionEnd', this.currentIndex-1);
          }, this.animDuration)


        },
        //  设置动画模式
        setTransform(position){
          this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
          this.swiperStyle['-webkit-transform'] = `translate3d(${position}px), 0, 0`;
          this.swiperStyle['-ms-transform'] = `translate3d(${position}px), 0, 0`;
        },

        //  触屏
        touchStart: function (e) {
          // 1.如果正在滚动, 不可以拖动
          if (this.scrolling) return;

          // 2.停止定时器
          this.stop();

          // 3.保存开始滚动的位置
          this.startX = e.touches[0].pageX;
        },

        touchMove: function (e) {
          // 1.计算出用户拖动的距离
          this.currentX = e.touches[0].pageX;
          this.distance = this.currentX - this.startX;
          let currentPosition = -this.currentIndex * this.totalWidth;
          let moveDistance = this.distance + currentPosition;

          // 2.设置当前的位置
          this.setTransform(moveDistance);
        },

        touchEnd: function (e) {
          // 1.获取移动的距离
          let currentMove = Math.abs(this.distance);

          // 2.判断最终的距离
          if (this.distance === 0) {
            return
          } else if (this.distance > 0 && currentMove > this.totalWidth * this.moveRatio) { // 右边移动超过0.5
            this.currentIndex--
          } else if (this.distance < 0 && currentMove > this.totalWidth * this.moveRatio) { // 向左移动超过0.5
            this.currentIndex++
          }

          // 3.移动到正确的位置
          this.autoPlay(-this.currentIndex * this.totalWidth);

          // 4.移动完成后重新开启定时器
          this.start();
        },

        /**
         * 控制上一个, 下一个
         */
        previous: function () {
          this.changeItem(-1);
        },

        next: function () {
          this.changeItem(1);
        },

        changeItem: function (num) {
          // 1.移除定时器
          this.stop();

          // 2.修改index和位置
          this.currentIndex += num;
          this.autoPlay(-this.currentIndex * this.totalWidth);

          // 3.添加定时器
          this.start();
        }
      }



    }
</script>

<style scoped>
  #hy-swiper{
    position: relative;
    overflow: hidden;
  }
.swiper{

  display: flex;
}
  .indicator {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 8px;
  }
  .indi-item{
    display: inline-block;
    box-sizing: border-box;
    height: 8px;
    width: 8px;
    border-radius: 4px;
    background-color: #fff;
    margin: 5px;
    line-height: 8px;
    text-align: center;
  }
 .active{
    background-color: rgba(212,62,46,1.0);
  }
</style>
