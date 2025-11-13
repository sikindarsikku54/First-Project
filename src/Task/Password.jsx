import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Password() {

    let [pass1,setPass1]=useState("")
    let [pass2,setPass2]=useState("")

    function show(){
        if(pass1==pass2){
            alert("your Aligible for next step✅")
        }else{
            alert("your Not Aligible for next step❌")
            return
        }
    }


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-4 m-auto mt-4">
                    <div className="card">
                        <div className="card-header text-white text-center bg-dark fw-bold">PasswordPage</div>
                        <div className="card-body">
                            <input type="text" name="" id="" className='mt-3 form-control' onChange={(e)=>setPass1(e.target.value)}  placeholder='Enter your Password' />
                            <h5 className='mt-3'>{pass1.length>8?"Strong Password✅":"Weak Password❌"}</h5>
                            <input type="password" name="" id="" className='mt-3 form-control' onChange={(e)=>setPass2(e.target.value)} placeholder='Conform your Password' />
                            <div className='d-flex justify-content-evenly'>
                                <Link to='/Login' className='btn btn-success text-white fw-bold mt-3 me-5'>Prev</Link>
                                {
                                    pass1==pass2 && <Link to='/Email' className='btn btn-success text-white fw-bold mt-3' onClick={show}>Next</Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Password