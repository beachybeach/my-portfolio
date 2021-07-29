import React, { useState, useEffect } from 'react';




const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (

    <div>
      <header id="header" className={navbar ? 'fixed-top d-flex justify-content-center align-items-center header-scrolled' : 'fixed-top d-flex justify-content-center align-items-center header-transparent'}>
        <nav class="navbar" id="navbar">
          <ul>
            <li>
              <a class="nav-link scrollto active" href="#about">About</a>
            </li>
            <li>
              <a class="nav-link scrollto active" href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a class="nav-link scrollto active" href="#skills">Skills</a>
            </li>
            <li>
              <a class="nav-link scrollto active" href="#contact">Contact</a>
            </li>
          </ul>

        </nav>
      </header>
    </div >
  )
}

export default Header;

