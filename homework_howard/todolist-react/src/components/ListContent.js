import React from 'react';
import axios from 'axios';

function ListContent({ todos, deleteTodos, changeTodoscomplete, getTodos }) {
  return (
    <div className="todo-list-main">
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item" >
            <span className="todo-text"  
                  style={{textDecoration: todo.complete ? "line-through" : null}}
                  onClick={() => changeTodoscomplete(todo.id, todos, getTodos)}>
              {todo.text}
            </span>
            <button type="button" onClick={() => changeTodoscomplete(todo.id, todos, getTodos)}>
              {todo.complete ? 'Undo' : 'Done'}
            </button>
            <button type="button" onClick={() => deleteTodos(todo.id, getTodos)}>
              Delete
            </button>
          </li>
          ))}
          </ul>
        

    </div>
  );
}

export default ListContent;