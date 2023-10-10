import React from 'react'
import { projects } from './utils/projects'
import ProjectItem from './project-item/ProjectItem'

const ProjectsList = () => {
  return (
    <section className='portfolio-grid'>
      {projects.map((project)=>{
        return <ProjectItem project={project}/>
      })}
    </section>
  )
}

export default ProjectsList