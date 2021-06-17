import React from "react";
import me from '../../assets/images/profile.jpeg';

const About = () => {
  return (
    <div>
      <div class="container">
        <div id="about" class="container about">
          <div class="row row--35 align-items-center">
            <div class="col-lg-5">
              <div class="thumbnail">
                <img class="w-100" src={me} alt="me"></img>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="about-inner inner">
                <div class="section-title">
                  <h2 class="title">About Me</h2>
                  <p>I am a bootcamp certified full stack web developer with a love for React but a desire for constant and continuous learning.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;