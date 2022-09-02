import "./about.css"
import Guitar from "../../img/guitar.PNG"
import Lucca from "../../img/lucca.jpg"
import React from "react"

const About = () => {
    return(
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img 
                      src= {Guitar}
                      alt="" 
                      className="a-img" 
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About me:</h1>
                <p className="a-sub">
                    I was born and raised in South Florida and originate from Mexico.
                    I love computers, guitar, skateboarding, and cats. Recently I've been interested in webiste development and machine learning.
                </p>
                <p className="a-desc">
                    Productivity and hobbies are what keep me going.
                    Guitar and skateboarding have been my two favorite hobbies that have stayed over the years.
                    They have allowed me to tap into mutiple different cultures and diversify my opinions.
                    In the end, I'm always trying to chase a goal I have in mind whether it be internships, projects, friends, or even a simple skatetrick.
                </p>
                <div className="a-cat">
                    <img src={Lucca} alt="" className="a-cat-img" />
                    <div className="a-cat-text">
                        <h3 className="a-cat-title">
                            My Tabby Cat Lucca:
                        </h3>
                        <p className="a-cat-desc">
                            He's a five year old sweetheart and my best friend. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About