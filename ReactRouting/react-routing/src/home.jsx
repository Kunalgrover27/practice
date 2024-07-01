import React from 'react'
import {NavLink} from 'react-router-dom'

function Home() {
  return (
    <div>
        <ul>
        <li> <NavLink to="/">home</NavLink></li>
        <li> <NavLink to="/kunal/:userid">lol</NavLink></li>
        </ul>
    </div>
  )
}

export default Home

