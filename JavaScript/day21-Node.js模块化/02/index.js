/**
 * 目标：基于 ECMAScript 标准语法，"默认"导入，工具属性和方法使用
 */
// 导入 import 变量名 from '模块名/路径'
import obj from './utils.js'

// 默认 node 不支持 ECMAScript 语法规范的,需要 创建 package.json 文件, 书写配置项 {"type": "module"}
console.log(obj.baseURL)