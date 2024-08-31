/**
 * 目标：基于 Web 服务，开发-城市列表数据接口
 * 步骤：
 *  1. 判断 req.url 资源路径+查询字符串，路径前缀匹配/api/city
 *  2. 借助 querystring 模块的方法，格式化查询参数字符串
 *  3. 读取 city.json 城市数据，匹配省份名字下属城市列表
 *  4. 返回城市列表，启动 Web 服务测试
 */
const fs = require('fs')
const path = require('path')
const http = require('http')
// querystring模块可以将 键=值&键=值 格式分割为对象
const qs = require('querystring')
const server = http.createServer()
server.on('request', (req, res) => {
  // 省份列表接口
  if (req.url === '/api/province') {
    fs.readFile(path.join(__dirname, 'data/province.json'), (err, data) => {
      res.setHeader('Content-Type', 'application/json;charset=utf-8')
      res.end(data.toString())
    })
  } else if (req.url.startsWith('/api/city')) {
    // /api/city?pname=XXXX
    // 1. 获取到 以? 分割的数组的第二项,就是查询参数
    const querySearch = req.url.split('?')[1]
    // 2. 借助 querystring 模块可以将 键=值&键=值 格式分割为对象
    const obj = qs.parse(querySearch)
    const pname = obj.pname
    // 3. 根据这个省份 去data/city.json 文件中找到需要的城市列表
    fs.readFile(path.join(__dirname, 'data/city.json'), (err, data) => {
      const cityObj = JSON.parse(data)
      // console.log(cityObj[pname])
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(cityObj[pname]))
    })
  } else {
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end('你要访问的资源路径不存在')
  }
})
server.listen(3000, () => {
  console.log('Web 服务启动了')
})
