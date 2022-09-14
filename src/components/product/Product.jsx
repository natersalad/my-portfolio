import Cat from "../../3d/Cat"
import "./product.css"
import React from "react"

const Product = ({img, link, heading}) => {

    return (
        <div className="p-parent">
            <div className="p-box">
                <div className="p-browser">
                    <div className="p-circle"></div>
                    <div className="p-circle"></div>
                    <div className="p-circle"></div>
                </div>
                <a href={link} target="_blank" rel="noreferrer">
                    <img src={img} alt="" className="p-img"/>
                    <Cat/>
                </a>
            </div>
            <div className="p-text">
                <h1 className="p-title">
                    {heading}
                </h1>
            </div>
        </div>   
    )
    
}

export default Product