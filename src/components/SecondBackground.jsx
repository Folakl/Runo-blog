import React from 'react'
import image2 from "../assets/two.png"


const SecondBackground = () => {
  return (
    <div>
       <div>
                 <div>
                  <div className='text-white text-center' style={{backgroundImage:`url(${image2})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height:'100vh'
                
                }}>
              <div className='my-20'>
              <button className = "w-[80px] h-[30px] rounded-md mt-[200px] bg-[#535377] ">Fashion</button>
                  <div className='pt-[50px]'>
               <h3 className='text-[50px] '>Richird Norton photorealistic <br /> rendering as real photos</h3>
                <h3 className='' >Progressively incentivize cooperative systems through technically sound <br /> functionalities. The credibly productivate seamless data.</h3>
                
                <h3 className='my-5'>______________________</h3>
                <h3 className='text-[15px] my-5'>08-8-2021</h3>
                 </div>
              </div>
              </div>
        
            </div>
    </div>
    </div>
  )
}

export default SecondBackground
