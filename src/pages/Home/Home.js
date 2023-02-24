import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Jagadeep S</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <Link to={"https://www.linkedin.com/in/jagadeep-s-4a129518a/"}>
          <LinkedInIcon  />
          </Link>
          <Link to={"mailto:jagasiva1999@gmail.com"}>
          <EmailIcon />
          </Link>
          <Link to={"https://github.com/Jaga1999"}>
          <GithubIcon />
          </Link>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, NPM, BootStrap, MaterialUI
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS,
              MySQL, MongoDB, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, Go</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
