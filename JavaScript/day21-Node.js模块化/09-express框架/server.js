
// 使用express框架
// 1、生成信息文件 package.json   ===》 npm init -y
// 2、下载express框架 ===》 npm i express
// 导入express框架启动服务

const express = require('express')
// 启动服务
const server = express()
// 监听请求
server.get('/',(req,res)=>{
    res.send('欢迎访问首页express')
})
// 监听所有请求
server.all('*',(req,res)=>{
    res.status(404)
    res.send('欢迎资源不存在')
})
// 分配端口
server.listen(3000,()=>{
    console.log('服务启动成功')
})