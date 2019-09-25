import Vue from 'vue'
import Vuex from 'vuex'

//安装插件
Vue.use(Vuex)

//创建store对象
const Store=new Vuex.Store({
  state:{
    cartList:[
      {checked:true,
        text:'【我要换头像】来一波海贼通缉令头像，走一波情怀的！换头像记得评论打卡哦"',
        id:"21480763",
        price:"18",
        counts:1,
        img:"http://wimg.spriteapp.cn/ugc/2019/03/22/5c945ce8744be_1.jpg"},

      {checked:true,
        text:"去超市开车，媳妇总是说我幼稚，我开车她旁边一直叨叨这事，我有些不高兴了，吼道：“开着车呢，别惹我!”\n她似乎知道自己错了，低头沉默不语，我有些不忍，于是转移了话题：“再给我一点硬币，那个小猪佩奇终于没人了。”",
        id:"22368727",
        price:"50",
        counts:1,
        img:'http://wimg.spriteapp.cn/ugc/2019/07/11/5d274bcd0f909.gif'
      },
      {checked:true,
        text:"突然收到这个消息，我该不该相信他",
        id:"22905290",
        counts:1,
        price:"51",
        img:"http://wimg.spriteapp.cn/ugc/2019/01/24/6d90b3261faf11e98c4e842b2b4c75ab_1.jpg"
      },
      {checked:true,
        text:'【我要换头像】来一波海贼通缉令头像，走一波情怀的！换头像记得评论打卡哦"',
        id:"21480760",
        price:"18",
        counts:1,
        img:"http://wimg.spriteapp.cn/ugc/2019/03/22/5c945ce8744be_1.jpg"},
      {checked:true,
        text:"小伙带女孩回家，将卧室让给女孩，自己跑到沙发上受冻",
        id:"23127334",
        counts:1,
        price:"7",
        img:"http://wimg.spriteapp.cn/picture/2019/0815/5d55088cc015b_wpd.jpg"
      },
      {checked:true,
        text:"突然收到这个消息，我该不该相信他",
        id:"22905297",
        counts:1,
        price:"51",
        img:"http://wimg.spriteapp.cn/ugc/2019/01/24/6d90b3261faf11e98c4e842b2b4c75ab_1.jpg"
      },
      { text:"去超市开车，媳妇总是说我幼稚，我开车她旁边一直叨叨这事，我有些不高兴了，吼道：“开着车呢，别惹我!”\n她似乎知道自己错了，低头沉默不语，我有些不忍，于是转移了话题：“再给我一点硬币，那个小猪佩奇终于没人了。”",
        id:"22368720",
        price:"50",
        counts:1,
        img:'http://wimg.spriteapp.cn/ugc/2019/07/11/5d274bcd0f909.gif',
        checked:true,
      },
      {
        text:"小伙带女孩回家，将卧室让给女孩，自己跑到沙发上受冻",
        id:"23127330",
        counts:1,
        price:"7",
        img:"http://wimg.spriteapp.cn/picture/2019/0815/5d55088cc015b_wpd.jpg",
        checked:true,
      },
    ]

  },
  getters:{
    cartLength(state){
      return state.cartList.length

    },
    cartList(state){
      return state.cartList
    }

  },

  mutations:{
    addCounter(state,payload){
      payload.counts++;
      // console.log();
    },

    addProduce(state,payload){
      state.cartList.push(payload)

    }


  },


  actions:{

    addList(context,payload){
      //先查找购物车是否有该商品
      //有，counts+1
      //无，cartList添加该商品信息

   return new Promise((resolve,reject)=>{
     // 方法一：
     let oldGoods=null;
     /**
      for (let item of state.cartList){
        if (item.id===payload.id){
          oldGoods=item;
        }
      }
      */
     // 方法二：
     // console.log(payload);
     oldGoods=context.state.cartList.find(item => item.id===payload.id)
     // console.log(oldGoods);
     if (oldGoods){
       context.commit('addCounter',oldGoods)
       resolve('当前商品数量增加1')
     } else {
       payload.counts=1;
       payload.checked=true
       context.commit('addProduce',payload)
       resolve('添加到购物车')
     }
   })

    }
  },

})

//挂载
export default Store

