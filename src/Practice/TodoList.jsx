import React, { useState } from 'react'

let products = [{
    id: 101,
    name: "books",
    qty: 2,
},
{
    id: 102,
    name: "pens",
    qty: 3,
},
{
    id: 103,
    name: "laptop",
    qty: 1,
}]

function TodoList() {

    let [items, setItems] = useState([])

    let [itemvalue,setItemvalue]=useState("")

    

    function submit(){
        if (itemvalue.trim() === "") return;
        setItems((prev)=>{
            return [...prev,itemvalue]

        })
        setItemvalue("")
    }

    return (
        <>
            <nav>Amazon</nav>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-4 m-auto mt-4">
                        <div className="card">
                            <div className="card-header text-white text-center fw-bold bg-dark">Todo List</div>
                            <div className="card-body">
                                <div className='d-flex'>
                                    <input type="text" className='form-control mt-4 me-4' onChange={(e)=>setItemvalue(e.target.value)} value={itemvalue} />
                                    <button className='btn bg-warning text-white text-center fw-bold mt-4' onClick={submit}>Task</button>
                                </div>

                            </div>
                            <div className="card-footer">
                                {
                                  items.length>=1 &&  items.map((item,i) => {
                                        return( 
                                        <div className='d-flex justify-content-between me-2 ms-1' key={i}>
                                            <h3 className='mt-2'>{item}</h3>
                                            {/* <h3 className='mt-2'>{item.qty}</h3> */}
                                            <button className='btn btn-danger btn-sm text-white mt-2'>Delete</button>
                                        </div>)
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoList