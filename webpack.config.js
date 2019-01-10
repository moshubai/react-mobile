const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Webpack = require('webpack'); //HotModuleReplacementPlugin


// 是否为开发环境
const isDev = process.env.NODE_ENV === 'development'

const config = {
    //环境
    mode: isDev ? 'development' : 'production',
    // 入口文件
    entry: {
        app: './src/index.js'
    },
    // 输出到dist文件夹, 文件名字为bundle.js
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'./dist')
    },

    module: {
        rules: [
            {
                // 对后缀为js和jsx的文件使用babel-loader进行编译, 不包括node_modules文件夹里面的
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'./src/index.html')
        }),
        new CleanWebpackPlugin(['dist'])
    ]
}
if(isDev){
    config.devServer = {
        port: 3000,
        contentBase: './dist',
        overlay: true, // 开启错误调试,
        hot: true  //是否开启hot-module-replacement
    };
    config.plugins.push(new Webpack.HotModuleReplacementPlugin())
}

module.exports = config;