import React, { useEffect, useState } from 'react'
import Error from './Error'
import Loader from './Loader'
import Product from './Product'

function Amazon() {

    let [item,setItem]=useState([]);
    let [error,setError]=useState();
    let [loder,setLoader]=useState(false);

    useEffect(()=>{
        FetchData()
    },[])

    async function FetchData(){
        try{
            setLoader(true);
            let res=await fetch(`https://fakestoreapi.com/products`);
            let data= await res.json();
            setItem(data);
        }
        catch(err){
            setError(err.message)
        }
        finally{
            setLoader(false);
        }
    }

  return (
    <>
        <div className='container-fluid'>
            <section className='row'>
            {
                error && <Error msg={error}/>
            }
            {
                loder && <Loader/>
            }
            {
               !error && !loder && item.map((item)=> <Product item={item} key={item.id}/> )
            }
            </section>
        </div>
    </>
  )
}

export default Amazon