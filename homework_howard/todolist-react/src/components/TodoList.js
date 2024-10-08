import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { addTodos, deleteTodos, changeTodoscomplete } from './ListFunction';
import ListContent from './ListContent';


function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const getTodos = async () => {
        const response = await axios.get('/todos')
        console.log(response); //這邊可看一下回傳內容
        setTodos(response.data)
    }

    useEffect(() => {
        getTodos();
    }, [] // []元件建立時,觸發一次
    );

    return(
        <div className="todo-container">
            <h1>Prague Itinerary</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Type a task"
            />
            <button type="button" onClick={() => addTodos(newTodo, setNewTodo, getTodos)}>
                Add Task
            </button>
            <ListContent
                todos={todos}
                deleteTodos={deleteTodos}
                changeTodoscomplete={changeTodoscomplete}
                getTodos={getTodos}
            />
        </div>
  );
}



export default TodoList;