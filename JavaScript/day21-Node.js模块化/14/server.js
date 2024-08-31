/**
 * 目标：项目上线时，可以让前后端在同一个源下访问
 * 需求：让 express 支持静态（网页）资源返回
 * 核心：使用 express 内置函数 express.static() 绑定静态资源文件夹向前端暴露
 */
const fs = require('fs')
const path = require('path')
const express = require('express')
const server = express()

// 让页面打开的url 和 ajax 发送的请求的url 协议 域名 端口 一致即可
server.use(express.static('./public'))
// 让服务端的web服务,不光返回数据资源,还要返回页面资源

server.get('/api/province', (req, res) => {
  fs.readFile(path.join(__dirname, 'data/province.json'), (err, data) => {
    res.send(data.toString())
  })
})

server.all('*', (req, res) => {
  res.status(404)
  res.send('你要访问的资源路径不存在')
})

server.listen(3000, () => {
  console.log('Web 服务已启动')
})