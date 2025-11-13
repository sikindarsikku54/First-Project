import React, { useState } from 'react'

function Compare() {

    let [value,setValue]=useState("Nane Raju")

    function handle(){
        setValue((prev)=>{
            if(prev=="Nane Raju"){
                  return "nene Mantri"
            }
            else{
                return "Nane Raju"
            }
        })
    }

  return (
    <>
        <h2>{value}</h2>
        <button onClick={handle} value={value} className='btn btn-danger text-white'>Click Me</button>
    </>
  )
}

export default Compare