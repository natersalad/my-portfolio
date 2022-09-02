import About from "./components/about/About";
import Intro from "./components/intro/intro";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact"
import React from "react"

const App = () => {
  return <div>
    <Intro/>
    <About/>
    <ProductList/>
    <Contact/>
    </div>;
};

export default App;