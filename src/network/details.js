import {request} from "./request";
export function getDetail(id) {
  return request({
    url:'https://www.apiopen.top/satinApi',
    params:{
      id
    }
  })
}


// 商品信息
export class Goods{
  constructor(itemInfo,services,columns){
    //标题
    this.title=itemInfo.text;
    // 描述
    this.desc=itemInfo.desc;
    // 折后价
    this.newprice=itemInfo.comment;
    // 原价
    this.oldprice=itemInfo.bookmark;
    // 折扣
    this.discount=parseFloat(this.newprice/this.oldprice);


    //**************************
    this.sale='销量'+itemInfo.repost;
    this.love='收藏'+itemInfo.love+'人';
    this.express='默认圆通快递';
    this.img_small=itemInfo.profile_image;


    //cartGoods相关属性

    this.img = itemInfo.image_small;
    this.counts=itemInfo.counts||0;
    this.price = itemInfo.comment;
    //**************************



    //七天退换、72小时发货
    this.services=services;

    //销量、收藏、默认快递
    this.columns=columns;

    this.realprice=itemInfo.lowNowPrice


  }
}

//店铺参数
export class Shop {
  constructor(shopInfo){

    //************************************
    this.logo=shopInfo.profile_image;
     this.name =shopInfo.name ;
     this.fans =shopInfo.love ;
     this.sells=shopInfo.t;
     this.score=shopInfo.type;
     this.goodsCount=shopInfo.theme_id;
    //************************************


  }
}


//商品参数
export class Param {
  constructor(paramInfo){

    //************************************
    this.img=paramInfo.image_small;
    this.text =paramInfo.text ;
    this.count =1 ;
    this.sells=paramInfo.t;
    this.score=paramInfo.type;
    this.goodsCount=paramInfo.theme_id;
    //************************************


  }
}



