import React from 'react'
import Navbar from './components/Navigation/Navbar';
import './stylesheet/style.css';
import { DarkModeProvider } from './context/DarkModeContext';
import Home from './components/Routes/Home';
import Footer from './components/contents/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Services from './components/Routes/Services';
import Books from './components/Routes/Books';
import Projects from './components/Routes/Projects';
import Contributors from './components/Routes/Contributors';
import Achievements from './components/Routes/Achievements';
import Resume from './components/Routes/Resume';
import About from './components/Routes/About';
import Education from './components/Routes/Education';

const App = () => {
  return (
    <Router>
      <DarkModeProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/books' element={<Books/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contributors' element={<Contributors/>} />
        <Route path='/achievements' element={<Achievements/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/education' element={<Education/>} />
      </Routes>
      </DarkModeProvider>
      <Footer/>
    </Router>
  )
}

export default App;
