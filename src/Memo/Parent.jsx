import React, { useState } from 'react'
import memo from './Child';


function Parent() {

    let [count,setCount]=useState(0);
    let [name,setName]=useState("Sikku")

    console.log("parent  componet render")

  return (
    <>
        <button onClick={()=>setCount(count+1)}>Count</button>
        <memo count={count} />
    </>
  )
}

export default Parent