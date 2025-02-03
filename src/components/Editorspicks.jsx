import React from 'react'
import one from '../assets/megablog.jpg'
import two from '../assets/megablog.jpg'
import  three from '../assets/megablog.jpg'

const Editorspicks = () => {
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
        },
        {
            id:3,
            img: three,
            date:'you' 
        }
    ]
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-5 md:gap-5 gap-8 my-10 mx-5' >
       {image.map((one) => (
        <div key={one.id}>
             <div className='lg:w-[350px] md:w-[350px] w-[350px] lg:h-[350px] md:h-[350px] h-[350px]  text-white ' style={
                {
                    backgroundImage: `url(${one.img})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }
             } >
                <button className='w-[80px] h-[30px] mx-[250px] mt-5 rounded-md bg-transparent border-2 border-black'>Fashion</button>
                <h3 className='text-[15px] my-10 pt-5 pl-5'>08.08.2021</h3>
                <h3 className='text-[25px] pl-5'>Richird Norton photorealistic rendering as real photos</h3>
                 <h3 className='text-[15px] py-5 pl-5'>Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.</h3>
             </div>
        </div>
      ))
      }
    </div>
  )
}

export default Editorspicks
