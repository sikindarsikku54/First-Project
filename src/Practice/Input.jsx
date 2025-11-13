import React, { useState } from 'react'

function Input() {

    let [item,setItem]=useState({usn:"",pw:""})

    function handleusn(e){
        setItem((prev)=>{
            return {...prev,usn:e.target.value}
        })
    }

    function handlepw(e){
        setItem((prev)=>{
            return {...prev,pw:e.target.value}
        })
    }

    function handlesubmit(){
        console.log(item)
        setItem({usn:"",pw:""})
    }

    return (
        <>
            <nav>Amazon</nav>
            {JSON.stringify(item)}
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-4 m-auto mt-4'>
                        <div className='card'>
                            <div className='card-header text-center text-white bg-dark'>
                                <h2>LoginPage</h2>
                            </div>
                            <div className='card-body'>
                                <input type="text" name=""  className='mt-3 form-control' value={item.usn}  onChange={handleusn} />
                                <input type="password" name=""  className='mt-3 form-control' value={item.pw}  onChange={handlepw} />
                                <input type="submit" name="" id="" className='btn btn-success mt-3' onClick={handlesubmit} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Input