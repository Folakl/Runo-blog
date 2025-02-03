import React from 'react'
import facebook from '../assets/Vectorfb.png'
import Ig from '../assets/VectorIg.png'
import youtube from "../assets/Vectoryoutube - Copy.png"
import x from '../assets/VectorX.png'
import pinterest from '../assets/VectorPinterest.png'
import  searchbar from '../assets/Search Line icon PNG and SVG Vector Free Download.jpeg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='py-5 grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1    bg-[#252424] text-white lg:h-[80px] md:h-[80px] h-[150px] '>
        <div className=' font-bold flex justify-start ml-5   ' >
           <h3>RUNO</h3>
        </div>
        <div className=' grid lg:grid-cols-2  md:grid-cols-2 grid-cols-1  gap-8 pr-[50px] '>
        <div className='flex lg:gap-8 md:gap-5 gap-5  ml-5 lg:mt-[10px] md:mt-[10px] mt-5'>
        <Link className='cursor-pointer' to='/'>Home</Link>
        <Link className='cursor-pointer' to='/About'>About</Link>
        <Link className='cursor-pointer' to='/Articles'>Articles</Link>
        <Link className='cursor-pointer' to='/Adventure'>Contact</Link>
        </div>
        <div className='flex  lg:gap-8 md:gap-5 w-1/3 gap-8 lg:mt-[10px] md:mt-[10px] mx-5'>
           <h3>|</h3>
           <img src={facebook} className='w-[20px] h-[20px]' alt="" />
            <img src={x} className='w-[20px] h-[20px]' alt="" />
            <img src={youtube} className='w-[20px] h-[20px]' alt="" />
            <img src={pinterest} className='w-[20px] h-[20px]' alt="" />
            <img src={Ig} className='w-[20px] h-[20px]' alt="" />
            <img src={searchbar} className='w-[20px] h-[20px]' alt="" />
        </div>
       
        </div>
     

      
    </div>
  )
}

export default Navbar
