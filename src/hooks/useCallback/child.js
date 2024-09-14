import React,{useState,useEffect} from 'react'

export default function Child({getItems}) {
    const [list,setList]=useState([]);
    useEffect(()=>{
        console.log("useEffevt")
        setList(getItems());
    },[getItems]);
    console.log("setList",list)
  return (
    <div>
        <ul>
            {list.map((item,index)=>{
                return(
                <li key={index}>
                    {item}
                </li>
                );
            })

            }
        </ul>
      
    </div>
  )
}
