import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import '../../App.jsx';
import './navbar.css';

import logo from '../../assets/icon.jpg';
import {FaGithub, FaTimes} from 'react-icons/fa';
import {AiOutlineLinkedin, AiOutlineMail} from 'react-icons/ai';
import {GiHamburgerMenu} from 'react-icons/gi';

function Navbar() {
  const [isMobile, setIsMobile] = useState(true);
  return (
    <nav class="site-navbar">
      <div class="logo" id="navbar-logo" onClick={() => setIsMobile(true)}> 
        <HashLink smooth to='/#home'>
          <img class="logo-img"src={logo} alt="logo" height="40"></img>
          <label for="logo-img" class="logo-label">Agnorok Domain</label>
        </HashLink>
      </div>
      <ul class={isMobile ? "navbar-links":"navbar-links-mobile"}
      onClick={() => setIsMobile(true)}>
        <li class="navbar-element"><HashLink smooth to='/#home'>Home</HashLink></li>
        <li class="navbar-element"><HashLink smooth to='/#about'>About</HashLink></li>
        <li class="navbar-element" id="nav-projects-drop"><HashLink smooth to='/#projects'> Projects </HashLink>
          <ul class="dropdown-menu">
            <li class="dropdown-element"><HashLink smooth to='/code/#'>Coding Projects</HashLink></li>
            <li class="dropdown-element"><HashLink smooth to='/art/#'>Art Projects</HashLink></li>
            <li class="dropdown-element"><HashLink smooth to='/thrD/#'>3D Printing and Modeling Projects</HashLink></li>
          </ul>
        </li>
        <li class="navbar-element"><a href="https://github.com/ScarletKnight310/Cagnolatti-Resume-Current/blob/main/src/Cagnolatti_Resume_2022.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
        <li class="navbar-element"><a href="https://github.com/ScarletKnight310" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
        <li class="navbar-element"><a href="https://www.linkedin.com/in/agnorok-domain" target="_blank" rel="noopener noreferrer"><AiOutlineLinkedin /></a></li>
        <li class="navbar-element"><a href="mailto:kcagnolatti@callutheran.edu" target="_blank" rel="noopener noreferrer"><AiOutlineMail /></a></li>
      </ul>
      <button class="navbar-mobile-button"
      onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? 
        (<label className="mobile-button-up"><GiHamburgerMenu/></label>):
        (<i className="mobile-button-down"><FaTimes/></i>)}
      </button>
    </nav>
  )
}

export default Navbar