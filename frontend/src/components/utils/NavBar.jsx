import React from 'react'
import { Link } from 'react-router-dom'

import './NavBar.css'

const NavBar = () => {
  return (
    <div className='navbar'>

            <ul className='navbar-container'>

                <li>
                    <Link to='/'>
                        Home
                    </Link> 
                </li>

                <li>
                    <Link to='/records'>
                        Records
                    </Link> 
                </li>

                <li>
                    <Link to='/about'>
                        About
                    </Link> 
                </li>


            </ul>

    </div>
  )
}

export default NavBar