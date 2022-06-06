import React from 'react'
import './projects.css'

const Projects = () => {
  return (
    <projects id="projects">
    <h2>&lt;[Projects]&gt;</h2>
    <section class="section-full" id="code-projects">
      <h3 class="section-title">[Coding Projects]</h3>
      <img src= "" alt="codeProj"></img>
      <article > If it involves me coding, it goes here. Content varies between <br/> 
      Unity games, Arduino Code, and more.  Most of my projects <br/>
      will be on my GitHub or my itch.io account. Otherwise, they'll be here.
      </article>
    </section>
    <section class="section-full" id="art-projects">
      <h3 class="section-title">[Digital Art Projects]</h3>
      <img src= "" alt="artProj"></img>
      <article > 
      Anything involving creating 2D images, mostly Adobe Photoshop <br/>
      and Illustrator. May add to this every so often so my Adobe skills <br/>
      don't get rusty.
      </article>
    </section>
    <section class="section-full" id="3dpm-projects">
      <h3 class="section-title">[3D Printing and Modeling Projects]</h3>
      <img src= "" alt="3DprintProj"></img>
      <article>
      Anything involving creating 3D images, mostly Cura for splicing and Blender for editing/creating. <br/>
      Most of the projects I print come from existing models from Thingiverse. <br/>
      I use an Ender-3 for printing, but I plan to upgrade soon. <br/>

      [Currently my 3D Printer is out of commission, won't be seeing new prints for a while] 	:(
      </article>
    </section>
    </projects>
  )
}

export default Projects