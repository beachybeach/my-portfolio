import React from "react";
import me from '../../assets/images/profile.jpeg';

const About = () => {
  return (
    <div>
      <section id="about" class="about">
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
            <p>Hello, my name is Riley Beach and I am a full stack web developer from Phoenix, Arizona.</p>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <img src={me} class="img-fluid" alt="self-portrait"></img>
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0">
              <h3>Full Stack Web Developer</h3>
              <p>I am a bootcamp certified full stack web developer with a love for React but a desire for constant and continuous learning.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li>
                  <i className="bi bi-chevron-right">
                    <strong>Birthday:</strong>
                    <span>1 August 1995</span>
                  </i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;