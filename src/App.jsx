import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/workflow'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import ContactUs from './components/ContactUs'
import Contact  from './components/Contact'
import Faqs from './components/Faqs'

export const App = () => {
  return (
    <div className='px-6'>
    <Navbar />
    <div className="max-w-7xl mx-auto pt-20 mt-20 lg:mt-20 mb-10">
      <HeroSection />
      <AboutUs />
      <Services />
      <FeatureSection />
      <Workflow />
      <Testimonials />
      <ContactUs />
      <Contact />
      <Faqs />
      <Footer />
    </div>
  </div>
  )
}
export default App