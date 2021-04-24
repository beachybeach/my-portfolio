import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="nav h2 bg-transparent">
        <a className="nav-link active">Riley Beach</a>
        <a class="nav-link" href="#about">About Me</a>
        <a class="nav-link" href="#portfolio">Projects</a>
        <a class="nav-link" href="#skills">Skills</a>
        <a class="nav-link" href="#contact">Contact Me</a>
      </nav>
    </div>
  )
}

export default Header;