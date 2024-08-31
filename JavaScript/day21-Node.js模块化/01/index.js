/**
 * nodejs默认支持 CommonJS 标准
 * 目标：基于 CommonJS 标准语法，导入工具属性和方法使用
 */
const obj = require('./utils.js')


console.log(obj.baseURL)


const result = obj.getArraySum([1, 2, 3])
console.log(result)