import React from 'react'
import '../stylesheet/ourteam.css';
import Zoom from 'react-reveal/Zoom'
import {Link} from 'react-router-dom'
import Data from '../json/ourteam';
function Ourteam() {
  return (
    <div className='pt-[30px] py-[5%] h-[100%] sm:pt-[20%]  bg-black '>
    <div id='ourteam' className='  flex justify-center flex-col items-center '>
      <div className='text-[28px] font-semibold sm:text-[20px]'>Our <span className='text-[red]'>Team</span></div>
        <section id="cards" className='py-[30px] sm:py-[15px] sm:px-[5%] '>
            <div class="container  ">
                <div class="row gap-y-[2rem]  sm:flex sm:gap-[0px]">
                    <div class="col-lg-4 col-md-6  mb-[50px] mt-[50px] sm:px-[10%] sm:py-[5%] md:w-[100px] md:border lg:border-none ">
                        <div class="card shadow-sm border-0 ">
                            <div class="card-body ">
                                <div class="user-picture ">
                                <img src={Data[1].image} class="shadow-sm rounded-circle user-pic-pres" height="140" width="140"/>
                                </div><br /><br /><br />
                                <div class="user-content text-center">
                                    <h2 class="  text-[black] font-[40px] sm:text-[18px] text-uppercase">{Data[1].name}</h2>
                                    <p class=" text-capitalize text-muted small">{Data[1].position}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-[50px]  mt-[50px] sm:px-[10%] sm:py-[5%] md:w-[100px] md:border lg:border-none ">
                        <div class="card shadow-sm border-0 ">
                            <div class="card-body ">
                                <div class="user-picture ">
                                <img src={Data[2].image} class="shadow-sm rounded-circle user-pic-pres" height="140" width="140"/>
                                </div><br /><br /><br />
                                <div class="user-content text-center">
                                <h2 class="  text-[black] font-[40px] sm:text-[18px] text-uppercase">{Data[2].name}</h2>
                                    <p class=" text-capitalize text-muted small">{Data[2].position}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-[50px] mt-[50px] sm:px-[10%] sm:py-[5%] md:w-[100px] md:border lg:border-none ">
                        <div class="card shadow-sm border-0 ">
                            <div class="card-body ">
                                <div class="user-picture ">
                                <img src={Data[3].image} class="shadow-sm rounded-circle user-pic-pres" height="140" width="140"/>
                                </div><br /><br /><br />
                                <div class="user-content text-center">
                                <h2 class="  text-[black] font-[40px] sm:text-[18px] text-uppercase">{Data[3].name}</h2>
                                    <p class=" text-capitalize text-muted small">{Data[3].position}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-[50px] mt-[50px] sm:px-[10%] sm:py-[5%] md:w-[100px] md:border lg:border-none ">
                        <div class="card shadow-sm border-0 ">
                            <div class="card-body ">
                                <div class="user-picture ">
                                <img src={Data[4].image} class="shadow-sm rounded-circle user-pic-pres" height="140" width="140"/>
                                </div><br /><br /><br />
                                <div class="user-content text-center">
                                <h2 class="  text-[black] font-[40px] sm:text-[18px] text-uppercase">{Data[4].name}</h2>
                                    <p class=" text-capitalize text-muted small">{Data[4].position}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-[50px] mt-[50px] sm:px-[10%] sm:py-[5%] md:w-[100px] md:border lg:border-none ">
                        <div class="card shadow-sm border-0 ">
                            <div class="card-body ">
                                <div class="user-picture ">
                                <img src={Data[5].image} class="shadow-sm rounded-circle user-pic-pres" height="140" width="140"/>
                                </div><br /><br /><br />
                                <div class="user-content text-center">
                                <h2 class="  text-[black] font-[40px] sm:text-[18px] text-uppercase">{Data[5].name}</h2>
                                    <p class=" text-capitalize text-muted small">{Data[5].position}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-[50px] mt-[50px] sm:px-[10%] sm:py-[5%] md:w-[100px] md:border lg:border-none ">
                        <div class="card shadow-sm border-0 ">
                            <div class="card-body ">
                                <div class="user-picture ">
                                <img src={Data[6].image} class="shadow-sm rounded-circle user-pic-pres" height="140" width="140"/>
                                </div><br /><br /><br />
                                <div class="user-content text-center">
                                <h2 class="  text-[black] font-[40px] sm:text-[18px] text-uppercase">{Data[6].name}</h2>
                                    <p class=" text-capitalize text-muted small">{Data[6].position}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Zoom duration={500} delay={200} ><button className='bg-[red] w-[120px] text-center py-[10px] rounded-2xl  hover:font-semibold'>
           <Link to='/ourteam' className='decoration-0 text-white hover:no-underline'>Read More</Link> 
            </button></Zoom>
    </div>
    </div>
  )
}

export default Ourteam