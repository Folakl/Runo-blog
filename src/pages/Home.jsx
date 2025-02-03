import React from 'react'
import Navbar2 from '../components/Navbar2'
import Backgroundone from '../components/Backgroundone'
import Populartopics from '../components/Populartopics'
import SecondBackground from '../components/SecondBackground'
import Editorspicks from '../components/Editorspicks'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-100vw'>

     <Backgroundone/>
      <div className='mx-10'>
        <h3 className='text-[30px] pt-5'>Popular topics</h3>
      </div>
      <Navbar2/>
      <Populartopics/>
      <SecondBackground/>
      <h3 className='text-[30px] my-3 mx-5'>Editors picks</h3>
      <Editorspicks/>
      <Footer/>
 
     

       
    </div>
  )
}

export default Home
