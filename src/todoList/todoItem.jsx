import React from 'react'

export default function TodoItem({item,deleteTodo,handleEditTodo}) {
    return (
        <div>

            <div key={item.id}>
                <p>{item.text}
                    &nbsp;&nbsp;
                    <button onClick={() => deleteTodo(item)}>   Delete</button>
                    &nbsp;&nbsp;

                    <button onClick={() => handleEditTodo(item)}>EDIT</button>
                </p>

            </div>
        </div>
    )
}
