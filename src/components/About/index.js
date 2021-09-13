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
              <h3>My Story</h3>
              <p class="fst-italic">

                Before I became a developer, I went to Arizona State University where I received a Bachelor's Degree in Marketing. After my degree, I realized that my true passion was with computers. I built my own PC, have played video games since I was a kid, and loved learning how my machine operated. From there I spent a year teaching myself how to code before taking a professional bootcamp to further solidify my knowledge. I learned both the front end as well as the back end but learned that I have a strong love for building React websites. Keep scrolling to see some of the projects that I have built!

              </p>
            </div>
          </div>

        </div>
      </section >
    </div >

  )
}

export default About;