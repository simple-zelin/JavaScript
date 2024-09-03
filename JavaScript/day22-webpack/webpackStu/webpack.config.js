// 导入一个path模块 路径模块
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 导出 
module.exports = {
  // mode: '',
  // 入口 => webpack编译的是那个主文件
  entry: path.resolve(__dirname, 'src/main.js'),
  // 出口 => 编译后, 生成的新文件创建到哪里
  output: {
    path: path.resolve(__dirname, 'dist'), // 创建文件夹的路径
    filename: 'app.js', // 创建的文件叫什么名字
    clean: true // 清空 dist 重新创建
  },
  // plugins: [new HtmlWebpackPlugin()] // 默认生成一个最简单的h5页面
  plugins: [
    new HtmlWebpackPlugin({
      // 根据 提供的模板生成新的html页面
      template: path.resolve(__dirname, './public/index.html')
    })
  ],
  // 模块的
  module: {
    // 规则
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      { // 针对资源模块（图片，字体文件，图标文件等）处理
        test: /\.(png|jpg|jpeg|gif)$/i,
        // 根据文件大小（8KB）小于：把文件转成 base64 打包进 js 文件中（减少网络请求次数）
        // 大于：文件复制到输出的目录下
        type: 'asset',
        generator: { // 输出文件时，路径+名字
          filename: 'assets/[hash][ext]'
        }
      },
      {
        test: /\.m?js$/, // 需要转换的带有哪些 
        // 忽略哪些文件不去转义
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devtool: 'inline-source-map', // 压缩代码后,也能给我们提供  准确的错误行号
  // 在vue里面会用到 @ => 代表 src 路径下
  resolve: {
    alias: {
      Myutils: path.resolve(__dirname, 'src/utils'),
      '@': path.resolve(__dirname, 'src')
    },
  }
}
