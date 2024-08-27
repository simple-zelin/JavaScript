const creator = "李思思11"; // 给自己的数据起别名
/**
 * 目标1：渲染图书列表
 *  1.1 获取数据
 *  1.2 渲染数据
 */
const list = document.querySelector(".list");
//封装函数渲染页面
const render = () => {
  axios({
    url: "http://hmajax.itheima.net/api/books",
    method: "GET",
    params: { creator },
  }).then(({ data: { data } }) => {
    // console.log(res)
    // const {data:{data}} = res
    console.log(data);
    // 渲染页面map+join
    list.innerHTML = data
      .map((item, index) => {
        const { bookname, author, publisher, id } = item;
        return `
             <tr>
          <td>${index + 1}</td>
          <td>${bookname}</td>
          <td>${author}</td>
          <td>${publisher}</td>
          <td data-id=${id}>
            <span class="del">删除</span>
            <span class="edit">编辑</span>
          </td>
        </tr>
            `
      })
      .join("")
  });
};
render();

// 目标2：新增图书

const addBtn = document.querySelector(".add-btn");
const addForm = document.querySelector(".add-form");
const addModalDom = document.querySelector(".add-modal");
const addModal = new bootstrap.Modal(addModalDom);
addBtn.addEventListener("click", (e) => {
  // 获取数据
  const data = serialize(addForm, { hash: true, empty: true })
  console.log(data);

  // 判断数据是否为空
  if (!data.author || !data.bookname || !data.publisher) {
    return alert("不能为空");
  }

  axios({
    url: "http://hmajax.itheima.net/api/books",
    method: "POST",
    data: {
      creator,
      ...data,
    },
  }).then((res) => {
    // 添加成功 关闭弹框 渲染页面 清空表单
    // console.log(res)
    // 关闭弹框
    addModal.hide();
    render();
    addForm.reset();
  });
});

// 目标3：删除图书
// 给删除按钮绑定事件  => 事件委托 =>删除按钮是后追加的元素,所以不能直接获取,需要给父级添加事件委托
//  *  3.2 获取当前数据的id值
//  *  3.3 根据接口要求发送请求,删除数据
//  *  3.4 重新渲染页面
list.addEventListener("click", (e) => {
  const {
    target,
    target: {
      parentNode: { dataset },
    },
  } = e;
  if (target.classList.contains("del")) {
    // const { parentNode: { dataset } } = target
    // 3.2 获取当前数据的id值
    console.log(dataset.id);

    axios({
      url: `http://hmajax.itheima.net/api/books/${dataset.id}`,
      method: 'DELETE',
    }).then((res) => {
      alert(res.data.message)
      render()
    })
  }
})

// 目标4：编辑图书
// *  4.1 点击编辑按钮 显示模态框 => js 控制点击后执行其他的逻辑
// *  4.2 显示模态框后, 根据这个id 获取图书详情
// *  4.3 回显数据 => 回显到模态框中
// *  4.4 点击编辑的修改按钮 将最新的数据发送给服务器,修改数据
// *  4.5 重新渲染页面

const editModal = new bootstrap.Modal(document.querySelector(".edit-modal"));
const editForm = document.querySelector(".edit-form");

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit")) {
    const id = e.target.parentNode.dataset.id;
    editModal.show();
    axios({
      url: `http://hmajax.itheima.net/api/books/${id}`,
      method: 'GET',
    }).then((res) => {
      const { data } = res.data;

      // editForm.querySelector('[name=bookname]').value = data.bookname
      // editForm.querySelector('[name=author]').value = data.author
      // editForm.querySelector('[name=publisher]').value = data.publisher

      /* 4.3 回显数据 => 回显到模态框中
        => 因为 页面中input的 name 属性值和获取到的数据的键一致,
        所以可以循环遍历赋值 */
      // const arr = Object.keys(data)
      // console.log(arr) // ['id', 'bookname', 'author', 'publisher']
      Object.keys(data).forEach((item) => {
        // console.log(item, data[item])
        editForm.querySelector(`[name=${item}]`).value = data[item]
      })
    })
  }
})

// 4.4 点击编辑的 修改按钮 将最新的数据发送给服务器,修改数据

document.querySelector('.edit-btn').addEventListener('click',e=>{
      // 1) 获取表单数据
    const data =serialize(editForm,{hash:true,empty:true})
    console.log(data)

      // 2) 通过ajax发送数据给服务器做修改
      axios({
        url:`http://hmajax.itheima.net/api/books/${data.id}`,
        method:'PUT',
        data:{
            creator,
            ...data
        }
      }).then(res=>{
        editModal.hide()

        render()

        editForm.reset()
      })
})