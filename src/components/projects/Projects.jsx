import React from 'react'
import { HashLink } from 'react-router-hash-link';
import { BiLinkExternal } from "react-icons/bi";
import '../../App.jsx';
import './projects.css'

import code from "../../assets/projects/code.jpg";
import art from "../../assets/projects/art.png";
import print from "../../assets/projects/print.png";
import {FaRegSadCry} from 'react-icons/fa'

const Projects = () => {
  return (
    <projects class="main-section" id="projects">
    <h2 class="main-section-title">&lt;[Projects]&gt;</h2>
    <section class="section-full" id="code-projects">
      <h3 class="section-title" id="code-projects-title"><HashLink smooth to='/code/#' class="header-link" >[Coding Projects]</HashLink></h3>
      <img class="section-element" id="code-projects-img" src= {code} alt="codeProj" height="500"></img>
      <article class="section-element"id="code-projects-text"> If it involves me coding, it goes here.<br/>  Content varies between 
      Unity games, Arduino Code, and more.<br/>  Most of my projects 
      can be found on <a class="in-text" href="https://github.com/ScarletKnight310" target="_blank" rel="noopener noreferrer">GitHub</a> or <a class="in-text" href="https://scarletknight310.itch.io/" target="_blank" rel="noopener noreferrer">Itch.io</a>.
      </article>
      <HashLink smooth to='/code/#' class="project-button" >View Code Projects<BiLinkExternal/></HashLink>
    </section>
    <section class="section-full" id="art-projects">
      <h3 class="section-title" id="art-projects-title"><HashLink smooth to='/art/#' class="header-link" >[Digital Art Projects]</HashLink></h3>
      <img class="section-element" id="art-projects-img" src= {art} alt="artProj" ></img>
      <article class="section-element" id="art-projects-text"> 
      Anything involving creating 2D images, mostly Adobe Photoshop <br/>
      and Illustrator. May add to this every so often so my Adobe skills <br/>
      don't get rusty.
      </article>
      <HashLink smooth to='/art/#' class="project-button" >View Art Projects<BiLinkExternal/></HashLink>
    </section>

    <section class="section-full" id="tdpm-projects">
      <h3 class="section-title" id="tdpm-projects-title"><HashLink smooth to='/thrD/#' class="header-link">[3D Printing and Modeling Projects]</HashLink></h3>
      <img class="section-element" id="tdpm-projects-img" src= {print} alt="3DprintProj" height="500"></img>
      <article class="section-element" id="tdpm-projects-text">
      Anything involving creating 3D images,<br/> 
      mostly Cura for splicing and Blender for editing/creating.<br/>
      Majority of the projects I print come from existing models from Thingiverse. <br/>
      I use an Ender-3 for printing, but I plan to upgrade soon. <br/>
      <br/>
      <br/>
        <div id ="tdpm-notes">
          Currently my 3D Printer is out of commission, <br/>
          won't be seeing new prints for a while <FaRegSadCry/>
        </div>
      </article>
    </section>
    <HashLink smooth to='/thrD/#' class="project-button">View 3D Projects<BiLinkExternal/></HashLink>
    </projects>
  )
}

export default Projects