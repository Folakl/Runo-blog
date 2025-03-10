import React from 'react'
import background from '../assets/1of2.png'
import Navbar from './Navbar'

const Backgroundone = () => {
  return (
    <div>
        <div className='' style={{
        backgroundImage:`url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height:'100vh',
        color :'white'
    }} >
        
      <Navbar/>
      <div className='lg:mx-10 md:mx-5 mx-5 px-5 text-wrap     my-[150px] lg:w-[700px] md:w-[500px] w-[350px]'>
      <h3 className='w-[120px] text-center h-[30px] bg-[#c8c6c6] rounded-md'>ADVENTURE</h3>
    <h3 className='my-5 lg:text-[50px] md:text-[50px] text-[30px] text-white'>Richird Norton photorealistic rendering as real photos</h3>
    <div className='flex'>
      <h3>08.08.2021</h3>
      <h3>________</h3>
      <h3 className='px-2'>Progressively incentivize cooperative systems through technically
         sound functionalities. The credibly productivate seamless data.</h3>
    </div>
      </div>
    </div>
    </div>
  )
}

export default Backgroundone
