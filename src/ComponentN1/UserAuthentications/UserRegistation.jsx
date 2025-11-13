import React from 'react'
import { Link } from 'react-router-dom'

function UserRegistation() {
  return (
    <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-4 m-auto mt-4'>
                    <div className='card'>
                        <div className='card-header bg-dark text-white text-center fs-5'>RegistationPage</div>
                        <div className='card-body'>
                            <input type="text" name="" id="" className='mt-3 form-control' />
                            <input type="text" name="" id="" className='mt-3 form-control' />
                            <Link to="/UserLogin" className=' btn form-control bg-warning mt-3'> Registation</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default UserRegistation