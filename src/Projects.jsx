import React from "react";
import { useFetchProjects } from "./fetchProjects";

const Projects = () => {
  const { loading, projects } = useFetchProjects();
  console.log(loading, projects);

  if (loading) {
    return (
      <section className="projects">
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <div className="projects">
      <div className="title">
        <h2>projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project) => {
          const { id, url, img, title } = project;
          return (
            <a
              href={url}
              key={id}
              target="_blank"
              rel="noreferrer"
              className="project"
            >
              <img src={img} alt={title} style={{ width: "22rem" }} />
              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
