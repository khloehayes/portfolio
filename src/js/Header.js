import React from 'react';
import '../css/Header.css';

function Header() {
    return(
        <div className="whole-page-container">
      <header className='intro_container'>
      <div id="contact-links">
        <span id="github-container">
          <a
            className="info-link"
            href="https://github.com/khloehayes/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="github.png" alt="GitHub Icon" loading="lazy" className="icon" />
          </a>
        </span>
        <span id="github-container">
          <a
            className="info-link"
            href="www.linkedin.com/in/khloe-hayes"
            target="_blank"
            rel="noreferrer"
          >
            <img src="linkedin.svg" alt="GitHub Icon" loading="lazy" className="icon" />
          </a>
        </span>
        <span id="github-container">
          <a
            className="info-link"
            href="khloe.m.hayes@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src="email.svg" alt="GitHub Icon" loading="lazy" className="icon" />
          </a>
        </span>
      </div>
        <h1 id="header-name">Hello! I'm Khloe Hayes</h1>
        <p id="header-desc">Developer | Engineer | Problem Solver | Creator</p>
    </header>
    
    </div>
    );
}

export default Header;