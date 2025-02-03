import React from 'react'
import one from '../assets/maninmirrragee.png'
import two from '../assets/maninmirrage.png'


const Editorspickstwo = () => {
  const image = [
        {
            id:1,
            img: one,
            date:'you'  
        },
        {
            id:2,
            img: two,
            date:'you'  
        }
    ]
  return (
    <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-2 md:gap-10 gap-8 my-10 lg:mx-5 md:mx-5 ' >
       {image.map((one) => (
        <div key={one.id}>
             <div className='lg:w-[500px] md:w-[350px] w-[350px] lg:h-[600px] md:h-[500px] h-[550px]  text-white     lg:mx-10 md:mx-10 mx-5' style={
                {
                    backgroundImage: `url(${one.img})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }
             } >
                 <div className='flex gap-2 '>
                 <button className='w-[100px] h-[30px] ml-[120px] mt-5 rounded-md bg-transparent border-2 border-black'>ADVENTURE</button>
                 <button className='w-[80px] h-[30px]  mt-5 rounded-md bg-transparent border-2 border-black'>FASHION</button>
                 </div>
               <div className='pt-20'>
               <h3 className='text-[15px] my-10 pt-5 pl-5'>08.08.2021</h3>
                <h3 className='text-[25px] pl-5 w-[250px] lg:w-[400px] md:w-[300px]'>Richird Norton photorealistic rendering as real photos</h3>
                 <h3 className='text-[15px] py-5 pl-5 w-[250px] '>Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.</h3>
               </div>
             </div>
        </div>
      ))
      }
    </div>
  )
}

export default Editorspickstwo
