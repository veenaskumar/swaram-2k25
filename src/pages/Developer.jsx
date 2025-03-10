import React from 'react'
import Tharun from '../assets/Devs/tharun.jpg'
import Sabareesh from '../assets/Devs/sabareesh.jpg'
import Veenas from '../assets/Devs/veenas.png'
import Navbar1 from '../components/navbar'
import Contact from '../components/contact'
import '../stylesheet/gal.css'
import '../stylesheet/ourteam.css'
function Developer() {
  return (
    <>
    <Navbar1 />
    <h1 className='mt-[10%] text-center text-[red]'>Developers</h1>
    <div className='flex '>

    <div class="col-lg-4 col-md-6  mb-[30px] mt-[50px] ">
                        <div class="card shadow-sm -none bg-transparent ">
                          <div class="card-body px-[40px] flex flex-col justify-center items-center">
                            <div class="user-picture ">
                              <img src={Tharun} class="shadow-sm rounded-circle user-pic-pres" height="140" width="140"/>
                            </div><br /><br /><br />
                            <div class="user-content text-center">
                              <h2 class="text-[white] font-bold sm:text-[18px] text-uppercase ">Tharun Dhanasekar</h2>
                              <p class=" font-semibold text-[#d2d2d2] text-capitalize">IT</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6  mb-[30px] mt-[50px] ">
                        <div class="card shadow-sm -none bg-transparent ">
                          <div class="card-body px-[40px] flex flex-col justify-center items-center">
                            <div class="user-picture ">
                              <img src={Veenas} class="shadow-sm rounded-circle user-pic-pres" height="140" width="140"/>
                            </div><br /><br /><br />
                            <div class="user-content text-center">
                              <h2 class="text-[white] font-bold sm:text-[18px] text-uppercase ">Veenas Kumar S</h2>
                              <p class=" font-semibold text-[#d2d2d2] text-capitalize">AI&DS</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-md-6  mb-[30px] mt-[50px] ">
                        <div class="card shadow-sm -none bg-transparent ">
                          <div class="card-body px-[40px] flex flex-col justify-center items-center">
                            <div class="user-picture ">
                              <img src={Sabareesh} class="shadow-sm rounded-circle user-pic-pres" height="140" width="140"/>
                            </div><br /><br /><br />
                            <div class="user-content text-center">
                              <h2 class="text-[white] font-bold sm:text-[18px] text-uppercase ">Sabareesh R</h2>
                              <p class=" font-semibold text-[#d2d2d2] text-capitalize">IT</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      </div>
    <Contact />
    </>
  )
}

export default Developer