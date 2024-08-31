/**
 * 目标：基于 ECMAScript 标准语法，封装属性和方法并"默认"导出
 */
const baseURL = 'http://hmajax.itheima.net'
const getArraySum = arr => arr.reduce((sum, item) => sum += item, 0)

// ECMAScript 标准语法 默认导出语法 => 
export default {
  // 键: 值
  baseURL,
  getArraySum
}