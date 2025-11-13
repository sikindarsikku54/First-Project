import React from 'react'

function Error({msg}) {
  return (
    <>
        <div className='row'>
            <div className='col-4 mt-5 m-auto'>
                <h2>{msg}</h2>
            </div>
        </div>
    </>
  )
}

export default Error