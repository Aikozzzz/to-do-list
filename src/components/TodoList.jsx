import React from 'react'

export default function TodoList({ todos, onToggle, onDelete }) {
  if (!todos.length) return <p className="empty">No tasks yet.</p>
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
          <label>
            <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
            <span>{todo.text}</span>
          </label>
          <button className="delete" onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}
