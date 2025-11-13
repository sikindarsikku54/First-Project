import React, { useReducer, useState } from 'react'


function Reducer() {

    let initialState = [{
        id: 101,
        name: "Nokia",
        image: "",
        qty: 1,
        price: 50000
    },
    {
        id: 102,
        name: "Iphone",
        image: "",
        qty: 1,
        price: 70000
    },
    {
        id: 103,
        name: "Sumsung",
        image: "",
        qty: 1,
        price: 90000
    },
    {
        id: 104,
        name: "Geogle",
        image: "",
        qty: 1,
        price: 40000
    }]

    function Reduce(state,action){
        switch(action.type){
            case ("inc_qty"):
                return (state.map((item)=>{
                  return  item.id==action.id?{...item,qty:item.qty+1}:item
                }))
            case ("dec_qty"):
                return (state.map((item)=>{
                  return  item.id==action.id?{...item,qty:item.qty>1 ? item.qty-1:1}:item
                }))
            default: return state        
        }
    }

    let [value,dispatch]=useReducer(Reduce,initialState)

    return (
        <>
            <nav>Amazon</nav>
            <h2>Multi Products:-</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quidem deleniti perspiciatis voluptate numquam. Veritatis, temporibus tempora provident blanditiis nesciunt at, odit est nemo consequuntur eius nam ipsa ab! Asperiores sit nostrum non itaque error distinctio tenetur ea, repellat possimus aut, adipisci provident consequatur natus dolorem maxime nisi fugit? Amet!</p>
            <button className='btn btn-sm bg-warning text-center fw-bold' >Products</button>

            {
                <table className='table'>
                    <thead>
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
                        {
                            value.map((item) => {
                                let { id, name, image, price, qty, } = item
                                return (<tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>
                                        <img src={image}  />
                                    </td>
                                    <td>
                                        <button className='btn btn-danger text-white fw-bold' onClick={() => dispatch({type:"inc_qty",id:id})}>+</button>
                                        <span>{qty}</span>
                                        <button className='btn btn-success text-white fw-bold'onClick={() => dispatch({type:"dec_qty",id:id})} >-</button>
                                    </td>
                                    <td>{price}</td>
                                    <td>{price * qty}</td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            }
        </>
    )
}

export default Reducer