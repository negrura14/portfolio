import { useState } from 'react'
import FirstPage from './Components/FirstPage/FirstPage'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio';
import ContactMe from './Components/ContactMe/ContactMe'
import './App.css'

function App() {
 

  return (
    <>
       <FirstPage/>
       <About/>
       <Portfolio/>
       <ContactMe/>
    </>
  )
}

export default App
