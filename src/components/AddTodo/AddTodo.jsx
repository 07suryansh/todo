import { useState } from "react";
import './AddTodo.css'

function AddTodo({ addTodo }) {
    const [todoText, setTodoText] = useState('');

    function onAddTodo(todoText) {
        addTodo({todoText})
    }

    return (
        <>
        <div className="input-text">
            <input 
                placeholder="add your next todo...."
                onChange={(e) => setTodoText(e.target.value)}
                value={todoText}
                className="todo-input"
            />
            <button onClick={() => {
               onAddTodo(todoText)
               setTodoText('');
            }}
            className="todo-btn"
            >➕</button>
            </div>
        </>
    )

}

export default AddTodo;