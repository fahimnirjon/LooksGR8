import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottom = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-3'>
      <Link className='text-[6.5vw] uppercase border-2
       border-white rounded-full px-6 pt-2 leading-[6vw] '>Projects</Link>
      <Link className='text-[6.5vw] uppercase border-2
       border-white rounded-full px-6 pt-2 leading-[6vw] '>Agency</Link>
    </div>
  )
}

export default HomeBottom
