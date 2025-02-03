import React from 'react'
import productone from '../assets/Blog Image (1).jpg'
import Bikini from '../assets/Bikini and hat.png'
import productthree from '../assets/Valley.png'
import productfour from '../assets/Corner.png'
import productfive from '../assets/Solopic.png'

import productsix from '../assets/Iceland.png'
import producteight from '../assets/Sealand.png'
import Roses from '../assets/roses.png'
import Jennifer from '../assets/Ellipse 4 (1).png'
import sarah from '../assets/Ellipse 4 (3).png'
import thomas from '../assets/Ellipse 4 (4).png'
import david from '../assets/david.png'
import andrey from '../assets/Ellipse 4 (6).png'
import sean from '../assets/Ellipse 4 (7).png'




const Populartopicstwo = () => {
    const topics =[
        {
         id: 1,
         date: '08-10.2025',
         Img: productone,
         heading:"Dream destinations to visit this year in Paris",
         subtopics: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.", 
         img2:Jennifer,
         heading2:"By Jennifer Lawrence",
         subheading:"Thinker & Designer"   
        },
        {
         id: 2,
         date: '08-10.2025',
         Img: Roses,
         heading:"Richird Norton photorealistic rendering as real photos",
         subtopics: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas." ,
         img2:david,
         heading2:"By David Arthur",
         subheading:"Designer"
        },
        {
         id: 3,
         date: '08-10.2025',
         Img: Bikini,
         heading:"Dream destinations to visit this year in Paris",
         subtopics: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
         img2:Jennifer,
         heading2:"By Sarah Lawrencee",
         subheading:"Journalist"
        },
        {
         id: 4,
         date: '08-10.2025',
         Img: productthree,
         heading:"Dream destinations to visit this year in Paris",
         subtopics: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
         img2:sean,
         heading2:"By Jennifer Lawrence",
         subheading:"Thinker & Designer" 
        },
        {
         id: 5,
         date: '08-10.2025',
         Img: productfour,
         heading:"Art of Seasons: 40+ Bright Illustrations by Nature",
         subtopics: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas." ,
         img2:andrey,
         heading2:"By David Tomas",
         subheading:"Thinkers"
        },
        {
         id: 6,
         date: '08-10.2025',
         Img: productfive,
         heading:"The Anatomy of a Web Page and Basic Elements",
         subtopics: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
         img2:thomas,
         heading2:"By Jennifer Lawrence",
         subheading:"Thinker & Designer"
        },
        {
         id: 7,
         date: '08-10.2025',
         Img: productsix,
         heading:"Types of Contrast in User Interface Design",
         subtopics: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
         img2:sarah,
         heading2:"By Andrey Edison",
         subheading:"Thinker & Designer"
        },
        {
         id: 8,
         date: '08-10.2025',
         Img: producteight,
         heading:"Dream destinations to visit this year in Paris",
         subtopics: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
         img2:Jennifer,
         heading2:"By Sean Anderson",
         subheading:"Thinker & Designer" 
        }
    ]
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mx-5 my-5'>
      {topics.map((one) => (
        <div
        key={one.id}>
            <img src = {one.Img} 
            alt={one.heading}
            className='h-[350px] w-[350px] rounded-md' />
            <h3 className='text-[10px] my-3'>{one.date}</h3>
            <h3 className='text-[15px] my-5 font-bold'>{one.heading}</h3>
            <h3 className='text-[10px]'>{one.subtopics}</h3>
            <div className=' flex mt-10'>
            <img src={Jennifer} alt="" className='py-3' />
            <div className='ml-5 py-3'>
                <h3>{one.heading2}</h3>
                <h3>{one.subheading}</h3>
            </div>

            </div>
        </div>
      ))
      }
      
    
      
    </div>
  )
}

export default Populartopicstwo