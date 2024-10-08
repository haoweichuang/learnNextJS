// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

let todos = [
//  { id: 1, text: 'Visit Prague Castle', complete: false },
//  { id: 2, text: 'Walk across Charles Bridge', complete: true },
];

app.get('/todos', (req, res) => {
  ///res.json(todos);
  const sortedTodos = [...todos].sort((a, b) => b.id.localeCompare(a.id)); 
  //req:前端發送的, res:後端回傳的
  res.send(sortedTodos);
});

app.post('/todos', (req, res) => {
  // const newTodo = {
  //   id: todos.length + 1,
  //   text: req.body.text,
  //   complete: false,
  // };
  // todos.push(newTodo);
  // res.status(201).json(newTodo);
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

app.delete('/todos/:id', (req, res) => {
  // const id = parseInt(req.params.id);
  // todos = todos.filter((todo) => todo.id !== id);
  // res.status(204).send();
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

app.put('/todos/:id', (req, res) => {
  // const id = parseInt(req.params.id);
  // const updatedTodo = req.body;
  // todos = todos.map((todo) => (todo.id === id ? updatedTodo : todo));
  // res.json(updatedTodo);
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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});