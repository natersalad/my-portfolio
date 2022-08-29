import "./intro.css"
import Me from "../../img/nathanfacewebsite.png"
import Linkedin from "../../img/linkedin.png"
import Github from "../../img/github.png"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hi, My name is</h2>
                    <h1 className="i-name">Nathan Wand</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">UF Undergraduate</div>
                            <div className="i-title-item">Computer Engineer</div>
                            <div className="i-title-item">Website Designer</div>
                            <div className="i-title-item">Guitarist</div>
                            <div className="i-title-item">Skateboarder</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        I am a Computer Engineer at the University of Florida. Currently in my Sophmore year, I am learning
                        mutliple new concepts and trying to apply them via websites and discord bots. 
                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-buttons">
                    <a href="https://github.com/natersalad" className="al">
                        <img src={Linkedin} alt="" className="i-linkedin" />
                    </a>
                    <a href="https://github.com/natersalad" className="ag">
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