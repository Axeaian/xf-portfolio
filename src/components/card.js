import React, { Component } from "react";

export default class Card extends Component {
  render() {
    const {
      name,
      image_url,
      description,
      github_url,
      app_url
    } = this.props.project;
    return (
      <div className="flip-card card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={image_url} alt={name} width="300px" height="250px" />
            <h3>{name}</h3>
          </div>
          <div className="flip-card-back">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  }
}
