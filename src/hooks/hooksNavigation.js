import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
 

export default function HooksNavigation() {
const navigate=useNavigate();
const useMemoClick=()=>{
    navigate('useMemo')
}
    return (
        <div>
            <p>Hook navigation</p>
            <ul>
                <li><Link to='useState'>USESTATE</Link></li>
                <li><Link to='useEffect'>USEEFFECT</Link></li>
                <li><Link to='useRef'>USEMEMO</Link></li>  
                <li><Link to='useCallback'>USECALLBACK</Link></li>  
                <li><Link to='useContext'>USECONTEXT</Link></li>  
                <li><Link to='useRef'>USEREF</Link></li>  
            </ul>
            <button onClick={useMemoClick}>USEMEMO</button>
            <Outlet/>

 
        </div>
    )
}
