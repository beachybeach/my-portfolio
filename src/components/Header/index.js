import React, { useState, useEffect } from 'react';




const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [navitem, setNavitem] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false);
    }
  }

  const underlineSection = () => {
    if (window.scrollY >= 100) {
      setNavitem(true)
    } else {
      setNavitem(false);
    }
  }

  window.addEventListener('scroll', changeBackground);
  window.addEventListener('scroll', underlineSection);

  return (

    <div>
      <header id="header" className={navbar ? 'fixed-top d-flex justify-content-center align-items-center header-scrolled' : 'fixed-top d-flex justify-content-center align-items-center header-transparent'}>
        <nav class="navbar" id="navbar">
          <ul>
            <li className={navitem ? 'color-black' : 'color-white'}>
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

