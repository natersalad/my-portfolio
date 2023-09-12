import Cat from "../../3d/Cat"
import VideoBox from "../VideoBox/VideoBox.jsx"
import "./product.css"
import React from "react"

const Product = ({id, thumbnailSrc, videoSrc, link, heading, madeWith, desc}) => {
    const isEvenProduct = id % 2

    return (
        <div className="p">
            <div className="p-card">
                <div className={`p-${isEvenProduct == 0 ? 'right' : 'left'}`}>
                    <div className="p-parent">
                        <div className="p-box">
                            <div className="p-browser">
                                <div className="p-circle"></div>
                                <div className="p-circle"></div>
                                <div className="p-circle"></div>
                            </div>
                            <a href={link} target="_blank" rel="noreferrer">
                                <VideoBox thumbnailSrc={thumbnailSrc} videoSrc={videoSrc}/>
                            </a>
                        </div>
                    </div> 
                </div> 
                {/* make a div for the right side of the screen that has a title, description. */}
                <div className={`p-${isEvenProduct == 0 ? 'left' : 'right'}`}>
                    <div className={`p-texts-${isEvenProduct == 0 ? 'right' : 'left'}`}>
                        <h1 className="p-title">
                            {heading}
                        </h1>
                        <h3 className="p-subtitle">
                            Made with: <span style={{color: "#228b22"}}>{madeWith}</span>
                        </h3>
                        <p className="p-desc">
                            {desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product