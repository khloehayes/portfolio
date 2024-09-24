import React from 'react';
import '../css/About.css';

function About() {
    return (
        <section className="about-section" id="about">
            <div className="about-container">
                {/* Left Column: Larger Image */}
                <div className="about-image">
                    <img src="../../images/headshot_new.png" alt="Khloe Hayes" />
                </div>

                {/* Right Column: Resume and About Info */}
                <div className="about-content">
                    <h2>About Me</h2>

                    <p className="about-text">
                        I’m a computer science graduate with a passion for coding and design. I enjoy solving problems and working on innovative projects.
                    </p>

                    {/* Contact Information */}
                    <div className="contact-info">
                        <h3>Contact</h3>
                        <p>
                            <a href="mailto:khloe.m.hayes@gmail.com" className="info-link">
                                <i className="fas fa-envelope"></i> khloe.m.hayes@gmail.com
                            </a>
                        </p>
                        <p>
                            <a href="tel:+16165815599" className="info-link">
                                <i className="fas fa-phone"></i> +1 (616) 581-5599
                            </a>
                        </p>
                        <p>
                            <a href="https://www.linkedin.com/in/khloe-hayes" target="_blank" rel="noreferrer" className="info-link">
                                <i className="fab fa-linkedin"></i> LinkedIn
                            </a>
                        </p>
                        <p>
                            <a href="https://github.com/khloehayes" target="_blank" rel="noreferrer" className="info-link">
                                <i className="fab fa-github"></i> GitHub
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            {/* Experience Section Spanning Full Width */}
            <div className="resume">
    <h3>Experience</h3>
    <ul>
        <li>
            <strong className="job-title">Auto Owners Insurance</strong>
            <span className="role">Associate Developer</span>
            <span className="date">June 2024 - Present</span>
            <p>Completed comprehensive training in Java, Git, and JSPs. Leading a project to convert hardcoded data to a dynamic database table, streamlining updates.</p>
        </li>
        <li>
            <strong className="job-title">Amazon Employee Badge Image Validation Tool</strong>
            <span className="role">Full Stack Developer</span>
            <span className="date">Jan 2024 - May 2024</span>
            <p>Collaborated with a team to design an employee badge validation tool using machine learning with AWS, reducing manual review time significantly.</p>
        </li>
        <li>
            <strong className="job-title">Amy's Rental Cottages Website</strong>
            <span className="role">Freelance Web Developer</span>
            <span className="date">Aug 2023 - Sep 2023</span>
            <p>Solely redesigned and developed the website, improving aesthetics and business through a user-friendly interface.</p>
        </li>
        <li>
            <strong className="job-title">Dealership Advantage LLC</strong>
            <span className="role">Junior Developer</span>
            <span className="date">May 2021 - Dec 2021</span>
            <p>Designed an interactive 404 error page and spearheaded development of the Audits webpage with UI/UX best practices.</p>
        </li>
    </ul>
</div>
        </section>
    );
}

export default About;
