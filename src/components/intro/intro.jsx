import "./intro.css"
import Me from "../../img/nathanfacewebsite2.JPG"
import Linkedin from "../../img/linkedin.png"
import Github from "../../img/github.png"
import React from "react"

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
                            <div className="i-title-item">Computer Engineer</div>
                            <div className="i-title-item">Website Designer</div>
                            <div className="i-title-item">Game Developer</div>
                            <div className="i-title-item">Guitarist</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        I'm a junior studying Computer Engineering at the University of Florida, actively seeking internships for the summer of 2024.
                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-buttons">
                    <a href="https://www.linkedin.com/in/nathanwand" className="al" target="_blank" rel="noreferrer">
                        <img src={Linkedin} alt="" className="i-linkedin" />
                    </a>
                    <a href="https://github.com/natersalad" className="ag" target="_blank" rel="noreferrer">
                        <img src={Github} alt="" className="i-github"/>
                    </a>
                </div>
                <div className="i-card">
                    <img src={Me} alt="" className="i-img"/> 
                </div>
            </div>
        </div>
    )
}

export default Intro