
import './App.css'
import  Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aboutbackground from './components/Aboutbackground';
import Articlesbackground from './components/Articlesbackground';
import Backgroundone from './components/Backgroundone';
import Blogarticles from './components/Blogarticles';
import BlogArticles2 from './components/BlogArticles2';
import Editorspicks from './components/Editorspicks';
import Editorspickstwo from './components/Editorspickstwo';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2'; 
import Pagetwobacground from './components/Pagetwobacground';
import Pagetwosecondbackground from './components/Pagetwosecondbackground';
import Populartopics from './components/Populartopics';
import Populartopicstwo from './components/Populartopicstwo';
import Relatedpost from './components/Relatedpost';
import Richard from './components/Richard';
import SecondBackground from './components/SecondBackground';
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
