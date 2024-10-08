const express = require('express');
const router = express.Router();

//快速排版opt + shift + f
// 9-12 路由 會渲染一個index檔案 , 但此不需要用原生範例
//在終端機中專案下 指令npm i 將node_modules相關套件裝起來, 
//裝完後旨令 npm start將此環境運行起來, 預設是在localhost:3000, 可使用小工具 nodemon 改完後端code可以免重啟, google關鍵字nodemon進行安裝
//運行起來的版型為views的index.jade
/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});

//沒有建資料庫，建立todolist存在記憶體
let todos = [
//  {
//    id: '123',
//    text: '測試範例',
//    complete: false
//  },
//  {
//    id: '1235',
//    text: '測試範例2',
//    complete: true
//  },
//  {}
]

//也可這樣寫 
// router
//  .get()
//  .post()

//取的列表
router.get('/todos', (req, res) => {
  const sortedTodos = [...todos].sort((a, b) => b.id.localeCompare(a.id)); 
  //req:前端發送的, res:後端回傳的
  res.send(sortedTodos);
})

//新增
// 可加入if來判斷是否為空, 用這種方式來做基本驗證
//  if (!text){
//    res.status(400);
//    res.send({
//      message: 'text 不得為空'
//    })
//  }
router.post('/todos', (req, res) => {
  const {text} = req.body;
  console.log(req.body);
  
  const id = new Date().getTime().toString();
  const complete = false;
  const todo = {
    id,
    text,
    complete,
  };
  todos.push(todo);

  res.send(todo);
});

//刪除 要確認哪個，要帶入id
// 避免找不到誤刪
router.delete('/todos/:id', (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const index = todos.findIndex((todo) => todo.id === id);
  console.log(index);

  if (index === -1) {
    res.status(400)
    return res.send({
      message: '找不到該項目'
    })
  }

  todos.splice(index, 1)

  res.send();
});

// PUT 更新
router.put('/todos/:id', (req, res) => {
  const { id } = req.params; // 從路由參數中取得 id
  const { text, complete } = req.body; // 從請求 body 中取得新的 text 和 complete 狀態

  // 找到對應的 todo 項目的 index
  const index = todos.findIndex((todo) => todo.id === id);

  if (index === -1) {
    // 如果找不到該 id，回傳錯誤訊息
    res.status(400).send({
      message: '找不到該項目'
    });
    return;
  }

  // 更新該項目的資料
  todos[index].text = text !== undefined ? text : todos[index].text; // 若有提供 text 則更新，否則保持不變
  todos[index].complete = complete !== undefined ? complete : todos[index].complete; // 同理更新 complete 狀態

  // 回傳更新後的項目
  res.send(todos[index]);
});

module.exports = router;
