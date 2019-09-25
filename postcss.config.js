module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport":{
      viewportWidth:375,//视窗的宽度，对应设计稿的宽度
      viewportHeight:667,//视窗的高度，对应设计稿的高度（也可以不配置）
      unitPrecision:5,//指定’px‘转换为视窗单位值的小数位数（恩多时候无法整除）
      viewportUnit:'vw',//指定需要转换成的视窗单位，建议使用vw
      selectorBlackList:['ignore','tab-bar','tab-bat-item'],//指定不需要装换的类
      mixPixelValue:1,//小于或等于1px不装换为视窗单位
      mediaQuery:false,//允许在媒体查询中转换px
      exclude:[/TabBar/]//不转化的，写入文件名或者是正则表达式
    }
  }
}
//正则的规则：
// 1.`abc:表示匹配的内容，必须要以什么内容开头（以abc开头）
// 2.abc$:表示匹配的内容，必须要以什么内容结尾（以abc结尾）
