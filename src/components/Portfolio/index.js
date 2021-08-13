import React from 'react'
import plentyofpups from '../../assets/images/plentyofpups.png';
import notetaker from '../../assets/images/note-taker.png';
import teamprofile from '../../assets/images/teamprofile.png';
import budgettracker from '../../assets/images/budgettracker.png';


const projects = [
  {
    title: "Plenty of Pups",
    description: "A website for users to find doggy play date matches, bringing the worlds pups together.",
    image: plentyofpups,
    url: "https://github.com"
  },
  {
    title: "Budget Tracker",
    description: "A PWA budget tracker that allows the user to keep track of their expenses, even offline.",
    image: budgettracker,
    url: "https://github.com"
  },
  {
    title: "Note Taker",
    description: "A standard app for creating, editing, and deleting personal notes.",
    image: notetaker,
    url: "https://github.com"
  },
  {
    title: "Team Profile Generator",
    description: "A node generator where businesses can build their teams into a visual layout.",
    image: teamprofile,
    url: "https://github.com"
  }
]


const Project = ({ project }) => {
  const { title, description, image, url } = project;
  return (


    <div class="col-lg-6 col-md-6 portfolio-item filter-app" id="project">
      <div class="portfolio-wrap">
        <img src={image} class="card-img-top" alt="..."></img>

        <div class="portfolio-info">
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
        <div class="portfolio-links">
          <a href={url} class="portfolio-lightbox" title={title}> </a>
        </div>
      </div>
    </div >

  )
}


const Portfolio = () => {
  return (
    <div>
      <section id="portfolio" class="portfolio section-bg">
        <div class="container">
          <div class="section-title">
            <h3>My Projects</h3>
          </div>
          <div class="row portfolio-container">
            {projects.map(project => {
              return <Project project={project} />
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio;

