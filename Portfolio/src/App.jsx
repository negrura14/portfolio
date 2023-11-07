import { useState } from 'react'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio';
import ContactMe from './Components/ContactMe/ContactMe';
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Skills from "./Components/Skills/Skills";
import ButtonBack from "./Components/ButtonBack/ButtonBack"
import './App.css'

function App() {
 

  return (
    <div>
       <Header/>
       <Hero/>
       <About/>
       <Skills />
       <Portfolio/>
       <ContactMe/>
       <Footer />
       <ButtonBack />
    </div>
  )
}

export default App
