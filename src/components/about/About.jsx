import React from 'react';
import './about.css';

import me from "../../assets/about/helm.jpg";

function About() {
  return (
    <about class="main-section" id="about">
      <h2 class="main-section-title">&lt;[About]&gt;</h2>
      <section class="section-full" id="sb-about">
        <img class="section-element" id="sb-about-img" src= {me}  height="500" alt="me"></img>
        <article class="section-element" id="sb-about-text">
          <div id="about-element-header">
            Hello! I'm <br/>
            <div id="about-element-header-name">
              Kashod Cagnolatti
            </div>
            ~
          </div>
          <br/>
            I'm a recent graduate of California Lutheran University<br/>
                looking for a place to share and hone my talents<br/>
                      in the field of computer science. 
        </article>
      </section>
    </about>
  )
}

export default About

