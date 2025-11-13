import React, { useState } from 'react'

function Count() {
    let [value,setValue]=useState(0);

    function handle(){
        setValue((prev)=>{
            return prev+1
        })
        setValue((prev)=>{
            return prev+1
        })
        
    }

  return (
    <>
        <h2>Count:-{value}</h2>
        <button className='btn btn-danger text-white' value={value} onClick={handle}>Click Me</button>
    </>
  )
}

export default Count