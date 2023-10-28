import React from 'react'
import HeroSection from '../components/heroSection'
import Navbar from '../components/navbar'
import GymDetails from '../components/gymDetails'
import './homePage.css'


const HomePage = () => {
  return (
    <div>
      <div class="app__heroBanner">
        <Navbar/>
        <HeroSection/>
      </div>
      <div class="app__gymDetails">
        <GymDetails/>
      </div>
    </div>
  )
}

export default HomePage