import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Zoom from 'react-reveal/Zoom';
import VoiceCrowd from '../json/VoiceOfCrowd';

function Quotes() {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 550,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear", 
    
  };
  return (
    <Zoom>
    <div className=' text-black bg-[#1f1f20] sm:py-[5%] '>
      <div>
        <h1 className='text-[28px] font-semibold mt-[50px]  sm:mt-[0rem] sm:px-[20px] text-[white] text-center sm:text-[20px]'>Voice of <span className='text-[red]'> Crowd</span></h1>
        <Slider {...settings} autoplay={true} arrows={false}>
        <div className='w-[100%] flex'>
          <div className=' flex items-center justify-center gap-[3rem]   sm:flex sm:flex-col sm:gap-[1rem] '>
          <div className=' flex flex-col items-center gap-[1rem]  '>
              
              <img src={VoiceCrowd[0].image} alt="" height={"100px"} width={"100px"} className='rounded-full sm:w-[50%] sm:h-[50%] ' style={{animation: "slideInFromLeft 1s ease-in-out"}}/>
              
            <div className='flex flex-col justify-center items-center' >
              <div className='text-white sm:hidden'>{VoiceCrowd[0].name}</div>
              <div className='text-white sm:hidden'>{VoiceCrowd[0].department}</div>
            </div>
          </div>
          <div className='text-[white] md:text-center w-[700px] sm:w-[400px] sm:text-justify sm:px-[5%]'>
            
            {VoiceCrowd[0].description}
            
          </div>
          </div>  
          </div>
          <div className='w-[100%] flex '>
          <div className=' flex items-center justify-center gap-[3rem]  mt-[50px]  sm:flex sm:flex-col sm:gap-[1rem] '>
          <div className=' flex flex-col items-center gap-[1rem]  '>
              
              <img src={VoiceCrowd[1].image} alt="" height={"100px"} width={"100px"} className='rounded-full sm:w-[50%] sm:h-[50%] ' style={{animation: "slideInFromLeft 1s ease-in-out"}}/>
              
            <div className='flex flex-col justify-center items-center' >
              <div className='text-white sm:hidden'>{VoiceCrowd[1].name}</div>
              <div className='text-white sm:hidden'>{VoiceCrowd[1].department}</div>
            </div>
          </div>
          <div className='text-[white] md:text-center w-[700px] sm:w-[400px] sm:text-justify sm:px-[5%]'>
            
            {VoiceCrowd[1].description}
            
          </div>
          </div>  
          </div>
          <div className='w-[100%] flex '>
          <div className=' flex items-center justify-center gap-[3rem]  mt-[50px]  sm:flex sm:flex-col sm:gap-[1rem] '>
          <div className=' flex flex-col items-center gap-[1rem]  '>
              
              <img src={VoiceCrowd[2].image} alt="" height={"100px"} width={"100px"} className='rounded-full sm:w-[50%] sm:h-[50%]' style={{animation: "slideInFromLeft 1s ease-in-out"}}/>
              
            <div className='flex flex-col justify-center items-center' >
              <div className='text-white sm:hidden'>{VoiceCrowd[2].name}</div>
              <div className='text-white sm:hidden'>{VoiceCrowd[2].department}</div>
            </div>
          </div>
          <div className='text-[white] md:text-center w-[700px] sm:w-[400px] sm:text-justify sm:px-[5%]'>
            
            {VoiceCrowd[2].description}
            
          </div>
          </div>  
          </div>
          <div className='w-[100%] flex '>
          <div className=' flex items-center justify-center gap-[3rem]  mt-[50px]  sm:flex sm:flex-col sm:gap-[1rem] '>
          <div className=' flex flex-col items-center gap-[1rem]  '>
              
              <img src={VoiceCrowd[3].image} alt="" height={"100px"} width={"100px"} className='rounded-full sm:w-[50%] sm:h-[50%] ' style={{animation: "slideInFromLeft 1s ease-in-out"}}/>
              
            <div className='flex flex-col justify-center items-center' >
              <div className='text-white sm:hidden'>{VoiceCrowd[3].name}</div>
              <div className='text-white sm:hidden text-uppercase'>{VoiceCrowd[3].department}</div>
            </div>
          </div>
          <div className='text-[white] md:text-center w-[700px] sm:w-[400px] sm:text-justify sm:px-[5%]'>
            
            {VoiceCrowd[3].description}
            
          </div>
          </div>  
          </div>
          <div className='w-[100%] flex '>
          <div className=' flex items-center justify-center gap-[3rem]  mt-[50px]  sm:flex sm:flex-col sm:gap-[1rem] '>
          <div className=' flex flex-col items-center gap-[1rem]  '>
              
              <img src={VoiceCrowd[4].image} alt="" height={"100px"} width={"100px"} className='rounded-full sm:w-[50%] sm:h-[50%] ' style={{animation: "slideInFromLeft 1s ease-in-out"}}/>
              
            <div className='flex flex-col justify-center items-center' >
              <div className='text-white sm:hidden'>{VoiceCrowd[4].name}</div>
              <div className='text-white sm:hidden'>{VoiceCrowd[4].department}</div>
            </div>
          </div>
          <div className='text-[white] md:text-center w-[700px] sm:w-[400px] sm:text-justify sm:px-[5%]'>
            
            {VoiceCrowd[4].description}
            
          </div>
          </div>  
          </div>
        </Slider>
      </div>
    </div>
    </Zoom>
  );
}

export default Quotes