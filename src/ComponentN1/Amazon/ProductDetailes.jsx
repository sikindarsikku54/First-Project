import React, { useEffect, useState } from 'react'
import { useParams ,Link } from 'react-router-dom'

function ProductDetailes() {

    let [items,setItems]=useState({image:"",title:"",price:"",rating:""})

    let obj=useParams();
    console.log(obj.id);

    useEffect(()=>{
        FetchData()
    },[])

    async function FetchData(){
        let res=await fetch(`https://fakestoreapi.com/products/${obj.id}`);
            let data= await res.json();
            setItems(data);
    }

    return (
        <>
            <h2 className=' text-danger mt-4'>Product Details:-</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis tempora officia molestias laborum debitis omnis ut voluptatum
                dignissimos asperiores, accusamus quod et iure voluptate nostrum voluptatem eaque non, sit sapiente
                modi eos nesciunt dolores! Laborum expedita ad iusto, est,
                reprehenderit, laudantium repudiandae recusandae necessitatibus incidunt provident deleniti nulla illo iste.</p>


            <div className='container-fluid'>
                <div className='row mt-4 m-auto'>
                    <div className='col-3'>
                        <div className='card'>
                            <div className='card-header'>
                                <img src={items.image} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='col-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <h5>{items.title}</h5>
                                <h3>💲{items.price}</h3>
                                <h3>⭐{items.rating.rate}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/Amazon" className='btn bg-info text-white text-center fw-bold mt-4 ml-3 ms-4'>Back to Products</Link>
        </>
    )
}

export default ProductDetailes