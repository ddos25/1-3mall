import axios from 'axios'


export function request(config){
  const instance=axios.create({
    baseUrl:'',
    timeout:5000,
  });
  instance.interceptors.request.use(config=>{
    //拦截
    return config
  },err=>{
    return err
  })

  instance.interceptors.response.use(res=>{
    //拦截
    return res
  },err=>{
    return err
  })

  return instance(config)
}
