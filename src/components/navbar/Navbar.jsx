import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.jsx';
import './navbar.css';

import logo from '../../assets/icon.jpg';
import {FaGithub} from 'react-icons/fa';
import {AiOutlineLinkedin, AiOutlineMail} from 'react-icons/ai';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
function Navbar() {
  return (
    <nav class="site-navbar">
      <div class="logo" id="navbar-logo"> 
        <Link to="/">
          <img class="logo-img"src={logo} alt="logo" height="40"></img>
          <label for="logo-img" class="logo-label">Agnorok Domain</label>
        </Link>
      </div>
      <ul class="navbar-links">
        <li class="navbar-element"><Link to="/">Home</Link></li>
        <li class="navbar-element"><a href="#about">About</a></li>
        <li class="navbar-element" id="nav-projects-drop"><a href="#projects">Projects <MdOutlineKeyboardArrowDown/></a>
          <ul class="dropdown-menu">
            <li class="dropdown-element"><Link to="/code">Coding Projects</Link></li>
            <li class="dropdown-element"><Link to="/art">Art Projects</Link></li>
            <li class="dropdown-element"><Link to="/thrD">3D Printing and Modeling Projects</Link></li>
          </ul>
        </li>
        <li class="navbar-element"><a href="https://github.com/ScarletKnight310/Cagnolatti-Resume-Current/blob/main/src/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
        <li class="navbar-element"><a href="https://github.com/ScarletKnight310" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
        <li class="navbar-element"><a href="https://www.linkedin.com/in/agnorok-domain" target="_blank" rel="noopener noreferrer"><AiOutlineLinkedin /></a></li>
        <li class="navbar-element"><a href="mailto:kcagnolatti@callutheran.edu" target="_blank" rel="noopener noreferrer"><AiOutlineMail /></a></li>
      </ul>
    </nav>
  )
}

export default Navbar