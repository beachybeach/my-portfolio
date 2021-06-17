import React from "react";
import Me from '../../assets/images/profile.jpeg';

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg nav-menu">
        <a class="navbar-brand">Riley Beach</a>
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="#About">About <span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link" href="#skills">Skills</a>
          <a class="nav-item nav-link" href="#portfolio">Portfolio</a>
          <a class="nav-item nav-link" href="#contact">Contact</a>
        </div>

      </nav>
    </div >
  )
}

export default Header;

{/*<div>
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
</div> */}