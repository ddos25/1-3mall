export function  debounce(func ,delay){
  //防抖函数debounce，一段时间内只执行一次，节省服务器
  let timer=null;
  return function(...args){
    if (timer) clearTimeout(timer)

    timer=setTimeout(()=>{
      func.apply(this,args)
    },delay)
  }

}
