import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="main">
          <div id="home">
            <div className="heading-container">
              <h1 className="main-heading">
                Kevin <span className="text-secondary">Kim</span>
              </h1>
              <h2 className="sub-heading">
                Full Stack Developer, Problem Solver, Thought Provoker
              </h2>

              <div className="icons">
                <a href="https://www.linkedin.com/in/kevin81kim/">
                  <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
                </a>
                <a href="https://github.com/kevdev81" alt="GitHub">
                  <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;
