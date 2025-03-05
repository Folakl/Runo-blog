import React from 'react';
import './App.css'
import  Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from '../src/pages/About';
import Adventure from '../src/pages/Adventure';
import Articles from '../src/pages/Articles';

function App() {
  

  return (
    <>
    <div>
     <Router>
     <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/About' element = {<About/>}/>
        <Route path='/Articles' element = {<Articles/>}/>
        <Route path='/Adventure' element = {<Adventure/>}/>
        
        
        
        </Routes> 
      
      </Router>     
    </div>
     
    </>
  )
}

export default App
