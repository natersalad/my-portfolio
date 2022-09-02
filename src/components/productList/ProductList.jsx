import "./productList.css"
import Product from "../product/Product"
import { products } from "../../data.js"
import React from "react"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">PROJECTS</h1>
                <p className="pl-desc">
                    Here is a collection of projects that I have created troughout the year.
                    I love to be productive and tap into multiple different interfaces. Coding is my passion, but I do enjoy other
                    types of projects like 3d modeling.
                </p>
                <b>Click on one of the projects for more details!</b>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} heading={item.heading} desc={item.desc}/>
                ))}
            </div>
        </div>
    )
}

export default ProductList