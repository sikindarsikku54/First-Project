import React from 'react'
import { Link } from 'react-router-dom'

function RegistrationN() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4 m-auto mt-4">
            <div className="card">
              <div className="card-header text-white text-center bg-dark fw-bold">RegistrationPage</div>
              <div className="card-body">
                <input type="text" name="" id="" className='mt-3 form-control'/>
                <input type="password" name="" id="" className='mt-3 form-control'/>
                <Link to='/LoginN' className='btn btn-success text-white fw-bold mt-3'>Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegistrationN