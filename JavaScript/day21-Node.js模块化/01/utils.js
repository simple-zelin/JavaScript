/**
 * 目标：基于 CommonJS 标准语法，封装属性和方法并导出
 */
const baseURL = 'http://hmajax.itheima.net' // 基地址
const getArraySum = arr => arr.reduce((sum, item) => sum += item, 0)


// 导出 基地址和求和函数,给其他模块使用
// CommonJS 导出规范 module.exports = {} 全部导出
module.exports = {
  baseURL, getArraySum
}