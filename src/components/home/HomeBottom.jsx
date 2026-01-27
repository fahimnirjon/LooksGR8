import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottom = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-5'>
      <div className='border-2 flex items-center rounded-full border-white uppercase hover:border-lime-300 hover:text-lime-300 px-3'>
        <Link className='text-[6vw]' to='/projects'>Projects</Link>
      </div>
      <div className='border-2 flex items-center rounded-full border-white uppercase hover:border-lime-300 hover:text-lime-300 px-3'>
        <Link className='text-[6vw]' to='/agency'>Agency</Link>
      </div>
    </div>
  )
}

export default HomeBottom
