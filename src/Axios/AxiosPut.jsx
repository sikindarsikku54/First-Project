import React, { useEffect, useState } from 'react'
import Axios from 'axios'

function AxiosPut() {

    let [NewPost, setNewPost] = useState({id:'',title:'',body:''})
    let [PostList,setPostList]=useState([])

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
            let res= await Axios.post('https://jsonplaceholder.typicode.com/users/1',{id:1,})
            console.log(res.data)
            setUser([...user,res.data])
        }
        storedata()
    }

    return (
        <>
            <input type="text" value={NewPost.title} />
            <input type="text" value={NewPost.body}  />
            <input type="submit" value="post"  className='mb-5' onClick={handlesubmit}/>

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
            
        </>
    )
}

export default AxiosPut