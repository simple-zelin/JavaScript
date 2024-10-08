/**
 * 目标：基于 express 软件包，开发提供省份列表的数据接口
 * 要求：get 请求方法，/api/province 的请求路径
 */
const fs = require('fs')
const path = require('path')
const express = require('express')
const server = express()

//  要求：get 请求方法，/api/province 的请求路径
server.get('/api/province', (req, res) => {
  // res.send('/api/province')
  // 如果监听到了这个请求,则 读取文件并返回文件信息
  fs.readFile(path.join(__dirname, 'data/province.json'), (err, data) => {
    if (err) return console.log('读取失败')
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