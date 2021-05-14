import React from "react";
import me from '../../assets/images/profile.jpeg';

const About = () => {
  return (
    <div>
      <section id="about" class="about">
        <div class="container">
          <div class="section-title">
            <h2>About</h2>
            <p>Hello, my name is Riley Beach and I am a full stack web developer from Phoenix, Arizona.</p>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <img src={me} class="img-fluid" alt="self-portrait"></img>
            </div>
            <div class="col-lg-8 pt-4 pt-lg-0 content">
              <h3>Full Stack Web Developer</h3>
              <p>I am a bootcamp certified full stack web developer with a love for React but a desire for constant and continuous learning.</p>


              <div class="row">
                <div class="col-lg-6">
                  <ul>
                    <li>
                      <i class="fas fa-chevron-right"></i>
                      <strong>Birthday:   </strong>
                      <span>1 August 1995</span>

                    </li>
                    <li>
                      <i class="fas fa-chevron-right"></i>
                      <strong>Website:   </strong>
                      <span>beachybeach.github.io/my-portfolio</span>

                    </li>
                    <li>
                      <i class="fas fa-chevron-right"></i>
                      <strong>City:   </strong>
                      <span>Phoenix, Arizona</span>

                    </li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul>
                    <li>
                      <i class="fas fa-chevron-right"></i>
                      <strong>Age:   </strong>
                      <span>23</span>

                    </li>
                    <li>
                      <i class="fas fa-chevron-right"></i>
                      <strong>Degree:   </strong>
                      <span>Bachelors in Marketing</span>

                    </li>
                    <li>
                      <i class="fas fa-chevron-right"></i>
                      <strong>Email:   </strong>
                      <span>rsbeach97@gmail.com</span>

                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;