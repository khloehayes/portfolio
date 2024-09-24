import React from 'react';
import '../css/Header.css';

function Header() {
    return (
        <div className="whole-page-container">
            <header className="intro_container">
            <nav className="navbar">
  <ul className="nav-list">
    {/* Icon Links */}
    <li className="nav-item">
      <a href="https://github.com/khloehayes/" target="_blank" rel="noreferrer">
        <img src="github.png" alt="GitHub" className="icon" />
      </a>
    </li>
    <li className="nav-item">
      <a href="https://www.linkedin.com/in/khloe-hayes" target="_blank" rel="noreferrer">
        <img src="linkedin.svg" alt="LinkedIn" className="icon" />
      </a>
    </li>
    <li className="nav-item">
      <a href="mailto:khloe.m.hayes@gmail.com">
        <img src="email.svg" alt="Email" className="icon" />
      </a>
    </li>
  </ul>

  <ul className="nav-list text-links">
    {/* Text Links */}
    <li className="nav-item">
      <a href="#about" className="nav-link">ABOUT</a>
    </li>
    <li className="nav-item">
      <a href="#projects" className="nav-link">PROJECTS</a>
    </li>
  </ul>
</nav>

                

                {/* Header Title and Description */}
                <h1 id="header-name">Hello! I'm Khloe Hayes</h1>
                <p id="header-desc">Developer | Engineer | Problem Solver | Creator</p>
            </header>
        </div>
    );
}

export default Header;