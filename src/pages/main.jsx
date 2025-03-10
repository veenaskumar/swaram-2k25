import React from 'react'
import Home from '../components/Home/home'
import Sponsers from '../components/sponsers' 
import About from '../components/about'
import Gallery from '../components/gallary/gallary_sab'
import Ourteam from '../components/ourteam'
import Quotes from '../components/quotes'
import Contact from '../components/contact' 
import SideWindow from '../components/popup'
import Navbar1 from '../components/navbar'
import Our_thoughts from '../components/our_thoughts'
import Example from '../components/guest/example'
import GuestSlider from '../components/guest/GuestSlider'
function Main() {
  return (
     
      <div className='flex flex-col gap-[2rem]'>
      <Navbar1 />
      {/* <SideWindow /> */}
       <Home />
      <Sponsers />
      <About /><br />
      <Our_thoughts /><br />
      <Gallery />
      <Ourteam />
      {/* <Example /> */}
      {/* <GuestSlider /> */}
      <Quotes />
      <Contact /> 
      </div>

  )
}

export default Main