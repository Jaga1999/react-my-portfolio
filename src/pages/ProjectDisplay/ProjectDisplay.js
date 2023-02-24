import React from "react";
import { Link, useParams } from "react-router-dom";
import { ProjectList } from "../../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./ProjectDisplay.css";
import LanguageIcon from '@mui/icons-material/Language';

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt="ProjectImage" />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <div>
        <Link to={project.gitlink}>
          <GitHubIcon /> 
        </Link>
        <Link to={project.link}>
          <LanguageIcon />
        </Link>
      </div>
    </div>
  );
}

export default ProjectDisplay;
