import React from 'react'
import Navbar from '../components/navbar'
import './homePage.css'
import HeroSection from '../components/heroSection'

const HomePage = () => {
  return (
    <div class="app__heroBanner">
      <Navbar/>
      <HeroSection/>
    </div>
  )
}

export default HomePage