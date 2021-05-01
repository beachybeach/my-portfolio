import React from "react";
import Me from '../../assets/images/profile.jpeg';

const Header = () => {
  return (
    <div>
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img src={Me} alt="me" class="img-fluid rounded-circle"></img>
            <h1 className="text-light">
              <a href="index.html">Riley Beach</a>
            </h1>
            <div className="social-links mt-3 text-center">
              <a href="https://twitter.com/beachybeachh" rel="noreferrer" target="_blank" class="twitter">
                <i class="bx bxl-twitter">
                </i>
              </a>
              <a href="https://www.instagram.com/beachybeachhh/" rel="noreferrer" target="_blank" class="instagram">
                <i class="bx bxl-instagram">
                </i>
              </a>
              <a href="https://www.linkedin.com/in/rileysbeach/" rel="noreferrer" target="_blank" class="linkedin">
                <i class="bx bxl-linkedin">
                </i>
              </a>
              <a href="https://github.com/beachybeach" rel="noreferrer" target="_blank" class="github">
                <i class="bx bxl-github">
                </i>
              </a>
              <a href="twitch.tv/beachybeach" rel="noreferrer" target="_blank" class="twitch">
                <i class="bx bxl-twitch">
                </i>
              </a>
            </div>
          </div>
          <nav id="navbar" class="nav-menu navbar">
            <ul>
              <li>
                <a href="#about" class="nav-link scrollto active">
                  <i class="bx bx-user"></i>
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="#portfolio" class="nav-link scrollto active">
                  <i class="bx bx-book-content"></i>
                  <span>Portfolio</span>
                </a>
              </li>
              <li>
                <a href="#skills" class="nav-link scrollto active">
                  <i class="bx bxl-javascript"></i>
                  <span>Skills</span>
                </a>
              </li>
              <li>
                <a href="#contact" class="nav-link scrollto active">
                  <i class="bx bx-envelope"></i>
                  <span>Contact Me</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header;