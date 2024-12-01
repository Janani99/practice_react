import React from 'react'

export default function EditTodo({editTodo,currentTodoText,onChange}) {
    return (
        <div>
               <form onSubmit={editTodo}>
                    <input type="text" placeholder="Enter edit todo" onChange={onChange} value={currentTodoText} />
                    <button type="submit">Save TODO</button>
                </form>
          
        </div>
      )
}
