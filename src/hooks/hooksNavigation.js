import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function HooksNavigation() {

    return (
        <div>
            <p>Hook navigation</p>
            <div>
                <p>---------USESTATE-------</p>
                <ul>
                    <li><Link to='arrayofItems'>ArrayOfItems</Link></li>
                    <li><Link to='counter'>counter</Link></li>
                    <li><Link to='formInputs'>formInput</Link></li>
                </ul>
            </div>
            <div>
                <p>---------USEEFFECT-------</p>
                <ul>
                    <li><Link to='useEffect'>UseEffect</Link></li>  
                </ul>
            </div>
            <div>
                <p>---------USEREF------</p>
                <ul>
                    <li><Link to='counterref'>COUNTER</Link></li>
                    <li><Link to='focusInput'>FOCUSINPUT</Link></li>
                    <li><Link to='intervalTimer'>INTERVALTIMER</Link></li>
                    <li><Link to='timer'>TIMER</Link></li>
                    </ul>
            </div>
            <div>
                <p>---------USEMEMO-------</p>
                <ul>
                    <li><Link to='useMemo'>USEMEMO</Link></li>  
                </ul>
            </div>
            <div>
                <p>---------USECALLBACK-------</p>
                <ul>
                    <li><Link to='useCallback'>USECALLBACK</Link></li>  
                </ul>
            </div>
            <div>
                <p>---------USECONTEXT-------</p>
                <ul>
                    <li><Link to='useContext'>USECONTEXT</Link></li>  
                </ul>
            </div>

<Outlet></Outlet>

        </div>
    )
}
