import React from 'react'
import { Link } from 'react-router-dom'

function NavbarNN() {
  return (
    <>
        <nav className='navbar navbar-expand-lg bg-dark text-white'>
            <h3></h3>
            <div className='collapse navbar-collapse d-flex justify-content-evenly'>
                <ol className='navbar-nav'>
                    <li className='navbar-item'>
                        <Link className="navbar-link me-5 text-decoration-none text-white fw-bold" to="/Login">App</Link>
                    </li>
                </ol>
                <ol className='navbar-nav'>
                    <li className='navbar-item'>
                        <Link className="navbar-link me-5 text-decoration-none text-white" to="/Email"></Link>
                    </li>
                </ol>
                <ol className='navbar-nav'>
                    <li className='navbar-item'>
                        <Link className="navbar-link me-5 text-decoration-none text-white" to="/login"></Link>
                    </li>
                </ol>
                <ol className='navbar-nav'>
                    <li className='navbar-item'>
                        <Link className="navbar-link me-5 text-decoration-none text-white" to="/Finish"></Link>
                    </li>
                </ol>
            </div>
        </nav>
    </>
  )
}

export default NavbarNN