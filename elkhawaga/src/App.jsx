import { useState } from 'react'

import './App.css'
import NavBar from './components/NavBar/NavBar'
import HeroSection from './components/HeroSection'
import OurServices from './components/OurServices'
import OurBestWorks from './components/OurWork'


function App() {

  return (
    <>
    <NavBar></NavBar>
    <HeroSection></HeroSection>
    <OurServices></OurServices>
    <OurBestWorks></OurBestWorks>

    </>
  )
}

export default App
