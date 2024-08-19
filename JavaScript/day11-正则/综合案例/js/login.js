// 入口函数
window.addEventListener('DOMContentLoaded',function(){
  // 业务1：tab栏的切换
  const tabNav = document.querySelector('.tab-nav')
  const panes = document.querySelectorAll('.tab-pane')
  tabNav.addEventListener('click',function(e){
      if (e.target.tagName === 'A') {
        // 1.2 切换 tab栏
        // 排他1
        //  - 找到之前有active类名的盒子,删除类名
        tabNav.querySelector('.active').classList.remove('active')
        //  - 给当前点击的添加类名
        e.target.classList.add('active')
        // 1.3 切换内容区域
        // 排他2 
        // 先去掉所有人的样式
        for (let i = 0; i < panes.length; i++) {
          panes[i].style.display = 'none'
        }
        // 在找到当前的添加样式
        const index = e.target.dataset.id
        panes[index].style.display = 'block'
      }
  
  })
  // 输入账户密码登录 并跳转页面
  const form = document.querySelector('.xtx-login-main form')
  const check = document.querySelector('#my-checkbox')
  const uname = document.querySelector('[name="username"]')
  const pwd = document.querySelector('[name="password"]')
  // 给form绑定提交事件 => 阻止默认行为
  form.addEventListener('submit',function(e){
    e.preventDefault()
    if(!check.checked){
      return alert('请阅读协议并同意')
    }
    if(uname.value === 'admin'&&pwd.value==='123456'){
      localStorage.setItem('uname',uname.value)
      location.href='./index.html'
    }else{
      alert('账户或密码')
    }
  })
})