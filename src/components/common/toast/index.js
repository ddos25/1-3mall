// 将toast封装为vue的插件
import Toast from './Toast'


const obj={};
obj.install=function (Vue) {
//  创建组件构造器
  const toastConstructor=Vue.extend(Toast)

  //new的方式，根据组件构造器，可以创建出一个组件对象
  const toast=new toastConstructor()

  //将组件元素手动挂载到某个元素上
  toast.$mount(document.createElement('div'))

  //toast.$el对应的就是div
  document.body.appendChild(toast.$el)

  // 将组件toast的赋给vue原型的$toast属性
    Vue.prototype.$toast=toast


  // obj.prototype.$el=
  console.log(toast);
}
export default obj
