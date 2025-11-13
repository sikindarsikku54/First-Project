import { Alert } from 'bootstrap';
import React, { useState ,useEffect } from 'react'

function Task() {

    let [pass1,setPass1]=useState("");

    let [pass2,setPass2]=useState();

    let [btn,setBtn]=useState({pass1:"",pass2:""})

    let [strcap,setStrcap]=useState(0);

    let [strSml,setStrsml]=useState(0);

    let [strspe,setStrspe]=useState(0);

    function handlepassword(e){
        let value=e.target.value
        setPass1(value)
        letter(value)
    }

    
    function Showalert(pass1,pass2){
        if(pass1==pass2){
            alert("the both are Matching ✅")
        }
        else{
            alert("the both are not Matching ❌")
        }
    }

    function letter(pass1){
            let cap=0; let sml=0; let spe=0;
            for(let i=0;i<pass1.length;i++){
                if(pass1[i]>='A' && pass1[i]<='Z'){
                     cap++
                }
                else if(pass1[i]>='a' && pass1[i]<='z'){
                     sml++
                }
                else{
                    spe++
                }
            }
            setStrcap(cap)
            setStrsml(sml)
            setStrspe(spe)
        }
    

    function submit(e){

        setBtn({pass1,pass2});
        console.log({pass1,pass2});
        setPass1("");
        setPass2("");
        Showalert(pass1,pass2)
    }

    

    
  return (
    <>
        {JSON.stringify(btn)}

        <div className='container-fluid'>
            <div className="row">
                <div className="col-4 m-auto">
                    <div className='card'>
                        <div className="card-header bg-dark text-white text-center">
                        <h2 >Create Password</h2>
                    </div>
                    <div className='card-body'>
                        <input type="text" name="" id="" className='form-control mt-3' value={pass1} onChange={handlepassword} />
                         <h3 className='mt-3'>Atleast 8 Charecters:-{pass1.length>8?"🟢":"🔴"}</h3>
                         <h3  className='mt-3'>Atleast 1 Upper  Charecter:- {strcap>=1?"✅":"⛔"} </h3>
                         <h3  className='mt-3'>Atleast 1 Lower Case:- {strSml>=1?"✅":"⛔"}</h3>
                         <h3  className='mt-3'>Atleast 2 Special Charecter:-{strspe>=1?"✅":"⛔"} </h3>
                        <input type="text" name="" id="" className='form-control mt-3' value={pass2} onChange={(e)=>setPass2(e.target.value)} />
                        <input type="submit" name="" id="" className=' mt-3 btn bg-dark text-white text-center' value='Submit' onClick={submit} />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Task