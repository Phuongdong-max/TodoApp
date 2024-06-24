import React from 'react';
import './TodoItem.scss'

function TodoItem({ todo, toggleComplete, deleteTodo }) {
    return (
        <div className='form-check'>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
    );
}

export default TodoItem;