const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path:path.join(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use:[
                'style-loader',
                'css-loader'
            ]
        }]
    },
    plugins: [// 对应的插件
        new HtmlWebpackPlugin({ //配置
            filename: 'index.html',//输出文件名
            template: './index.html',//以当前目录下的index.html文件为模板生成dist/index.html文件
        }),
    ]

};

