import React from 'react'
import Navbar1 from '../components/navbar'
import Contact from '../components/contact'
import '../stylesheet/gal.css'
import NIT from '../assets/SponserLogo/NITIndia.png'
import CoSponser from '../assets/SponserLogo/aramIASAcadamy.png'
import EventSponser1 from '../assets/SponserLogo/Radha ghee logo.jpg'
import EventSponser2 from '../assets/SponserLogo/eroPrints.png'
import EventSponser3 from '../assets/SponserLogo/planet_B.jpg'
import EventSponser4 from '../assets/SponserLogo/deviSounds.jpg'
import Culinary1 from '../assets/SponserLogo/family_time.jpg'
import Culinary2 from '../assets/SponserLogo/srm.png'
import MediaSponser1 from '../assets/SponserLogo/gr_media.png'
import MediaSponser2 from '../assets/SponserLogo/kongufm904erode-radio.jpg'
import MediaSponser3 from '../assets/SponserLogo/SuryanFM.png'
import MediaSponser4 from '../assets/SponserLogo/RCNChannel.png'
import MediaSponser5 from '../assets/SponserLogo/KEC PHOTOGRAPHY CLUB-1 (1).png'
import MediaSponser6 from '../assets/SponserLogo/VenomCreations.png'
function Sponser() {
  return (
    <>
      <Navbar1 className='fixed' />
      <div className='w-[100% ] flex flex-col gap-[2rem]' id='gallary_page_background'>
        <div className='mt-[100px] flex flex-col gap-[5rem] px-[7%] '>
          <div className='flex items-center justify-center flex-col gap-[2rem] '>
            <h1 className='text-[red]'>Title <span className='text-[white]'>Sponsor</span></h1>
            <img src={NIT} alt="" height={"400px"} width={"400px"} className='sm:h-[280px] sm:w-[280px]' />
          </div>
          <div className='flex justify-center flex-col items-center gap-[2rem]'>
            <h1 className='text-[red]'>Co <span className='text-[white]'>Sponsor</span></h1>
            <div>
              <img src={CoSponser} alt="" height={"300px"} width={"300px"} className='sm:h-[230px] sm:w-[230px]' />
            </div>

          </div>
          <div className='row justify-center gap-[3rem] items-center gap-y-[4rem] '>
            <div className='flex flex-col items-center gap-[2rem] w-[100%]'>
              <h1 className='text-[red]'>Event <span className='text-[white]'>Sponsers</span></h1>
              <div className='row justify-center gap-[4rem] items-center gap-y-[4rem] sm:flex sm:flex-col'>
                <div>
                  <img src={EventSponser1} alt="" height={"250px"} width={"250px"} className='p-[2.5rem]' />
                </div>
                <div>
                  <img src={EventSponser2} alt="" height={"250px"} width={"250px"} className='' />
                </div>
                <div>
                  <img src={EventSponser3} alt="" height={"250px"} width={"250px"} className='' />
                </div>
                <div>
                  <img src={EventSponser4} alt="" height={"250px"} width={"250px"} className='' />
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center gap-[2rem] w-[100%]'>
              <h1 className='text-[red]'>Cullinary <span className='text-[white]'>Sponsers</span></h1>
              <div className='row justify-center gap-[4rem] items-center gap-y-[4rem] '>
                <div>
                  <img src={Culinary1} alt="" height={"250px"} width={"250px"} className='' />
                </div>
                <div>
                  <img src={Culinary2} alt="" height={"250px"} width={"250px"} className='p-[3.5rem]' />
                </div>

              </div>
            </div>
            <div className='flex flex-col items-center gap-[2rem] w-[100%]'>
              <h1 className='text-[red]'>Media <span className='text-[white]'>Sponsers</span></h1>
              <div className='row justify-center gap-[4rem] items-center gap-y-[4rem] '>
                <div>
                  <img src={MediaSponser1} alt="" height={"250px"} width={"250px"} className='p-[3.5rem]' />
                </div>
                <div>
                  <img src={MediaSponser6} alt="" height={"250px"} width={"250px"} className='p-[2.5rem]' />
                </div>
                <div>
                  <img src={MediaSponser5} alt="" height={"250px"} width={"250px"} className='' />
                </div>
                <div>
                  <img src={MediaSponser3} alt="" height={"250px"} width={"250px"} className='p-[3rem]' />
                </div>
                <div>
                  <img src={MediaSponser2} alt="" height={"250px"} width={"250px"} className='p-[3.5rem]' />
                </div>
                
                <div>
                  <img src={MediaSponser4} alt="" height={"250px"} width={"250px"} className='' />
                </div>
                
                
              </div>
            </div>

          </div>
        </div>
        <Contact />
      </div>
    </>
  )
}

export default Sponser