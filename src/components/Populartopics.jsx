import React from 'react'
import productone from '../assets/Blog Image (1).jpg'
import producttwo from '../assets/Blog 2.jpg'
import productthree from '../assets/Blog Image (2).jpg'
import productfour from '../assets/megablog.jpg'
import productfive from '../assets/Blog Image (4).jpg'
import productsix from '../assets/Blog Image (5).jpg'
import productseven from '../assets/Blog Image (6).jpg'
import producteight from '../assets/Blog Image (7).jpg'




const Populartopics = () => {
    const topics =[
        {
         id: 1,
         date: '08-10.2025',
         Img: productone,
         heading:"Dream destinations to visit this year in Paris",
         subtopics: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas." 
        },
        {
         id: 2,
         date: '08-10.2025',
         Img: producttwo,
         heading:"Breathtaking first-person photos around Europe",
         subtopics: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas." 
        },
        {
         id: 3,
         date: '08-10.2025',
         Img: productthree,
         heading:"What collectors need to know about authenticity",
         subtopics: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas." 
        },
        {
         id: 4,
         date: '08-10.2025',
         Img: productfour,
         heading:"Instagram artists with great photography skills",
         subtopics: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas." 
        },
        {
         id: 5,
         date: '08-10.2025',
         Img: productfive,
         heading:"Thins to know before visiting Cave in Germany",
         subtopics: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas." 
        },
        {
         id: 6,
         date: '08-10.2025',
         Img: productsix,
         heading:"Nina Smith vibrant work collab with Nike Dunk",
         subtopics: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas." 
        },
        {
         id: 7,
         date: '08-10.2025',
         Img: productseven,
         heading:"Richard Norton photorealistic rendering as real photos",
         subtopics: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas." 
        },
        {
         id: 8,
         date: '08-10.2025',
         Img: producteight,
         heading:"25 quality collectors toys inspired by famous films",
         subtopics: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas." 
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
            <h3 className='text-[30px my-5 font-bold'>{one.heading}</h3>
            <h3 className='text-[10px]'>{one.subtopics}</h3>
        </div>
      ))
      }
      
    
      
    </div>
  )
}

export default Populartopics
