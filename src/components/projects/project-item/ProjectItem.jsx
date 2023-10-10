import React from 'react'

const ProjectItem = ({project}) => {
  return (
    <a href={project.href} className="portfolio-item">
    <div className="portfolio-item__img">
      <img src={project.img} alt="" />
    </div>
    <div className="portfolio-item__info">
      <h3>{project.title}</h3>
      <h4>
        Demo <i class="bx bx-right-arrow-alt"></i>
      </h4>
    </div>
  </a>
  )
}

export default ProjectItem