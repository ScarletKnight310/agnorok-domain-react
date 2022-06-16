import React from 'react';
import './about.css';

import me from "../../assets/about/me.jpg";
//import helm from "../../assets/about/helm.jpg";

function About() {
  return (
    <about class="main-section" id="about">
      <h2 class="main-section-title">&lt;[About]&gt;</h2>
      <section class="section-full" id="sb-about">
        <img class="section-element" id="sb-about-img" src= {me}  height="500" alt="me"></img>
        <article class="section-element" id="sb-about-text">
          My name is Kashod Cagnolatti. <br/>
          <br/>
          I'm a recent graduate of California Lutheran University <br/>
          currently looking for career in the field of Computer Science. <br/>
          I made this site as a way to keep a record of things I've worked on.
        </article>
      </section>
    </about>
  )
}

export default About

