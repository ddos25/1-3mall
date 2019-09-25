// 自定义
    // 起别名
    module.exports={
        configureWebpack:{
            resolve:{
                // @=>'src'已配置
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views',

            }

        }

    }