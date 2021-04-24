import React from "react";
import Me from '../../assets/images/me.JPG';

const Header = () => {
  return (
    <div>
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img src={Me} alt="me" className="img-fluid rounded-circle"></img>
            <h1 className="text-light">
              <a href="index.html">Riley Beach</a>
            </h1>
            <div className="social-links mt-3 text-center">
              <a href="#" class="twitter">
                <i class="bx bxl-twitter::before">
                </i>
              </a>
              <a href="#" class="instagram">
                <i class="bx bxl-instagram::before">
                </i>
              </a>
              <a href="#" class="linkedin">
                <i class="bx bxl-linkedin::before">
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