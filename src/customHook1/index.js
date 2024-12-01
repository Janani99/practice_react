import React from 'react'
import useFetch from './useFetch'

export default function CustomHook1() {
    const {data}=useFetch('https://jsonplaceholder.typicode.com/todos/');
    console.log("data",data)
  return (
    <div>
        <ul>
            {data.map(item=>(
                <>
                <li key={item.id}>{item.title}
                <input type="checkbox" checked={item.completed}/>
                </li>
                </>
            ))}
        </ul>
      
    </div>
  )
}

