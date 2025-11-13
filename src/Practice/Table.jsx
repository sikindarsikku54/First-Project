import React, { useState } from 'react'

let product={
    id:101,
    name:"Sumsung",
    image:"",
    qty:1,
    price:30000,
}

function Table() {

    let [item,setItem]=useState(product)

    function handleinc(){
        setItem((prev)=>{
            return {...prev,qty:item.qty+1}
        })
    }

    function handledec(){
        setItem((prev)=>{
            return {...prev,qty:item.qty>1?item.qty-1:1}
        })
    }

  return (
    <>

        <nav>Amazon</nav>
        <h2>Single Table:-</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias et earum excepturi odio odit? Hic nesciunt assumenda consequatur ab maiores iste provident facilis incidunt eaque quia, odit rerum ipsam maxime illo, facere iure, accusantium obcaecati porro illum commodi exercitationem corrupti animi! Provident nam eum iste accusamus, ut modi odit rerum?</p>
        <table className='table'>
            <thead className='table-dark'>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>image</th>
                    <th>qty</th>
                    <th>price</th>
                    <th>total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                        <img src={item.image} alt="" />
                    </td>
                    <td>
                        <button className='btn btn-danger' onClick={handledec}>-</button>
                        <span>{item.qty}</span>
                        <button className='btn btn-success' onClick={handleinc}>+</button>
                    </td>
                    <td>{item.price}</td>
                    <td>{item.price*item.qty}</td>
                </tr>
            </tbody>
        </table>
    </>
  )
}

export default Table