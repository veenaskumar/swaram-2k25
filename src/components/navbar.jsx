import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/MainLogo/SwaramLogo.png'
import '../stylesheet/navbar.css'
import { Link } from 'react-router-dom'
import Logo1 from '../assets/swaram_videos/logos/rotaract logo grey.png'

const Navbar1 = () => {
    const handleSetActive = (to) => {
        console.log(to);
      };

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar sm:flex sm:justify-between max-w-[1240px]'>
                <a href='/' className='logo flex gap-[3rem]'>
                    <img src={Logo1} alt='logo' className='logo1  object-contain sm:h-[50%] sm:w-[50%] sm:p-[0]'/>
                    <img src={logo} alt=""  className=' logo2 object-contain '/>
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={25} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={25} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item '>
                        <a href='/' onClick={closeMenu} spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onSetActive={handleSetActive}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <Link to={'/sponsers'} onClick={closeMenu} spy={true}
                    smooth={true}
                    offset={-200}
                    duration={500}
                    onSetActive={handleSetActive}>Sponsors</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={'/gallary'} onClick={closeMenu} spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onSetActive={handleSetActive}>Gallery</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to={"/social"} onClick={closeMenu} spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onSetActive={handleSetActive}>Social Activites</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={'/ourteam'} onClick={closeMenu} spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onSetActive={handleSetActive}>Our Team</Link>
                    </li>
                    <li className='nav-item'>
                        <a href='#contact' onClick={closeMenu} spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onSetActive={handleSetActive}>Contact</a>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Navbar1
