import "./productList.css"
import Product from "../product/Product"
import { products } from "../../data.js"
import React from "react"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">PROJECTS</h1>
                <p className="pl-bold-text"> <span className="pl-bolder-text">Click</span> or <span className="pl-bolder-text">hover</span> on a project for more!</p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} id={item.id} thumbnailSrc={item.thumbnailSrc} videoSrc={item.videoSrc} link={item.link} heading={item.heading} madeWith={item.madeWith} desc={item.desc}/>
                ))}
            </div>
        </div>
    )
}

export default ProductList