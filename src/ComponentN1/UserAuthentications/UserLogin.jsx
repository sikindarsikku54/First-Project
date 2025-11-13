import React from 'react'
import { Link } from 'react-router-dom'

function UserLogin() {
  return (
    <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-4 m-auto mt-4'>
                    <div className='card'>
                        <div className='card-header bg-dark text-white text-center fs-5'>LoginPage</div>
                        <div className='card-body'>
                            <input type="text" name="" id="" className='mt-3 form-control' />
                            <input type="text" name="" id="" className='mt-3 form-control' />
                            <input type="submit" name="" id="" className='mt-3  bg-warning text-whit btn' value="Login" />
                            <p className='mt-3'>If You Not Registared ? 
                                <Link to="/UserRegistation" className='text-warning text-decoration-none'> signUp</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default UserLogin