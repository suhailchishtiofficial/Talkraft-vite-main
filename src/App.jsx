import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Aboutus from './pages/Aboutus'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Project from './components/Projects'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TAC from './pages/TAC'
import FAQ from './pages/FAQ'
import Help from './pages/help'
import Seo from './pages/Seo'
import Web from './pages/Web'
import Social from './pages/Social'
import Email from './pages/Email'
import Facebook from './pages/Facebook' // Add this import  
import Branding from './pages/Branding' // Add this import
import WhatsappButton from './components/ui/whatsapp'
import AllClients from './pages/AllClients'
import Career from './pages/Career'
import { Cookie } from 'lucide-react'
import Cookies from './pages/Cookies'
import Blog from './pages/Blog'



const App = () => {
  return (
    <div>
       <Navbar/>
        <Routes>
           <Route path="/" element={<Homepage />} />
           <Route path="/user/about-us" element={<Aboutus />} />
           <Route path='/user/services' element={<Services />} />
           <Route path="/user/projects" element={<Project />} />
           <Route path="/user/contact" element={<Contact />} />
           <Route path="/privacy-policy" element={<PrivacyPolicy />} />
           <Route path="/terms-and-conditions" element={<TAC />} />
           <Route path="/faq" element={<FAQ />} />
           <Route path="/help" element={<Help />} />
           <Route path="/services/seo-optimization" element={<Seo />} />
           <Route path="/services/web-design" element={<Web />} />
           <Route path="/services/social-media-marketing" element={<Social />} />
           <Route path="/services/email-marketing" element={<Email />} />
           <Route path="/services/facebook-google-ads" element={<Facebook />} /> {/* <-- Added Facebook & Google Ads path */}
           <Route path="/services/branding" element={<Branding />} /> {/* <-- Added Branding path */}
           <Route path="/all-clients" element={<AllClients />} />
           <Route path='/career' element={<Career/>}/>
           <Route path='/cookies' element={<Cookies/>}/>
           <Route path='/blog' element={<Blog/>}/>
        </Routes>
        
      <Footer/>
      <WhatsappButton/>
    </div>
  )
}

export default App