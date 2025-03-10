import Navbar1 from "../components/navbar.jsx";
import React, { useRef } from "react";
import Slider from "react-slick";
import { TiTick } from "react-icons/ti";
import Contact from '../components/contact';
import { Zoom, Fade } from 'react-reveal';
import Image1 from '../assets/resized-SocailActivites/KonguConventionalCenter1.jpeg'
import Image2 from '../assets/resized-SocailActivites/6F5B8657.jpeg'
import Image3 from '../assets/resized-SocailActivites/DJI_0005.jpeg'
import YearImage1 from '../assets/YearImagesSocialActivites/2k14.png'
import YearImage2 from '../assets/YearImagesSocialActivites/2k15.png'
import YearImage3 from '../assets/YearImagesSocialActivites/2k16.png'
import YearImage4 from '../assets/YearImagesSocialActivites/2k17.png'
import YearImage5 from '../assets/YearImagesSocialActivites/2k18.png'
import YearImage6 from '../assets/YearImagesSocialActivites/2k19.png'
import YearImage7 from '../assets/YearImagesSocialActivites/2k20-2.jpg'

function Social_activities() {
  const sliderRef = useRef(null);

  const play = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  };

  const pause = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPause();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className=' pt-[90px] flex flex-col gap-[5rem]  sm:gap-0 bg-[#252424]'>
      <Navbar1 />
      <div  >
        <Slider ref={sliderRef} {...settings} arrows={false} className='min-h-[40vh] ' >
          <div className='relative sm:min-w-[100%] sm:m-0 sm:p-0'>
            <img src={Image1} alt="" className='min-w-[100%] h-[50vh] sm:h-[30vh] object-cover brightness-[70%]' />
            <div className='absolute top-[40%] w-[100%]'>
              <h1 className=' text-center text-wrap sm:text-[18px] sm:px-[5%] text-capitalize'>India's second Largest Indoor auditorium with state of the art facilities</h1>
            </div>
          </div>
          <div className='relative sm:min-w-[100%] sm:m-0 sm:p-0 '>
            <img src={Image2} alt="" className='min-w-[100%]  h-[50vh]  sm:h-[30vh] object-cover brightness-50' />
            <div className='absolute top-[40%] w-[100%]'>
              <h1 className=' text-center text-wrap sm:text-[18px] sm:px-[5%] text-capitalize'>Spread over 8 acres with build up area of 2Lakhs Sq.Ft</h1>
            </div>
          </div>
          <div className='relative sm:min-w-[100%] sm:m-0 sm:p-0'>
            <img src={Image3} alt="" className='min-w-[100%]  h-[50vh] sm:h-[30vh] object-cover brightness-50' />
            <div className='absolute top-[40%] w-[100%]'>
              <h1 className=' text-center text-wrap sm:text-[18px] sm:px-[5%] text-capitalize'>Magnanimous seating capacity of 5500 people with provisions for 2000 extra seatings</h1>
            </div>
          </div>
        </Slider>
      </div>
      <div className='flex flex-col gap-[5rem]  items-center'>
        <Zoom duration={1000} delay={500}>
          <div>
            <h1 className='sm:text-[18px]'>Accomplishments of <span className="text-[red]">SWARAM</span></h1>
          </div>
        </Zoom>

        <div className='w-[100%] flex flex-col gap-[3rem] px-[5%]'>
          <Fade duration={1000} delay={200} left >
            <div className='flex justify-around items-center sm:flex-col sm:gap-[1rem]  sm:text-[14px]  '>
              <div>
                <img src={YearImage6} alt="" className='w-[400px] rounded-2xl' />
              </div>
              <div>
                <ul >
                  {/** 2023 */}

                  <li className='flex items-center gap-3'><TiTick size={25} color='red' />Distributed 1000 tree saplings during 2019.</li>
                  <li className='flex items-center gap-3'><TiTick size={25} color='red' />Donated Roof top fans to Old Age homes.</li>
                  <li className='flex items-center gap-3'><TiTick size={25} color='red' />Donated basic needs to orphanages.</li>
                  <li className='flex items-center gap-3'><TiTick size={25} color='red' className='sm:size-[40px]' />Donated Text books to government schools all over Erode and Perundurai.</li>
                </ul>
              </div>
            </div>
          </Fade>
          <Fade duration={1000} delay={200} right>
            <div className='flex md:flex-row-reverse justify-around items-center  sm:flex-col sm:gap-[1rem] sm:text-[14px]'>
              <div>
                <img src={YearImage2} alt="" className='w-[400px] rounded-2xl ' />
              </div>
              <div>
                <ul className="">
                  {/** 2018 */}
                  <li className='flex items-center gap-3'><TiTick size={25} color='red' className='sm:size-[40px]' /><div>Donated <span className="text-[red] font-semibold">COLPOSCOPY DEVICE</span> for Cancer Treatment at IRTT Hospital,<br />Perundurai worth 2 Lakhs during 2018.</div></li>
                  <li className='flex items-center gap-3'><TiTick size={25} color='red' />Distributed 1000 tree saplings to the pubic.</li>
                  <li className='flex items-center gap-3'><TiTick size={25} color='red' className='sm:size-[40px]' />Donated Text books to government schools all over Erode and Perundurai.</li>
                </ul>
              </div>
            </div>
          </Fade>
          <Fade duration={1000} delay={200} left>
            <div className='flex justify-around items-center sm:flex-col sm:gap-[1rem]  sm:text-[14px]   '>
              <div>
                <img src={YearImage3} alt="" className='w-[400px] rounded-2xl' />
              </div>
              <div>
                <ul >
                  {/** 2017 */}
                  <li className='flex items-center gap-3'><TiTick size={25} color='red' />Distributed 1000 tree saplings for environment awareness during 2017.</li>
                  <li className='flex items-center gap-3'><TiTick size={25} color='red' />Conducted organ donation awareness camp.</li>
                  <li className='flex items-center gap-3'><TiTick size={25} color='red' />Vastara Dhanam to orphanages.</li>
                  <li className='flex items-center gap-3'><TiTick size={25} color='red' />Donated 2.5 lakhs for nearly 15 Government Schools in & <br /> around Perundurai to fulfill their basic needs.</li>
                </ul>
              </div>
            </div>
          </Fade>
          <Fade duration={1000} delay={200} right>
            <div className='flex justify-around md:flex-row-reverse items-center sm:flex-col sm:gap-[1rem] sm:text-[14px] '>
              <div>
                <img src={YearImage4} alt="" className='w-[400px] rounded-2xl' />
              </div>
              <div>
                <ul >
                  {/** 2016 */}
                  <li className='flex items-center gap-3'><TiTick size={25} color='red' />Conducted Free Eye Camp benefit of needy.</li>
                  <li className='flex items-center gap-3'><TiTick size={25} color='red' />Vasthra Dhanam to Orphanages during 2016.</li>
                  <li className='flex items-center gap-3'><TiTick size={25} color='red' />Created Public Awareness for Organ Donation.</li>
                  <li className='flex items-center gap-3'><TiTick size={25} color='red' />Donated 2.55 Lakhs for Open Heart Surgery to NGO.</li>
                </ul>
              </div>
            </div>
          </Fade>
          <Fade duration={1000} delay={200} left>
            <div className='flex justify-around items-center sm:flex-col sm:gap-[1rem] sm:text-[14px] '>
              <div>
                <img src={YearImage5} alt="" className='w-[400px] rounded-2xl' />
              </div>
              <div>
                <ul >
                  {/** 2015 */}
                  <li className='flex items-center  gap-3'><TiTick size={25} color='red' />Distributed 1000 tree saplings during 2015.</li>
                  <li className='flex items-center gap-3'><TiTick size={25} color='red' />Provided RO water purifiers to Schools.</li>
                  <li className='flex items-center gap-3'><TiTick size={25} color='red' />Provided motors to old age homes.</li>
                  <li className='flex items-center gap-3'><TiTick size={25} color='red' />Donated basic needs to Idhayam Trust, Erode.</li>
                  <li className='flex items-center gap-3'><TiTick size={25} color='red' />Eye Camp has been held for the benefit of needy.</li>
                  <li className='flex items-center gap-3'><TiTick size={25} color='red' />Installed UPS in Government Schools.</li>
                </ul>
              </div>
            </div>
          </Fade>
          <Fade duration={1000} delay={200} left>
            <div className='flex md:flex-row-reverse justify-around items-center  sm:flex-col sm:gap-[1rem] sm:text-[14px]'>
              <div>
                <img src={YearImage1} alt="" className='w-[400px] rounded-2xl' />
              </div>
              <div>
                <ul >
                  {/** 2014 */}
                  <li className='flex items-center gap-3'><TiTick size={25} color='red' className='sm:size-[40px]' />Improving facilities in Government School to be on par with private schools, <br />set up RO water purifiers and improving sanitation facilities and installed libraries.</li>
                  <li className='flex items-center gap-3'><TiTick size={25} color='red' className='sm:size-[50px]' />To uplift the living standards of rag-pickers community and to help them fulfill their essentials.</li>
                </ul>
              </div>
            </div>
          </Fade>
          <Fade duration={1000} delay={200} left>
            <div className='flex justify-around items-center sm:flex-col sm:gap-[1rem] sm:text-[12px] sm:justify-start sm:items-start '>
              <div>
                <img src={YearImage7} alt="" className='w-[400px] rounded-2xl' />
              </div>
              <div>
                <ul >
                  {/** 2013 */}
                  <li className='flex items-center gap-3 sm:w-[90%] '><TiTick size={25} color='red' className='sm:size-[40px]' />Government Schools in and around Erode were provided with utensils,<br /> water tanks, sports articles and computer accessories.</li>
                  <li className='flex items-center gap-3 sm:w-[90%] '><TiTick size={25} color='red' className='sm:size-[40px]' />
                    Erode Arima Trust School was provided with supporting accessories for physically<br /> challenged people.
                  </li>
                  <li className='flex items-center gap-3 sm:w-[90%] '><TiTick size={25} color='red' className='sm:size-[40px]' />WJ Welfare Trust, Perundurai was provided with mats, pillow and bed.</li>
                  <li className='flex items-center gap-3 sm:w-[90%]'><TiTick size={25} color='red' className='sm:size-[40px]' />Donated Text books to government schools all over Erode and Perundurai.</li>
                </ul>
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <Contact />
    </div>

  )
}

export default Social_activities

