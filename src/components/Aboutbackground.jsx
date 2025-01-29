import React from 'react'
import Navbar from './Navbar'
import About from '../assets/forest.png'

const Aboutbackground = () => {
  return (
    <div>
    <div className='' style={{
    backgroundImage:`url(${About})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height:'100vh',
    color :'white'
}} >
    
  <Navbar/>
  <div className='lg:mx-[400px] md:mx-[200px] mx-5 my-[200px] lg:w-[700px] md:w-[500px] w-[300px]'>
  <h3 className='w-[120px] text-center h-[30px] bg-[#c8c6c6] rounded-md'>ADVENTURE</h3>
<h3 className='my-5 lg:text-[50px] md:text-[30px] text-[25px] text-white'>Richird Norton photorealistic rendering as real photos</h3>
  
  <h3>Progressively incentivize cooperative systems through technically
     sound functionalities. The credibly productivate seamless data.</h3>
    <h3 className='my-5 font-bold'>By Jennifer Lawrence.</h3>

  </div>
</div>
</div>
  )
}

export default Aboutbackground
