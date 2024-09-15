import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function HooksNavigation() {

    return (
        <div>
            <p>Hook navigation</p>
            <ul>
                <li><Link to='useState'>USESTATE</Link></li>
                <li><Link to='useEffect'>USEEFFECT</Link></li>
                <li><Link to='useMemo'>USEMEMO</Link></li>  
                <li><Link to='useCallback'>USECALLBACK</Link></li>  
                <li><Link to='useContext'>USECONTEXT</Link></li>  
                <li><Link to='useRef'>USEREF</Link></li>  
            </ul>
            <Outlet/>

 
        </div>
    )
}
