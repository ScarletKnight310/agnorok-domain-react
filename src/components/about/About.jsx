import React from 'react';
import './about.css';

import me from "../../assets/about/me.jpg";
import helm from "../../assets/about/helm.jpg";

function About() {
  return (
    <about id="about">
    <h2 class="section-title">&lt;[About]&gt;</h2>
    <section class="section-body">
      <img class="section-img" src= {helm}  height="500" alt="me"></img>
      <article class="section-text">
      My name is Kashod Cagnolatti. <br/>
      I'm a recent graduate of California Lutheran University currently looking for career in the field of Computer Science. <br/>
      This site as a way to keep a record of things I've worked on. I don't have a concrete schedule for how I plan to update this site so it'll seem a bit random.
      </article>
    </section>
    </about>
  )
}

export default About

