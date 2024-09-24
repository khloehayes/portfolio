import React from 'react';
import '../css/Projects.css';

function Projects() {
  const projectList = [
    {
      title: "Amazon Employee Badge Image Validation Tool",
      description: "In my Capstone course at Michigan State University, " 
      + "my team and I created a New Employee Badge Validation Tool for Amazon. "
      + "We used Amazon Web Services including Amazon Rekognition where we trained a"
      + " custom AI model to detect labels in images to help up dictate whether an "
      + "image passes the requirements to be a badge photo. We also used React.js to "
      + "create our webpage and AWS Amplify to host it. We used AWS DynamoDB and S3 "
      + "buckets to store any data we need.",
      imageUrl: "../images/amazon_capstone.png", // Replace with the actual image URL for the project
      projectLink: "https://www.capstone.cse.msu.edu/2024-01/projects/amazon/", // Replace with the actual project link
    },
    {
      title: "Active Park Assist",
      description: "In my software engineering course at Michigan State"
        + " University, I led a dynamic team in a simulated software engineering project "
        +" for a distinguished client with a background at Ford Motor Company. As the appointed " 
        + "Project Manager, I orchestrated effective communication channels, managed internal " 
        + "deadlines using Trello, and assigned tasks to ensure a cohesive workflow. " 
        + "By fostering collaboration and taking a hands-on approach, our team successfully "
        + "delivered on project goals, showcasing my leadership and project management capabilities.",
      imageUrl: "../images/img_1.png", // Replace with the actual image URL for the project
      projectLink: "http://cse.msu.edu/~vanderc9/index.html", // Replace with the actual project link
    },
    {
      title: "Amy's Cottages",
      description: "As part of my first freelance web development"
            + " opportunity, I developed a webpage for the rentals called 'Amy's Cottages' at Chippewa Lake. "
            + "This (in addition to my webpage) highlights my ability to build beautiful and mobile friendly front end applications.",
      imageUrl: "../images/amyscottages.jpg", // Replace with the actual image URL for the project
      projectLink: "https://cottages-188509366972.us-central1.run.app/home", // Replace with the actual project link
    },
    
    // Add more projects as needed
  ];

  return (
    <section className="projects-section" id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
              <img src={project.imageUrl} alt={project.title} className="project-image" />
            </a>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>
                {project.description}{" "}
                <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
