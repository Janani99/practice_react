import React from 'react'
import { Outlet ,Link} from 'react-router-dom'

export default function UseRef() {
    return (
        <div>
            <ul>
                <li><Link to='counterref'>COUNTER</Link></li>
                <li><Link to='focusInput'>FOCUSINPUT</Link></li>
                <li><Link to='intervalTimer'>INTERVALTIMER</Link></li>
                <li><Link to='timer'>TIMER</Link></li>
            </ul>
         </div>
    )
}
