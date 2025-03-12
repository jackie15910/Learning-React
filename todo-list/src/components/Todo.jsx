import React from 'react'
import { useState } from 'react';
import "../style.css"

function generateId() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ` +
         `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
}

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const handleSubmit = () => {
      setTodos((todos) => {
      return todos.concat({
          text: input,
          id: generateId(),
        })
      });
      setInput("");
    };
  
const removeTodo = (id) => {
  setTodos((todos) => todos.filter((t) => t.id !== id));
};

  return (
    <div className='container'>
        <div>
          <input type='text' placeholder='New Todo' value={input} onChange={(e) => setInput(e.target.value)}></input>
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <ul className='todo-list'>
          {todos.map(({text, id}) => (
            <li className="todo" key={id}>
              <span>{text}</span>
              <span>{id}</span>
              <button className='close' onClick={() => removeTodo(id)}>
                x
              </button>
            </li>
          ))}
        </ul>
    </div>
  )
};

export default Todo