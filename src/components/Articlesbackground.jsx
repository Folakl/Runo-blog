import React from 'react'
import Article from "../assets/Articles.png"
import Navbar from './Navbar'

const Articlesbackground = () => {
  return (
    <div style={{backgroundImage:`url(${Article})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: "cover",
    height: '90vh'
     }} className=''>
      <Navbar/>
      <div className='flex justify-center my-[200px] '>
      <div className='text-white  lg:w-[600px]  md:w-[600px] w-[400px] text-center'>
      <h3 className='w-[120px] text-center h-[30px] lg:mx-[250px] md:mx-[250px] mx-[50px] bg-[#868484] rounded-md'>ADVENTURE</h3>
       <h3 className='text-[40px] font-bold'>Richird Norton photorealistic rendering as real photos</h3>
        <h3 className='my-5'>Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.</h3>
         <h3 className='font-bold '>By Jennifer Lawrence</h3>
      </div>
      </div>
     
    </div>
  )
}

export default Articlesbackground
