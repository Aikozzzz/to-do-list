import React, { useState } from 'react'

export default function TodoInput({ onAdd }) {
  const [text, setText] = useState('')

  const submit = (e) => {
    e.preventDefault()
    onAdd(text)
    setText('')
  }

  return (
    <form className="todo-input" onSubmit={submit}>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add a task..."
        aria-label="New todo"
      />
      <button type="submit">Add</button>
    </form>
  )
}
