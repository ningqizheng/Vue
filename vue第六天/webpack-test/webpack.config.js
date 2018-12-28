const path  = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:'./main.js',//指定入口,相对路径和绝对路径均可
    output:{
        path:path.join(__dirname,'./dist'),//指定出口目录,必须是绝对路径
        filename:'bundle.js'//指定出口文件名
    },
    mode:'development',
    plugins:[//插件配置项
        //new webpack.HotModuleReplacementPlugin(),//添加热更新插件
        new HtmlWebpackPlugin({//用于帮我们自动生成html文件的
            template:'./src/index.html',//如果不指定template,默认生成一个空的html文件
            filename:'index.html'
        })

    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                //loader是有加载顺序的,从右到左,css-loader先解析css文件,解析为样式,交给style-loader应用到页面
                use:['style-loader','css-loader']
            },
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.(png|jpg|gif|jpeg|bmp|webp)$/,
             use:['url-loader?limit=8192&name=[hash:8]-[name].[ext]']
            },
            { test: /\.(eot|svg|ttf|woff|woff2)$/, use: ['url-loader'] }
        ]
    }
}