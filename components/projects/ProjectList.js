import classes from "./ProjectList.module.css";
import Link from "next/link";
import React, { Fragment } from "react";
import ProjectItem from "./ProjectItem";
import projectData from "../projects/projectData";
import Card from "../ui/Card";

export default function ProjectList() {
  const projects = projectData;

  const [click, setClicked] = React.useState(false);

  const toggleClick = function (e) {
    // setClicked((prevClick) => !prevClick);
    console.log(e.target.textContent);
  };

  return (
    <div>
      <div id="projects" className={classes.projects_container}>
        <div className={classes.project_text}>
          <h2>Projects</h2>
        </div>
        <div className={classes.card_container}>
          <div onClick={toggleClick} className={classes.project_cards}>
            {projects.map((project) =>
              !project.course ? (
                <ProjectItem
                  isClicked={click}
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  content={project.content}
                  image={project.image}
                />
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
      <div id="projects" className={classes.projects_container}>
        <div className={classes.project_text}>
          <h2>Course Projects</h2>
        </div>
        <div className={classes.card_container}>
          <div onClick={toggleClick} className={classes.project_cards}>
            {projects.map((project) =>
              project.course ? (
                <ProjectItem
                  isClicked={click}
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  content={project.content}
                  image={project.image}
                />
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
