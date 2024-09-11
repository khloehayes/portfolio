import React from 'react';
import '../css/About.css';

function About() {
    return(
        <section className="about-section">
      <div className="about-container">
        {/* Left Column: Larger Image */}
        <div className="about-image">
          <img src="headshot_new.png" alt="Khloe Hayes" />
        </div>

        {/* Right Column: Resume and About Info */}
        <div className="about-content">
          <h2>About Me</h2>

          <p className="about-text">
            I’m a computer science graduate with a passion for coding and design. I enjoy solving problems and working on innovative projects.
          </p>

          {/* Contact Information */}
          <div className="contact-info">
            <p><i className="fas fa-envelope"></i> khloe.m.hayes@gmail.com</p>
            <p><i className="fas fa-phone"></i> +1 (616) 581-5599</p>
          </div>

          {/* Short Resume */}
          <div className="resume">
            <h3>Education</h3>
            <p>B.S. in Computer Science, Michigan State University</p>

            <h3>Skills</h3>
            <ul>
              <li>JavaScript, React, Python, Java</li>
              <li>HTML, CSS, Responsive Design</li>
              <li>Version Control: Git, GitHub</li>
            </ul>

            <h3>Experience</h3>
            <p>Under Construction Right Now :-D</p>
          </div>
        </div>
      </div>
    </section>
    );
}

export default About;