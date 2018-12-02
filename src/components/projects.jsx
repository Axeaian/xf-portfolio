import React, { Component } from "react";
import Card from "./card";
import { getProjects } from "./../projectList";

let projects = getProjects();
export default class Projects extends Component {
  render() {
    return (
      <div>
        <div className="projects">
          <div className="label">
            <span>Projects</span>
            <br />
          </div>
          <div className="grid-container-3">
            {projects.map(project => (
              <Card key={project._id} project={project} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
