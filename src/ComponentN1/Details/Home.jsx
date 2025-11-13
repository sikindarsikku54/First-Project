import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className='text-center bg '>
        <h2 className='text-center text-danger '>Welcome To Amazon</h2>
          <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae ad excepturi, odit
            soluta suscipit quidem. Similique nam exercitationem odio iste asperiores ab error magnam sequi facere illo saepe
            molestiae quasi voluptatibus, recusandae excepturi consequatur velit maxime enim?
            Corporis saepe corrupti harum quasi ratione. Maiores totam deserunt laboriosam, sit quibusdam dolorem.</p>

          <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae ad excepturi, odit
          soluta suscipit quidem. Similique nam exercitationem odio iste asperiores ab error magnam sequi facere illo saepe
          molestiae quasi voluptatibus, recusandae excepturi consequatur velit maxime enim?
          Corporis saepe corrupti harum quasi ratione. Maiores totam deserunt laboriosam, sit quibusdam dolorem.</p>

        <Link to="/Amazon" className="btn bg-warning text-center text-white btn-center" >Products</Link>

      </div>
    </>
  )
}

export default Home