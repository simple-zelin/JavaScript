/**
 * 目标：使用 npm 下载 dayjs 软件包来格式化日期时间
 * 
 *  1. （可选）初始化项目清单文件，命令：npm init -y
 *  2. 下载(链接远程的npm包管理器)软件包到当前项目，命令：npm i 软件包名称
 *  3. 使用软件包
 */
const dayjs = require('dayjs')
console.log(dayjs().format('YYYY-MM-DD'))