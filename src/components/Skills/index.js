import React from "react";
import html from '../../assets/images/html5.png';
import css from '../../assets/images/css3.png';
import js from '../../assets/images/js.png';
import jquery from '../../assets/images/jquery.png';
import redux from '../../assets/images/redux.png';
import react from '../../assets/images/react.png';

const Skills = () => {
  return (
    <div>
      <section id="skills" class="skills" >
        <div class="container">
          <div class="section-title">
            <h3>Skills</h3>
          </div>
          <div class="skills-subtitle">
            <h4>Languages</h4>
          </div>
          <div class="logos">
            <div class="logo">
              <img src={html} alt="html5logo"></img>
              <strong>HTML5</strong>
            </div>

            <div class="logo">
              <img src={css} alt="css logo "></img>
              <strong>CSS3</strong>
            </div>
            <div class="logo">
              <img src={js} alt="javascript logo"></img>
              <strong>JavaScript</strong>
            </div>
            <div class="logo">
              <img src={jquery} alt="jquery logo"></img>
              <strong>jQuery</strong>
            </div>
          </div>
          <div class="skills-subtitle">
            <h4>Frameworks</h4>
          </div>
          <div class="logos">
            <div class="logo">
              <img src={redux} alt="redux logo"></img>
              <strong>Redux</strong>
            </div>
            <div class="logo">
              <img src={react} alt="react logo"></img>
              <strong>React</strong>
            </div>
          </div>
        </div>
      </section>
    </div >
  )
}

export default Skills;