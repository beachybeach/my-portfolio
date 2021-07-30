import React from "react";
import me from '../../assets/images/profile.jpeg';

const About = () => {
  return (
    <div>
      <section id="about" class="about">
        <div class="container">
          <div class="section-title">
            <h3>About Me</h3>
            <p>Hello, I am a bootcamp certified full stack web developer from Phoenix, Arizona.
              As a developer I have a strong love for React but a constant desire for continuous learning.
            </p>
          </div>
          <div class="row">
            <div class="col-lg-4 aos init aos-animate" data-aos="fade-right">
              <img src={me} class="img-fluid" alt="me"></img>
            </div>
            <div class="col-lg-8 pt-4 pt-lg-0 content">
              <h3>Web Developer</h3>
              <p class="fst-italic">

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.

              </p>
            </div>
          </div>

        </div>
      </section >
    </div >

  )
}

export default About;