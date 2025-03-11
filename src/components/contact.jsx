import React from "react";
import { useState } from "react";
import "../stylesheet/Contact.css"; // Import your CSS file
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "boxicons/css/boxicons.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Logo from '../assets/MainLogo/SwaramLogo.png'
import { MdEmail } from "react-icons/md";
import { FiYoutube } from "react-icons/fi";
import { Link } from "react-router-dom";


function Contact() {
  return (
    <div id="contact" className=" top-0  w-[100% ]  ">
      <footer className="flex justify-between  ">
        <div className="footer-top w-[100%] flex flex-col gap-[2rem] sm:gap-[1rem] pt-[0] sm:h-[350px] ">
          <div className="container  flex justify-between sm:mt-[-60px] ">
            <div className=" flex justify-around px-[5%] items-center   w-[100%]  sm:flex sm:flex-col-reverse sm:pt-[10px]">
              <div className=" w-[100%]  sm:flex sm:items-center sm:justify-between">
                <h4 className="logo-text text-[red]">
                  <img src={Logo} alt="" height={"120px"} width={"120px"} className="object-cover sm:w-[130px]" />
                </h4><br />
                <p className="sm:hidden o ">The soulful music event of KEC</p>
                <div className="social-icons flex items-center gap-[0.5rem]">
                  <a href="https://www.facebook.com/rcofkec">
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rotaractclub@kongu.ac.in">
                  <div><MdEmail /></div>
                  </a>
                  <a href="https://www.instagram.com/rotaract_club_of_kec/">
                    <i className="bx bxl-instagram"></i>
                  </a>
                  <a href="https://www.youtube.com/@RotaractClubofKEC">
                    <div><FiYoutube /></div>
                  </a>
                </div>
              </div>
              <div className="flex flex-col sm:justify-start  sm:w-[100%]">
                <div className="text-[28px] text-[red] font-semibold sm:text-[18px]">Helpdesk</div>
                <div className="flex flex-col ">
                  <div>
                    <p className="text-[#7e7874] text-[18px] font-semibold sm:text-[16px]">Faculty Coordinator</p>
                    <p className="text-[15px]">Vishnuvardhan K - +91 97916 74174</p>
                  </div>
                  <div className="flex flex-col">
                    <div>
                    <p className="text-[#7e7874] text-[18px] font-semibold sm:text-[16px]">Student Coordiantors</p>
                    </div>
                    <div className="flex gap-[2rem] sm:flex sm:flex-col sm:gap-[0rem] sm:p-[0px]">
                    <p className="text-[15px]">Vishnu Promoth K- +91 91597 77413</p>
                    <p className="text-[15px] ">Santhosh E - +91 97153 74248</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div className="font-semibold text-[14px]"><center>Developed and maintained by <Link to={'/devs'}><span className="text-[red]">KEC</span></Link> </center></div>
        </div>  
      </footer>
    </div>
  );
}

export default Contact;
