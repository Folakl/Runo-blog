import React from 'react'
import Pagetwobacground from '../components/Pagetwobacground'
import Navbar2 from '../components/Navbar2'
import Populartopicstwo from '../components/Populartopicstwo'
import Pagetwosecondbackground from '../components/Pagetwosecondbackground'
import Editorspickstwo from '../components/Editorspickstwo'
import Footer from '../components/Footer'

const Adventure = () => {
  return (
    <div>
    
      <Pagetwobacground/>
      <div className='mx-10'>
        <h3 className='text-[30px]'>Popular topics</h3>
     </div>
     <Navbar2/>
     <Populartopicstwo/>
     <Pagetwosecondbackground/>
     <Editorspickstwo/>
      <Footer/>
    </div>
  )
}

export default Adventure
