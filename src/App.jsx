import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Skills from './components/Skills.jsx';


const App = () => {
  return (
    <>
        
        <Router>
          <NavBar/>
            <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/about' element={<About/>}/>
             <Route path='/projects' element={<Projects/>}/>
             <Route path='/contact' element={<Contact/>}/>
             <Route path='/skills' element={<Skills/>}/>
            </Routes>

        </Router>
   </>
  );
};

export default App;