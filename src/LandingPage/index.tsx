import React from 'react'
import Hero from './Hero'
import Features from './Features'
import AboutConcept from './AboutConcept'
import HowItWorks from './HowItWorks'
import Testimonials from './Testimonials'
// import FinalCTA from './FinalCTA'
import Pricing from './Pricing'



const LandingPage = () => {
  return (
    <div className='flex flex-col'>
      <Hero />
      <AboutConcept />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Pricing />
      {/* <FinalCTA /> */}

    </div>
  )
}

export default LandingPage