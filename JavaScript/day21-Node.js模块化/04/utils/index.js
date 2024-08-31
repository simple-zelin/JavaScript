/**
 * 目标: 导出 工具 => 数组求和函数 和 验证用户名和密码函数
 */
// 1. 导入 工具模块
const arrObj = require('./lib/arr.js')
const checkObj = require('./lib/str.js')

// console.log(arrObj, checkObj)

// 2. 导出 工具函数 给 其他模块使用
module.exports = {
  ...arrObj,
  ...checkObj
}