import React from 'react'

const Navbar2 = () => {
  return (
    <div className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-2 my-5 gap-2'>
      <div className='grid lg:grid-cols-6 md:grid-cols-3   grid-cols-1 ml-5'>
        <h3 className='cursor-pointer text-[orange] text-[20px]'>All</h3>
        <h3 className='cursor-pointer text-[20px]'> Adventure</h3>
        <h3 className='cursor-pointer text-[20px]'>Travel</h3>
        <h3 className='cursor-pointer text-[20px]'>Fashion</h3>
        <h3 className='cursor-pointer text-[20px]'>Technology</h3>
        <h3 className='cursor-pointer text-[20px]'>Branding</h3>
      </div>
      <div className='flex justify-end mx-10'>
        <h3 className='cursor-pointer text-[20px]'>View all</h3>
      </div>  
    </div>
  )
}

export default Navbar2
