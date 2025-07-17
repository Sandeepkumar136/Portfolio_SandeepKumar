import React from 'react'
import Navbar from './components/Navigation/Navbar';
import './stylesheet/style.css';
import { DarkModeProvider } from './context/DarkModeContext';

const App = () => {
  return (
    <DarkModeProvider>
      <Navbar/>
    </DarkModeProvider>
  )
}

export default App;
