import React, { useState } from 'react'

function Color() {

    let[col,setCol]=useState("red")

  return (
    <>
        <nav>Amazon</nav>
        <div className="container-fluid">
            <div className="row">
                <div className="col-5 mt-5 m-auto">
                    <div className="card">
                        <div className="card-header bg-dark text-white text-center fw-bold">Color</div>
                        <div className="card-body">
                            <input type="color" name="" id="" onChange={(e)=>setCol(e.target.value)} />
                        </div>
                        <div className="card-footer" >
                            <div style={{height:"200px",width:"200px", backgroundColor:col}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Color