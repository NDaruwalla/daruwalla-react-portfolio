import React from "react";
// import React, { useState } from "react";
import projects from "../../projects.json";
import MySkills from "../MySkills";
import "./style.css";

function Project() {
 
  function checkRepoLink(project) {
    console.log("inside repo function")
    if (project.repo !== null) {
      return (
        <div className="row">
          <div className="col-sm text-center">
            <a className="repoLink" href={project.repo} target="_blank" rel="noopener noreferrer">
              <button type="button" className="btn btn-info repoBtn">
                Github Repository
              </button>
            </a>
          </div>
          <div className="col-sm text-center">
            <a className="siteLink" href={project.site} target="_blank" rel="noopener noreferrer">
              <button type="button" className="btn btn-info siteBtn">
                Deployed Site
              </button>
            </a>
          </div>
        </div>
      );
    } else {
      return (
      <div className="row">
        <div className="col-sm">
        <a className="siteLink" href={project.site} target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-info siteBtn">Deployed Site</button></a>
        </div>
      </div>
      );
    }
  };

  return projects.map((project) => {
    return ( <div className="row">
      <div className="card mb-5 projectCard">
        <div className="card-body">
          <div className="row">
            <div className="col-md-3 my-auto">
              <img
                src={project.image}
                alt={project.title}
                width="200px"
                className="card-img img-fluid logo"
              />
            </div>
            <div className="col-md-9">
              <h4 className="card-title">{project.title}</h4>
              <div className="row card-text">
                <p>{project.about}</p>
                <ul className="technologies">
                  <MySkills techItems={project.technologies}></MySkills>
                </ul>
              </div>
              {checkRepoLink(project)}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  });
}


export default Project;
