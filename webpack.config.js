// 这是webpack的配置文件
// 功能：当我们原先的main.js改变内容时，要想让引入的bundle.js内容也对应改变，需要进行重新打包
// webpack.config.js是为了在执行运行命令时，直接帮我们完成对应的打包操作
const path = require('path'); // 引入路径模块
const htmlWebpackPlugin = require('html-webpack-plugin'); // 导入在内存中生成html页面的插件
const VueLoaderPlugin = require('vue-loader/lib/plugin'); // 导入对.vu文件进行处理的插件
module.exports = { // node写法：向外暴露一个配置对象
    // 根据webpack指令：webpack ./src/main.js -o ./dist/bundle.js
    // 我们知道打包的过程： main.js => bundle.js
    entry: path.join(__dirname, './src/main.js'), // 入口：表示webpack要打包的文件
    output: { // 输出文件相关的配置
        path: path.join(__dirname, './dist'), // 指定打包好的文件的输出路径
        filename: 'bundle.js', // 指定打包后的文件名称
    },
    mode: 'development', // 打包模式 development、production
    plugins: [
        // 注意：html-webpack-plugin生成在内存中的页面会自动引入bundle.js
        new htmlWebpackPlugin({ // 创建一个在内存中生成html页面的插件
            template: path.join(__dirname, './src/index.html'), // 指定模板页面
            filename: 'index.html', // 内存中生成页面的名称
        }),
        new VueLoaderPlugin()
    ],
    module: { // 用于配置所有第三方模块的加载器
        rules: [ // 所有第三方模块的匹配规则
            // 配置处理.css文件的第三方loader模块
            // 注意：执行顺序是：css-loader => style-loader => webpack打包处理
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            // 配置.less文件 less-loader => css-loader => style-loader => webpack打包处理
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
             // 配置.sass文件 sass-loader => css-loader => style-loader => webpack打包处理
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            // 配置图片文件  默认转为base64格式 可以用传参的形式修改配置项
            // limit <= 图片大小时（单位：byte），保留原来的图片格式，反之则转为base64
            // name=[name].[ext] 保留原来的图片名称 => menu_detail.png （保存在根目录下，默认转hash值）
            // 注意：如果保留原来名称，如果出现重名，webpack处理完后的图片会是最后处理的重名图片
            // 如果想保留原来名称，又想不造成重名图片被最后处理的图片替换？
            // 解决方案： name=[hash:8]-[name].[ext] (hash值最多32位)
            { test: /\.(jpg|jpeg|bmp|gif|png)$/, use: "url-loader?limit=310&name=[hash:8]-[name].[ext]" },

            // 配置字体库文件,要跟图片文件的处理区别开
            {test: /\.(ttf|eot|svg|woff|woff2)$/, use: "url-loader"},

            // 配置babel: 将除了node_modules目录下的其它js文件进行 ES6 => ES5 处理
            { test:/\.js$/, use: 'babel-loader', exclude: /node_modules/ },

            // 处理.vue文件的loader
            { test: /\.vue$/, use: 'vue-loader'}
        ]
    },
    resolve: {
        alias: { // 修改引入后缀为vue的包的入口文件
            'vue$': 'vue/dist/vue.js'
        }
    }
}   