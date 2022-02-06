import React from "react";
import TypeAnimation from "react-type-animation";
import ScrollService from "../../../utilities/ScrollService"
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/esmeralda-robledo-a98032a9/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/EsmeRobledo">
                <i className="fa fa-github-square"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Esmeralda</span>
            </span>
          </div>
          <div className="profile-detaile-role">
            <span className="profile-role-tagline">
              {" "}
              <div>
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    "React Developer ",
                    3000,
                    "FullStack Developer",
                    3000,
                    "Java Developer",
                    3000,
                    "Enthusiastic Dev",
                    3000,
                  ]}
                  wrapper="h1"
                  repeat={Infinity}
                />
              </div>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn" 
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}> Contact Me </button>
            <a href="Resume.pdf" download="Esmeralda Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background">
              
          </div>
        </div>
      </div>
    </div>
  );
}
