import Link from "next/link";
import { projects } from "../../data/Projects"

const Projects = () => {
  return (
    <section id="projects">
      <div>
        <p>Featured Work</p>
        <h2>Projects I've Built</h2>
        <p>
          A selection of projects that demonstrate my frontend development
          skills and experience building responsive, user-focused interfaces.
        </p>
      </div>

      <div>
        {projects.map((project) => (
          <article key={project.id}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <ul>
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>

            <div>
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </Link>
              )}

              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;