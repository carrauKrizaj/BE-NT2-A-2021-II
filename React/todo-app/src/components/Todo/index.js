import React from "react";

const todo = ({ todo, callbackBorrado, callbackChecked }) => {
    return (
        <li className="todo-container">
            <input type="checkbox" checked={todo.checked} onChange={() => callbackChecked(todo)} />
            <span> {todo.title}</span>
            <button onClick={() => callbackBorrado(todo)}> X </button>
        </li>
    )
}

export default todo 