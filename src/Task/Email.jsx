import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Email() {

    let [eml1,seteml1]=useState("")
        let [eml2,seteml2]=useState("")
    
        function show(){
            if(eml1==eml2){
                alert("your Aligible for next step✅")
            }else{
                alert("your Not Aligible for next step❌")
            }
        }
 
      return (
        <div className="container-fluid">
                <div className="row">
                    <div className="col-4 m-auto mt-4">
                        <div className="card">
                            <div className="card-header text-white text-center bg-dark fw-bold">EmailPage</div>
                            <div className="card-body">
                                <input type="text" name="" id="" className='mt-3 form-control' placeholder='Enter your EmailId' onChange={(e) => seteml1(e.target.value)} />
                                <input type="password" name="" id="" className='mt-3 form-control' placeholder='Conform your EmailId'onChange={(e) => seteml1(e.target.value)} />
                                <div className='d-flex justify-content-evenly'>
                                    <Link to='/Password' className='btn btn-success text-white fw-bold mt-3'>prev</Link>
                                    <Link to='/Finish' className='btn btn-success text-white fw-bold mt-3' onClick={show}>Finish</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      )
    }


export default Email