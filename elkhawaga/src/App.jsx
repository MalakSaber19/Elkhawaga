import { useState } from 'react'

import './App.css'
import NavBar from './components/NavBar/NavBar'
import HeroSection from './components/HeroSection'
import OurServices from './components/OurServices'
import OurBestWorks from './components/OurWork'
import OurBecome from './components/OurBecome'
import OurPricing from './components/OurPricing'
import About from './components/About'
import FAQs from './components/Faq'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact'


function App() {

  return (
    <>
    <NavBar></NavBar>
    <HeroSection></HeroSection>
    <OurServices></OurServices>
    <OurBestWorks></OurBestWorks>
    <OurPricing></OurPricing>
    <OurBecome></OurBecome>
    <About></About>
    <FAQs></FAQs>
    <Contact></Contact>
    <Footer></Footer>

    </>
  )
}

export default App
