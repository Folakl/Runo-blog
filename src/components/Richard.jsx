import React from 'react'
import one from '../assets/one1.png'
import two from '../assets/two2.png'
import three from '../assets/three3.png'

const Richard = () => {
  const blog =[
    {
      id:1,
      img: one
      
    },
    {
      id:2,
      img: three
      
    },
    {
      id:3,
      img: two
      
    }
  ]

  return (
    <div className='bg-[grey] py-[200px]'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-5 md:gap-10 gap-10 my-10 lg:mx-5 md:mx-5 ' >
       {blog.map((image) => (
        <div key={image.id}>
             <div className='lg:w-[400px] md:w-[400px] w-[350px] lg:h-[500px] md:h-[500px] h-[500px]  text-white justify-center lg:mx-10 md:mx-10 mx-5 ' style={
                {
                    backgroundImage: `url(${image.img})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }
             } >
                 <div className='flex gap-5'>
                 <button className='w-[100px] h-[30px] ml-[120px] mt-5 rounded-md bg-transparent border-2 border-black'>ADVENTURE</button>
                 <button className='w-[80px] h-[30px]  mt-5 rounded-md bg-transparent border-2 border-black'>FASHION</button>
                 </div>
               <div className='pt-20 w-[300px]'>
               <h3 className='text-[15px] my-10  pt-10 pl-5'>08.08.2021</h3>
                <h3 className='text-[25px] pl-5'>Richird Norton photorealistic rendering as real photos</h3>
                 <h3 className='text-[15px] py-5 pl-5'>Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.</h3>

               </div>
             </div>
        </div>
      ))
      }
    </div>




     </div>
   
  )
}

export default Richard
