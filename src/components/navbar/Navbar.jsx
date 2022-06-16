import React from 'react';
import {Link} from 'react-router-dom';

import './navbar.css';
import logo from '../../assets/icon.jpg'
import {FaGithub} from 'react-icons/fa';
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai';

function Navbar() {
  return (
    <nav class="site-navbar">
      <div class="logo" id="navbar-logo"> 
        <a href="#home">
          <img class="logo-img"src={logo} alt="logo" height="40"></img>
          <label for="logo-img" class="logo-label">Agnorok Domain</label>
        </a>
      </div>
      <ul class="navbar-links">
        <li class="navbar-element"><a href="#home">Home</a></li>
        <li class="navbar-element"><a href="#about">About</a></li>
        <li class="navbar-element"><a href="#projects">Projects</a>
          <ul class="dropdown-menu">
            <li class="dropdown-element"><a href="#code-projects">Coding Projects</a></li>
            <li class="dropdown-element"><a href="#art-projects">Art Projects</a></li>
            <li class="dropdown-element"><a href="#tdpm-projects">3D Printing and Modeling Projects</a></li>
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