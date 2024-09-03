/**
 * 目标 使用 验证用户名和密码长度的工具函数
 */
// 导入 
import { checkUname, checkPwd } from 'Myutils/check.js' 
// console.log(checkUname('kakaxi123'))

/**
 * 目标: 需求点击 login-btn 按钮,验证 用户名和密码长度是否符合要求
 */
/* 
document.querySelector('.login-btn').addEventListener('click', e => {
  // 验证 用户名和密码长度是否符合要求
  const uname = document.querySelector('.username').value
  const pwd = document.querySelector('.password').value
  if (!checkUname(uname)) {
    return alert('用户名不符合要求')
  }
  if (!checkPwd(pwd)) {
    return alert('密码不符合要求')
  }
  alert('符合要求了~')
})
*/
/**
 * 目标: 让 webpack 解析 css文件
 *  1. 在 入口中 引入 css文件
 */
import '@/css/index.css'
/**
 * 目标: 让 webpack 解析 less文件
 *  1. 在 入口中 引入 less 文件
 *  2. 下载 less 和 less-loader 
 *  3. 配置 webpack.config.js 
 *  4. 重新打包
 */
import '@/less/index.less'
/**
 * 目标: 给页面中的img 设置 src 属性值
 *  1. 先引入 图片
 */
import img from '@/assets/logo.png'
document.querySelector('img').src = img


/**
 * 目标: 完成一个数组的映射功能, 要求每一个数组元素 + 1
 */
const arr = [1, 2, 3]
const newArr = arr.map(item => item + 1)
console.log(newArr)


/**
 * 目标: 借助 axios 实现 用户注册 功能
 *  1. npm 下载依赖 
 *  2. 在入口文件中 引入依赖
 *  3. 打包,测试效果
 */
import axios from 'axios'

document.querySelector('.login-btn').addEventListener('click', async e => {
  // 验证 用户名和密码长度是否符合要求
  const uname = document.querySelector('.username').value
  const pwd = document.querySelector('.password').value
  if (!checkUname(uname)) {
    return alert('用户名不符合要求')
  }
  if (!checkPwd(pwd)) {
    return alert('密码不符合要求')
  }
  // 注册逻辑
  // console.log(axios)
  const res = await axios.post('http://hmajax.itheima.net/api/register', {
    username: uname,
    password: pwd
  })
})
console.log(111)