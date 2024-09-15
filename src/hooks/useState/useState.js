import React from 'react'
import { Outlet ,Link} from 'react-router-dom'

export default function UseState() {
    return (
        <div>
            <p>USESTATE</p>
            <ul>
                <li><Link to='arrayofItems'>ArrayOfItems</Link></li>
                <li><Link to='counter'>counter</Link></li>
                <li><Link to='formInputs'>formInput</Link></li>
            </ul>
            <Outlet/>

        </div>
    )
}
