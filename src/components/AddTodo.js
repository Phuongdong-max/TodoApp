import React, { useState } from 'react';
import './AddTodo.scss'

function AddTodo({ addTodo }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTodo(text);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                className='input'
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new todo"
            />
            <button className='button' type="submit">Add</button>
        </form>
    );
}

export default AddTodo;