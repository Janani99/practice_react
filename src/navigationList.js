import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <div>
      <ul style={{ cursor: "none", display: "contents" }}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/webWorker'>WEBWORKER</Link></li>
        <li> <Link to='/hooks'>HOOKS</Link></li>
        <li><Link to="/redux">REDUX</Link></li>
      </ul>


    </div>
  )
}
