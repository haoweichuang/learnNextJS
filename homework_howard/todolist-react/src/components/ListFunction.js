import axios from 'axios';

// 新增
export const addTodos = async (newTodo, setNewTodo, getTodos) => {
  if (newTodo.trim() === '') {
    alert('Task cannot be empty!');
    return;
  }
  try {
    const response = await axios.post('/todos', { text: newTodo });
    console.log('POST /todos response:', response);
    getTodos(); // 新增後重新獲取待辦事項
    setNewTodo(''); // 清空輸入框
  } catch (error) {
    console.error('Error adding todo:', error);
  }
};

// 刪除
export const deleteTodos = async (id, getTodos) => {
  try {
    const response = await axios.delete(`/todos/${id}`);
    console.log(`DELETE /todos/${id} response:`, response);
    getTodos(); // 刪除後重新獲取待辦事項
  } catch (error) {
    console.error(`Error deleting todo with id ${id}:`, error);
  }
};

// 切換
export const changeTodoscomplete = async (id, todos, getTodos) => {
  try {
    const todo = todos.find((t) => t.id === id);
    if (!todo) {
      console.error(`Todo with id ${id} not found.`);
      return;
    }
    const updatedTodo = { ...todo, complete: !todo.complete };
    const response = await axios.put(`/todos/${id}`, updatedTodo);
    console.log(`PUT /todos/${id} response:`, response);
    getTodos(); // 更新後重新獲取待辦事項
  } catch (error) {
    console.error(`Error updating todo with id ${id}:`, error);
  }
};