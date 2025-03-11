import React,{ useState }  from 'react'
import Paragraphs from '../components/gallary/GParagraphs'
import GCarsol from '../components/gallary/GCarousel'
import Navbar1 from '../components/navbar';
import '../stylesheet/gal.css'
import LBackground from '../assets/swaram_videos/logos/swaram_original_background.png'
import Contact from '../components/contact';
import PreviousSponsors1 from '../assets/previousSponsors/1.png'
import PreviousSponsors2 from '../assets/previousSponsors/10.png'
import PreviousSponsors3 from '../assets/previousSponsors/2.png'
import PreviousSponsors4 from '../assets/previousSponsors/3.png'
import PreviousSponsors5 from '../assets/previousSponsors/4.png'
import PreviousSponsors6 from '../assets/previousSponsors/5.png'
import PreviousSponsors7 from '../assets/previousSponsors/6.png'
import PreviousSponsors8 from '../assets/previousSponsors/7.png'
import PreviousSponsors9 from '../assets/previousSponsors/8.png'
import PreviousSponsors10 from '../assets/previousSponsors/9.png'
function Gal() {
  const [selectedYear, setSelectedYear] = useState(2018); // Initial selected year state

  const handleButtonClick = (year) => {
    setSelectedYear(year);
  };
  return (
    <div className=''>
    <Navbar1 />
    <div className='flex flex-col gap-[2rem]  ' id='gallary_page_background'>
    <div className='pt-[7%] sm:pt-[10%] '>
    <div className='flex flex-col justify-evenly items-center min-h-screen w-[100%] o mt-[20px] mb-[20px] '>
    <div className='flex justify-evenly min-h-[100%] mb-[30px] min-w-[80%] rounded-20  pt-[10px] pb-[10px] sm:mt-[20px]  w-[100%]'>
    <button className={`hover:bg-red-500 hover:text-[white] text-[#d4d2d2] font-semibold py-2 px-4 rounded-full focus:outline-none transition-all duration-1200 ease-in-out ${selectedYear === 2018 ? 'bg-[red] text-white' : ''}`} onClick={() => handleButtonClick(2018)}>2k18</button>
<button className={`hover:bg-red-500 hover:text-[white] text-[#d4d2d2] font-semibold py-2 px-4 rounded-full focus:outline-none transition-all duration-1200 ease-in-out ${selectedYear === 2019 ? 'bg-[red] text-white' : ''}`} onClick={() => handleButtonClick(2019)}>2k19</button>
<button className={`hover:bg-red-500 hover:text-[white] text-[#d4d2d2] font-semibold py-2 px-4 rounded-full focus:outline-none transition-all duration-1200 ease-in-out ${selectedYear === 2020 ? 'bg-[red] text-white' : ''}`} onClick={() => handleButtonClick(2020)}>2k20</button>
<button className={`hover:bg-red-500 hover:text-[white] text-[#d4d2d2] font-semibold py-2 px-4 rounded-full focus:outline-none transition-all duration-1200 ease-in-out ${selectedYear === 2023 ? 'bg-[red] text-white' : ''}`} onClick={() => handleButtonClick(2023)}>2k23</button>
<button className={`hover:bg-red-500 hover:text-[white] text-[#d4d2d2] font-semibold py-2 px-4 rounded-full focus:outline-none transition-all duration-1200 ease-in-out ${selectedYear === 2024 ? 'bg-[red] text-white' : ''}`} onClick={() => handleButtonClick(2024)}>2k24</button>
    </div>
    <div className='mt-[-2%]  min-w-[100%]    sm:mt-[-10%] ' >
    <GCarsol selectedYear={selectedYear} ></GCarsol>
    </div>
    <div>
    <div className='flex flex-col items-center gap-[2rem] w-[100%]'>
              <h1 className='text-[white]'>Previous <span className='text-[red]'>Sponsers</span></h1>
              <div className='row justify-center gap-[4rem] items-center gap-y-[4rem] sm:flex sm:flex-col'>
                <div>
                  <img src={PreviousSponsors1} alt="" height={"250px"} width={"250px"} className='p-[2.5rem]' />
                </div>
                <div>
                  <img src={PreviousSponsors2} alt="" height={"250px"} width={"250px"} className='p-[2.5rem]' />
                </div>
                <div>
                  <img src={PreviousSponsors3} alt="" height={"250px"} width={"250px"} className='p-[2.5rem]' />
                </div>
                <div>
                  <img src={PreviousSponsors4} alt="" height={"250px"} width={"250px"} className='p-[2.5rem]' />
                </div>
                <div>
                  <img src={PreviousSponsors5} alt="" height={"250px"} width={"250px"} className='p-[2.5rem]' />
                </div>
                <div>
                  <img src={PreviousSponsors6} alt="" height={"250px"} width={"250px"} className='p-[2.5rem]' />
                </div>
                <div>
                  <img src={PreviousSponsors7} alt="" height={"250px"} width={"250px"} className='p-[2.5rem]' />
                </div>
                <div>
                  <img src={PreviousSponsors8} alt="" height={"250px"} width={"250px"} className='p-[2.5rem]' />
                </div>
                <div>
                  <img src={PreviousSponsors9} alt="" height={"250px"} width={"250px"} className='p-[2.5rem]' />
                </div>
                <div>
                  <img src={PreviousSponsors10} alt="" height={"250px"} width={"250px"} className='p-[2.5rem]' />
                </div>
              </div>
            </div>
    </div>
  </div>
  </div>
  </div><br />
  <Contact />
  </div>
  
  )
}

export default Gal