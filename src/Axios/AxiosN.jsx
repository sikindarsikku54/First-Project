import React, { useEffect, useState } from 'react'
import Axios from 'axios'

function AxiosN() {

    let [user, setUser] = useState([])
    let [name,setName]=useState({name:""})

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        let res = await Axios.get('https://jsonplaceholder.typicode.com/users')
        setUser(res.data)
        console.log(res)
    }

    function handlesubmit(){
        let storedata= async ()=>{
            let res= await Axios.post('https://jsonplaceholder.typicode.com/users',name)
            console.log(res.data)
            setUser([...user,res.data])
        }
        storedata()
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3 m-auto mt-4">
                        {
                            user.map((item) => {
                                return (<div className="card mt-4">
                                    <div className="card-header text-white text-center bg-warning fw-bold">Axios</div>
                                    <div className="card-body">
                                        <h2>Name:{item.name}</h2>
                                        <h3>Email:{item.email}</h3>
                                    </div>
                                </div>)
                            })
                        }
                    </div>
                </div>
            </div>
            <input type="text" value={name.name} onChange={(e)=>setName({name:e.target.value})} />
            <input type="submit" value="post"  className='mb-5' onClick={handlesubmit}/>
        </>
    )
}

export default AxiosN