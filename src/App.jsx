import React, { useEffect, useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

export default function App() {
  const [todos, setTodos] = useState(() => {
    try {
      const raw = localStorage.getItem('todos')
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (text) => {
    if (!text.trim()) return
    setTodos(prev => [{ id: Date.now(), text: text.trim(), completed: false }, ...prev])
  }

  const toggleTodo = (id) => {
    setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(t => t.id !== id))
  }

  return (
    <div className="app">
      <h1>To‑Do List</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  )
}
