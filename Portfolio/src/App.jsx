import { useState } from 'react'
import Hero from './Components/Hero/Hero'
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
       <Hero/>
       <About/>
       <Portfolio/>
       <ContactMe/>
       <Footer />
    </>
  )
}

export default App
