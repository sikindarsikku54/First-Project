import React from 'react'
import { Link } from 'react-router-dom'

function NavbarN() {
    return (
        <>
            <nav className='navbar navbar-dark navbar-expand-lg '>
                <h2 className='ms-3'>Amazon</h2>
                <div className='collapse navbar-collapse d-flex justify-content-between ms-3 me-4'>
                    <ul className='navbar-nav '>
                        <li className='navbar-item'>
                            <Link className='navbar-link text-decoration-none text-white ms-4' to="/HomeN">Home</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link className='navbar-link text-decoration-none text-white ms-4' to="/AboutN">About</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link className='navbar-link text-decoration-none text-white ms-4' to="/ContactN">Contact</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link className='navbar-link text-decoration-none text-white ms-4' to="/AmazonN">Product</Link>
                        </li>
                    </ul>
                    <ul className='navbar-nav '>
                        <li className='navbar-item'>
                            <Link className='navbar-link text-decoration-none text-white ms-4' to="/RegistrationN">Registration</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link className='navbar-link text-decoration-none text-white ms-4' to="/LoginN">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavbarN