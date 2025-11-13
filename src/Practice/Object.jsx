import React, { useState } from 'react'

function Object() {
    let [obj,setObj]=useState({name:"",age:""})

    function handlename(e){
        setObj((prev)=>{
            return{...prev,name:e.target.value}
        })
    }

    function handleage(e){
        setObj((prev)=>{
            return{...prev,age:e.target.value}
        })
    }

    function handlesubmit(){
        console.log(obj)
        setObj({name:"",age:""})
    }

  return (
    <>
        <nav>Amazon</nav>
        {JSON.stringify(obj)}
        <div className="container-fluid">
            <div className="row">
                <div className="col-5 m-auto mt-4">
                    <div className="card">
                        <div className="card-header text-center text-white bg-dark fw-bold">
                            Personal Detailes
                        </div>
                        <div className="card-body">
                            <input type="text" placeholder='Enter the Name' className='form-control mt-3'value={obj.name} onChange={handlename} />
                            <input type="text"  placeholder='Enter the Age' className='form-control mt-3' value={obj.age} onChange={handleage} />
                            <input type="submit" onClick={handlesubmit}  className='mt-3 btn btn-warning text-white fw-bold text-center' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Object