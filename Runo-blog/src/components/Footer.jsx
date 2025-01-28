import React from 'react'
import facebook from '../assets/Vectorfb.png'
import x from '../assets/VectorX.png'
import ig from'../assets/VectorIg.png'
import youtube from '../assets/Vectoryoutube.png'
import VectorPinterest from '../assets/VectorPinterest.png' 

const Footer = () => {
  return (
   <div>
    <div className='bg-black py-20 text-white px-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  '>
     <div className='my-10'>
      <h3 className='font-bold text-[20px] '>Contact the publisher</h3>
      <h3  className='my-5'>mike@runo.com</h3>
      <h3>+944 450 904 505</h3>

     </div>
     <div className='my-10'>
      <h3  className='font-bold text-[20px] ' >Explorate</h3>
      <h3 className='my-5'>About</h3>
      <h3 className='my-5'>Partners</h3>
      <h3 className='my-5'>Job Opportunities</h3>
      <h3 className='my-5'>Advertise</h3>
      <h3 className='my-5'>Membership</h3>
     </div>
     <div className='my-10'>
      <h3  className='font-bold text-[20px] '>Headquarter</h3>
      <h3 className='my-5'>191 Middleville Road,</h3>
      <h3 className='my-5'>NY 1001, Sydney</h3>
      <h3>Australia</h3>
      </div>
     <div className='my-10'>
        <h3  className='font-bold text-[20px] mb-5'>Connection</h3>
     <div className='flex gap-5'>
     <img src={facebook} alt="fb" className='w-[20px] h-[20px]' />
       <img src={youtube} alt="" className='w-[20px] h-[20px]'  />
       <img src={VectorPinterest} alt="" className='w-[20px] h-[20px]'  />
       <img src={ig} alt="" className='w-[20px] h-[20px]'  />
       <img src={x} alt="" className='w-[20px] h-[20px]'  />
     </div>
        </div>      
    </div>
  {/* Footer Footer */}
   <div className='bg-[#313132] h-[50px] items-center grid grid-cols-2 text-white'>
     <div className='mx-5'>
      <h3>2008| RUNO publishers studio</h3>
     </div>
     <div className='flex justify-end mx-10'>
         <h3>Subscribe Now</h3>      
     </div>
   </div>
    
    </div>
  )
}

export default Footer
