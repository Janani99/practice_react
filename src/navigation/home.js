import React from 'react'
import { replace, useNavigate } from 'react-router-dom'

function Home() {
    const navigate1=useNavigate();
    const navigateToDetailsPage=()=>{
        navigate1('/details',{replace:true});
    }
  return (
    <div>
      <p>home</p>
      <button onClick={navigateToDetailsPage}>Navigate</button>
    </div>
  )
}

export default Home;
