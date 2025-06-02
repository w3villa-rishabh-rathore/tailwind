import { useState } from "react";
import "./App.css";
import Subnav from "./components/Subnav";
import Navbar from "./components/Navbar";
import Optionbar from "./components/Optionbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Buy from "./components/Buy";
import Category from "./components/Category";
import Categoryimage from "./components/Categoryimage";
import FeatureProduct from "./components/FeatureProduct";
import Shopcrat from "./components/Shopcrat";
import Featurecategory from "./components/Featurecategory";
import Shopbuy from "./components/Shopbuy";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import Post from "./components/Post"
import Testemonial from "./components/Testemonial";
import Mostviewed from "./components/Mostviewed";
import Social from "./components/Social";
import Footer from "./components/Footer";
import Subfooter from "./components/Subfooter";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>

            <Subnav/>
            <Navbar/>
            <Optionbar/>
            <Hero/>
            <Features/>
            <Buy/>
            <Category/>
            <Categoryimage/>
            <FeatureProduct/>
            <Shopcrat/>
            <Featurecategory/>
            <Shopbuy/>
            <Gallery/>
            <Blog/>
            <Post/>
            <Testemonial/>
            <Mostviewed/>
            <Social/>
            <Footer/>
            <Subfooter/>
      </>
  );
}

export default App;
