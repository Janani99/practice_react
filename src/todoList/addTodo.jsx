import React from 'react'

export default function AddTodo({addTodo,currentTodoText,onChange}) {
  return (
    <div>
           <form onSubmit={addTodo}>
                <input type="text" placeholder="Enter todo" onChange={onChange} value={currentTodoText} />
                <button type="submit">Add Todo</button>
            </form>
      
    </div>
  )
}
