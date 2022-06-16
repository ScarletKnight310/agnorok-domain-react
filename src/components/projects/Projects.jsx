import React from 'react'
import {Link} from 'react-router-dom';
import './projects.css'

import code from "../../assets/projects/code.jpg";
import art from "../../assets/projects/art.png";
import print from "../../assets/projects/print.jpg";
import {FaRegSadCry} from 'react-icons/fa'

const Projects = () => {
  return (
    <projects class="main-section" id="projects">
    <h2 class="main-section-title">&lt;[Projects]&gt;</h2>
    <section class="section-full" id="code-projects">
      <h3 class="section-title" id="code-projects-title">[Coding Projects]</h3>
      <img class="section-element" id="code-projects-img" src= {code} alt="codeProj" height="500"></img>
      <article class="section-element"id="code-projects-text"> If it involves me coding, it goes here. Content varies between <br/> 
      Unity games, Arduino Code, and more.  Most of my projects <br/>
      will be on my GitHub or my itch.io account. Otherwise, they'll be here.
      </article>
    </section>

    <section class="section-full" id="art-projects">
      <h3 class="section-title" id="art-projects-title">[Digital Art Projects]</h3>
      <img class="section-element" id="art-projects-img" src= {art} alt="artProj" height="500"></img>
      <article class="section-element" id="art-projects-text"> 
      Anything involving creating 2D images, mostly Adobe Photoshop <br/>
      and Illustrator. May add to this every so often so my Adobe skills <br/>
      don't get rusty.
      </article>
    </section>

    <section class="section-full" id="tdpm-projects">
      <h3 class="section-title" id="tdpm-projects-title">[3D Printing and Modeling Projects]</h3>
      <img class="section-element" id="tdpm-projects-img" src= {print} alt="3DprintProj" height="500"></img>
      <article class="section-element" id="tdpm-projects-text">
      Anything involving creating 3D images,<br/> 
      mostly Cura for splicing and Blender for editing/creating.<br/>
      Majority of the projects I print come from existing models from Thingiverse. <br/>
      I use an Ender-3 for printing, but I plan to upgrade soon. <br/>
      <br/>
      <br/>
      Currently my 3D Printer is out of commission, <br/>
      won't be seeing new prints for a while <FaRegSadCry/>
      </article>
    </section>
    </projects>
  )
}

export default Projects