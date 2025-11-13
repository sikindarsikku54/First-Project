import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function AmazonN() {

    let [items, setItems] = useState([]);

    async function fetchData() {
        let getdata = await fetch(`https://fakestoreapi.com/products`)
        let data = await getdata.json();
        console.log(data)
        setItems(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {
                        items.map((item) => {
                            return (
                                <div className="col-3 mt-3">
                                    <Link to={`AmazonN/${id}`}>
                                        <div className="card">
                                            <div className="card-header">
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className="card-body">
                                                <h2>{item.price}</h2>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default AmazonN