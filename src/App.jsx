import About from "./components/about/About";
import Intro from "./components/intro/intro";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import React from "react";
import Timeline from "./components/timeline/timeline";

const App = () => {
  return (
    <div>
      <Intro />
      <About />
      <Timeline />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
