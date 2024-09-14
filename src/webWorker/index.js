import React, { useEffect, useState } from 'react'
 const worker = new Worker(new URL('./worker.js', import.meta.url))

export default function WebWorkerExample() {
   // console.log("validateSum---------11");

    const [dark, setDark] = useState(true);
    useEffect(()=>{
        //listen for message from the user
        worker.onmessage=(e)=>{
            console.log(e);
            alert(e.data);
        };
        // Handles worker error
        worker.onerror=(error)=>{
            console.log("workerError",error);
            //alert(e.data);
        };
        // clean up worker on coponent unmount
        return ()=>{
            worker.terminate();
        }

    },[]);
    const validateSum = () => {
        console.log("validateSum---------");

       // start the worker 
       worker.postMessage('start');
    }
    const changecolor = () => {
        console.log("changecolor");
        setDark(!dark);
    }
    return (
        <div style={{ width: "100%", height: "100%", position: "absolute",background:dark?"black":"purple" }}>
            <h1 style={{color:"white"}}>web worker example</h1>
            <button onClick={validateSum}>VALIDATE SUM</button>
            <button onClick={changecolor}> CHANGE COLOR</button>
        </div>
    )
}
