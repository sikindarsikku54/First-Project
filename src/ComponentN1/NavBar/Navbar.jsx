import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav className='navbar navbar-expand-lg bg-dark navbar-dark px-3 fs-4'>
            <Link to="Home" className='nav-link fw-bold'>Amazon</Link>

            <div className='collapse navbar-collapse d-flex justify-content-between px-3 '>
                <ol className='navbar-nav'>
                    <li className='nav-item'>
                        <Link to="About" className='nav-link'>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="Contact" className='nav-link'>Contact</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="Amazon" className='nav-link'>Product</Link>
                    </li>
                </ol>

                <ol className='navbar-nav'>
                    <li className='nav-item'>
                        <Link to="UserRegistation" className='nav-link'>Registation</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="UserLogin" className='nav-link'>Login</Link>
                    </li>
                </ol>

            </div>
        </nav>
    </>
  )
}

export default Navbar