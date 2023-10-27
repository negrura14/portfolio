import { useState } from 'react'
import FirstPage from './Components/FirstPage/FirstPage'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio';
import ContactMe from './Components/ContactMe/ContactMe';
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import './App.css'

function App() {
 

  return (
    <>
       <Header/>
       <FirstPage/>
       <About/>
       <Portfolio/>
       <ContactMe/>
       <Footer />
    </>
  )
}

export default App
