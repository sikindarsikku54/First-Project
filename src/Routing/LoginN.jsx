import React from 'react'
import { Link } from 'react-router-dom'

function LoginN() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4 m-auto mt-4 ">
                        <div className="card">
                            <div className="card-header bg-dark text-white text-center fw-bold">LoginPage</div>
                            <div className="card-body">
                                <input type="text" name="" id="" className='mt-3 form-control' />
                                <input type="password" name="" id="" className='mt-3 form-control' />
                                <Link to='/RegistrationN' className='btn btn-danger text-white fw-bold mt-3'>Registration</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginN