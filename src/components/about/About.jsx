import React, { useState, useEffect } from "react";
import "./about.css";
import Guitar from "../../img/guitar.PNG";
import Lucca from "../../img/luccasmart.png";

const About = () => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    const checkDate = () => {
      const today = new Date();
      if (today.getMonth() === 10 && today.getDate() === 1) {
        setCount((prevCount) => prevCount + 1);
      }
    };

    // Check for November 1st every day
    const intervalId = setInterval(checkDate, 24 * 60 * 60 * 1000);

    // Call checkDate immediately when the component mounts
    checkDate();

    // Cleanup the interval when the component unmounts
    return () => clearInterval;
  }, []);

  return (
    <div className="a">
      <div className="a-left">
        <div className="a-img bg"></div>
        <img src={Guitar} alt="" className="a-img" />
      </div>
      <div className="a-right">
        <h1 className="a-title">About me:</h1>
        <p className="a-sub">
          I'm from South Florida with Mexican roots. I enjoy computers, playing
          guitar, and cats. Lately, I've been getting into game development,
          along with website building and machine learning.
        </p>
        <p className="a-desc">
          Juggling productivity and hobbies is the key to keeping my motivation
          alive. The guitar has been a consistent and cherished hobby that has
          not only provided me with endless enjoyment but has also granted me
          the opportunity to delve into diverse cultures and enrich my
          perspectives. Alongside this, I'm always on the lookout for new goals
          to pursue—whether it's seeking out jobs, diving into exciting
          projects, creating video games, working on my website, or even
          mastering simple yet satisfying challenges (like finishing Elden
          Ring).
        </p>
        <div className="a-cat">
          <img src={Lucca} alt="" className="a-cat-img" />
          <div className="a-cat-text">
            <h3 className="a-cat-title">My Tabby Cat Lucca:</h3>
            <p className="a-cat-desc">
              He's a {count} year old sweetheart and my best friend.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
