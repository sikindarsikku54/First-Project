import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Login() {

    let [log1, setlog1] = useState()
    let [log2, setlog2] = useState()

    let [log3, setlog3] = useState({log1:log1,log2:log2})

    function show() {
        setlog3({log1:log1,log2:log2})
        console.log(log3)
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-4 m-auto mt-4">
                    <div className="card">
                        <div className="card-header text-white text-center bg-dark fw-bold">LoginPage</div>
                        <div className="card-body">
                            <input type="text" name="" id="" className='mt-3 form-control' placeholder='Enter Your Name' onChange={(e) => setlog1(e.target.value)} />
                            <input type="number" name="" id="" className='mt-3 form-control' placeholder='Enter Your Age' onChange={(e) => setlog1(e.target.value)} />
                            <div className='d-flex justify-content-evenly'>
                                {
                                    log1>1 && <Link to='/Password' className='btn btn-success text-white fw-bold mt-3' onClick={show}>Next</Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login