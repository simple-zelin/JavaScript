/**
 * 目标：读取 test.txt 文件内容
 * 注意：代码中，使用绝对路径
 * 原因：Node.js 执行时会以终端所在文件夹作为相对路径，去拼接代码中路径使用（导致找不到目标文件）
 * 解决：使用 path.join() 和 __dirname 来填写要查找的目标文件绝对地址
 */
const fs = require('fs') //文件模块
const path = require('path') //路径模块

// 1. 尝试读取test文件
// 在nodejs中,我们强烈建议使用绝对路径
// console.log(__dirname) // 当前文件所在的环境下的目录

// path.join 拼接路径字符串,他会以 你当前的系统环境进行分割符的设置

// console.log(path.join('D:', '代码', 'index.js'))

// console.log(path.join(__dirname, '../test.txt'))

fs.readFile(path.join(__dirname,'../test.txt'),(err,data) => {
    if(err) {
        return console.log(err)
    }
    console.log(data.toString())
})