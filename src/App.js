import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Landing from "./components/landing";
import Portfolio from "./components/projects";
import Contact from "./components/contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default App;
