import "./intro.css";
import Me from "../../img/nathanjapan.jpg";
import Linkedin from "../../img/linkedin.png";
import Github from "../../img/github.png";
import React from "react";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hi, my name is</h2>
          <h1 className="i-name">Nathan Wand</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">UF Undergraduate</div>
              <div className="i-title-item">Computer Scientist</div>
              <div className="i-title-item">Website Designer</div>
              <div className="i-title-item">Game Developer</div>
              <div className="i-title-item">Guitarist</div>
            </div>
          </div>
          <p className="i-desc">
            I'm a senior at the University of Florida majoring in Computer
            Science and persuing Electrical Engineering and Digital Arts and
            Sciences minors with a Certificate in A.I. Fundementals. I have a
            passion for software development, game design, robotics, artifical
            intelligence, and music. Seeking new grad positions for 2025.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-buttons">
          <a
            href="https://www.linkedin.com/in/nathanwand"
            className="al"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Linkedin} alt="" className="i-linkedin" />
          </a>
          <a
            href="https://github.com/natersalad"
            className="ag"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Github} alt="" className="i-github" />
          </a>
        </div>
        <div className="i-card">
          <img src={Me} alt="" className="i-img" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
