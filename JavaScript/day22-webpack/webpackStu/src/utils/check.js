/**
 * 目标: 编辑 验证用户名和密码长度的工具函数
 *   这个文件是要被 webpack解析的,所以可以使用 ECMAscript语法
 */
// 命名导出
export const checkUname = (uname) => {
  return uname.length >= 8
}
export const checkPwd = (pwd) => {
  return pwd.length >= 6
}
// 默认导出
export default {
  checkUname,
  checkPwd
}