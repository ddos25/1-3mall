import {request} from "../request";

export function getHomeMutidata() {
  return request({
    url:'http://localhost:3030/multidata'

  })
  
}


export function getHomeGoods(type,page) {
  return request({
    url:'https://www.apiopen.top/satinApi',
    params:{
      type,
      page,
    }
  })
}

