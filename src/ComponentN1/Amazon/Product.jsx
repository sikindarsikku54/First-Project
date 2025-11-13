import React from 'react'
import { Link } from 'react-router-dom'

function Product({ item }) {

    let { id,image, rating, price, title } = item

    return (
        <>

            <div className='col-3 mt-3'>
                <Link to={`/Product/${id}`}>
                    <div className='card'>
                        <div className='card-header'>
                            <img src={image} alt="" />
                        </div>
                        <div className='card-body'>
                            <h5 className=''>{title}</h5>
                            <h3>💲{price}</h3>
                            <h3>⭐{rating.rate}</h3>
                        </div>
                    </div>
                </Link>
            </div >
        </>
    )
}

export default Product