import React,{useState} from 'react'

export default function ArrayOfItems() {
    const [item,setItem]=useState([]);
    // const [messageobj,setMessage]=useState({
    //     author:'',
    //     message:{
    //         id:1,
    //         text:""
    //     }
    // });
    // const validate=()=>{
    //     setMessage((prevState)=>({
    //         ...prevState,
    //         message:{
    //             ...prevState.message,
    //             text:'sampe code'
    //         }
    //     }))
    // }
    const addItem=()=>{
        console.log("addItems ");
        setItem([...item,`Item ${item.length+1}`]);
    }
    const removeItem=(index)=>{
        console.log("remove Item");
        setItem(item.filter((_,ind)=>ind!==index))

    }
  return (
    <div>
         <button onClick={addItem}>add item</button>
        <ul>
            {
                item.map((item,index)=>{
                    return(
                    <li style={{listStyle:"none"}} key={index}>
                        {item}
                        <button onClick={()=>removeItem(index)}>REMOVE</button>
                    </li>
                    )

                })
            }
        </ul>


    </div>
  )
}
