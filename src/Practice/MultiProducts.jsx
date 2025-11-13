import React, { useState } from 'react'

let products = [{
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

function MultiProducts() {
    let [prod, setProd] = useState(products)
    let [show,setShow]=useState(true)

    function handledec(id){
        setProd((prev)=>prev.map((item)=>{
                return(item.id==id?{...item,qty:item.qty-1}:item)
        }))
    }

    function handleinc(id){
        setProd((prev)=>prev.map(item=>{
            if(item.id==id){
                return{...item,qty:item.qty+1}
            }else{
                return item
            }
        }))
    }

    return (
        <>
            <nav>Amazon</nav>
            <h2>Multi Products:-</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quidem deleniti perspiciatis voluptate numquam. Veritatis, temporibus tempora provident blanditiis nesciunt at, odit est nemo consequuntur eius nam ipsa ab! Asperiores sit nostrum non itaque error distinctio tenetur ea, repellat possimus aut, adipisci provident consequatur natus dolorem maxime nisi fugit? Amet!</p>
            <button className='btn btn-sm bg-warning text-center fw-bold' onClick={()=>setShow(!show)}>Products</button>

            {
                 show &&  <table className='table'>
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
                        prod.map((item) => {
                            let {id,name,image,price,qty,}=item
                            return (<tr>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>
                                    <img src={image} alt="" />
                                </td>
                                <td>
                                    <button className='btn btn-danger text-white fw-bold' onClick={()=>handledec(id)}>-</button>
                                    <span>{qty}</span>
                                    <button className='btn btn-success text-white fw-bold' onClick={()=>handleinc(id)}>+</button>
                                </td>
                                <td>{price}</td>
                                <td>{price*qty}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
            }
        </>
    )
}

export default MultiProducts