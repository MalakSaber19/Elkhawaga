import { useState } from 'react'
import MainLayout from '../MainLayout'
import OurBecome from '../OurBecome'
import About from '../About'
import FAQs from '../Faq'
import Contact from '../Contact'
import React from 'react'
import HeroSection from '../HeroSection'
import OurServices from '../OurServices'
import OurBestWorks from '../OurWork'
import OurPricing from '../OurPricing'


function Home() {

  return (
    <>
    <MainLayout>
    <HeroSection></HeroSection>
    <OurServices></OurServices>
    <OurBestWorks></OurBestWorks>
    <OurPricing></OurPricing>
    <OurBecome></OurBecome>
    <About></About>
    <FAQs></FAQs>
    <Contact></Contact>
    </MainLayout>

    </>)
}

export default Home
