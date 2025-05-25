import ServicesSection from '../components/Secondsec'
import HeroSection from '../components/HeroSection'
import React from 'react'
import AboutUsSection from '../components/About-us'
import StatsSection from '../components/Animated'
import OurServices from '../components/OurServices'
import Project from '../components/Projects'
import AnimatedTestimonialsDemo from '../components/Testimonial'
import OurClients from '../components/OurClients'
import Blog from './Blog'

const Homepage = () => {
  return (
    <div>
     <HeroSection/>
     <ServicesSection/>
     <AboutUsSection/>
     <StatsSection/>
     <OurServices/>
     <Project/>
     <OurClients/>
     <AnimatedTestimonialsDemo/>
     <Blog/>
    </div>
  )
}

export default Homepage