// import logo from './logo.svg';
import React from "react";

import {Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import PropertyDetails from "./components/Property";
import SellProperty from "./components/SellProperty";
// import Banner from "./components/Banner";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto bg-white ">
       <Header/>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sell" element={<SellProperty/>} />
        <Route path="/property/:id" element={<PropertyDetails/>} />
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
