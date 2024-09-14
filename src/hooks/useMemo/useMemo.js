import React,{useState,useEffect,useMemo} from 'react'

export default function UseMemo() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const themeStyle=useMemo(()=>{
        console.log("themeStyle");
        return (
            {background:dark?'black':"purple"}
        );
    },[dark]);
    //const themeStyle={background:dark?'black':"purple"}
    useEffect(() => {
        console.log('themeChanged')
    }, [])
    return (
        <div style={themeStyle}>
            <p>{number}</p>
            <button onClick={()=>{setDark(!dark)}}>CHANGE THEME</button>
            <button onClick={()=>{setNumber(number+1)}}>INCREMENT COUNT</button>

        </div>
    )
}
