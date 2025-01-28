import React, { useState, useEffect } from "react";
import "./about.css";
import Guitar from "../../img/guitar.PNG";
import Lucca from "../../img/luccasmart.png";

const About = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const calculateAge = () => {
      const today = new Date();
      const birthDate = new Date(2017, 10, 1); // November 1st, 2017
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();
      if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }
      setCount(age);
    };

    calculateAge();

    // Recalculate age every year on November 1st
    const intervalId = setInterval(calculateAge, 365 * 24 * 60 * 60 * 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
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
