import React from "react";
import image01 from "../image/aboutmeKevin.jpg";

class AboutMe extends React.Component {
  render() {
    return (
      <div className="aboutMe">
        <div className="col-left">
          <img src={image01} alt="kevin-kim" />
        </div>
        <div className="col-right">
          <h1>About Me</h1>
          <p>
            I have a passion for problem solving and have experience building
            full-stack applications with React, ASP.Net Core, and SQL Server as
            a developer. I have worked in an agile/SCRUM environment where I
            participated in daily stand-ups and frequent code reviews while
            utilizing TFS. I pride myself on having fundamentals in writing
            scalable, modularized, and efficient code, and am always looking for
            new ways to further my knowledge. I am able to adapt to unfamiliar
            surroundings and strive to expand my skillset with new technologies.
          </p>
          <iframe
            src="//www.slideshare.net/slideshow/embed_code/key/ske4TGBZ8FfUBR"
            width="668"
            height="714"
            frameborder="0"
            marginwidth="0"
            marginheight="0"
            scrolling="no"
            style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;"
            allowfullscreen
          />
          <div style={{ marginBottom: "5px" }}>
            <a
              style={{ cursor: "pointer !important" }}
              href="https://www.dropbox.com/s/61xx2etqrgrgzo9/Kevin%27s%20Resume.pdf?dl=0"
              title="Kevin_Kim&#x27;s_Resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kevin_Kim&#x27;s_Resume
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
