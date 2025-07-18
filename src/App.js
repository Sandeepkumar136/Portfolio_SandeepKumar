import React from 'react'
import Navbar from './components/Navigation/Navbar';
import './stylesheet/style.css';
import { DarkModeProvider } from './context/DarkModeContext';
import Home from './components/Routes/Home';
import Footer from './components/contents/Footer';

const App = () => {
  return (
    <DarkModeProvider>
      <Navbar/>
      <Home/>
      <Footer/>
    </DarkModeProvider>
  )
}

export default App;
