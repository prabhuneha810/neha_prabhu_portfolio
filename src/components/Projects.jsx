import { Link } from 'react-router-dom'
import Media from './Media'
import { hasCaseStudy } from '../data/caseStudies'
import { projects } from '../data/projects'
import './Projects.css'

const ProjectCard = ({ project }) => {
  const content = (
    <>
      <h2 className="project__title" data-reveal="fade">
        {project.title}
      </h2>
      <div className="project__frame" data-reveal="image">
        <Media
          src={project.image}
          alt={project.title}
          label={project.title}
          className="horizontal-image"
        />
      </div>
    </>
  )

  return (
    <article className="project">
      {hasCaseStudy(project.id) ? (
        // Has a detail page - open it in the app
        <Link className="project__link" to={`/work/${project.id}`}>
          {content}
        </Link>
      ) : project.link ? (
        // No detail page yet, but an external case study was supplied
        <a className="project__link" href={project.link} target="_blank" rel="noreferrer">
          {content}
        </a>
      ) : (
        content
      )}
    </article>
  )
}

const Projects = () => (
  <section className="projects container" id="work">
    <h2 className="sr-only">Selected work</h2>
    <div className="projects__grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </section>
)

export default Projects
