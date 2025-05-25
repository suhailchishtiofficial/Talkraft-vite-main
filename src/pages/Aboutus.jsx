import AboutUsSection from '../components/About-us'
import StatsSection from '../components/Animated'
import React from 'react'
import OurClients from '../components/OurClients'
import ServicesSection from '../components/Secondsec'


const Aboutus = () => {
  return (
    <div className='pt-20'>
        <AboutUsSection/>
        <StatsSection/>
        <ServicesSection/>
        <OurClients/>

    </div>
  )
}

export default Aboutus