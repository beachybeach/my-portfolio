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

    <div class="col">
      <a className="project-link" href={url} target="_blank" rel="noreferrer">
        <div class="card" id="project">
          <img src={image} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{description}</p>
          </div>
        </div>
      </a>
    </div>
  )
}


const Portfolio = () => {
  return (
    <div>
      <section id="portfolio" class="portfolio">
        <div className="container" id="portfolio">
          <div class="section-title">
            <h3>My Projects</h3>
          </div>
          <div className="row row-cols-2">
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

