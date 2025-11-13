import React, { useState } from 'react'

function Checkbox() {

    let [val, setVal] = useState(false)

    function handle(){
        setVal(!val)
    }

    return (
        <>
            <nav>Amazon</nav>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-5 m-auto mt-4">
                        <div className="card text-center">
                            <div className="card-header bg-dark text-white text-center">CheckBox</div>
                            <div className="card-body">
                                <input type="checkbox" onClick={handle} ></input>
                                <input type="text" name="" id="" placeholder='Enter Password' className='text-center form-control' style={{display:val?"block":"none"}}></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkbox