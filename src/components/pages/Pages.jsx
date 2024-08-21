// Pages.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import "../../App.scss";
import Home from "../main/container/Home.jsx";
import Footer from "../common/components/footer/Footer.jsx";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import { Navbar } from "../common/components";
import Huhsuvd from "../huhsuvd/Huhsuvd.jsx";
// import { About } from "../main/container/index.js";
import NotFound from "../../widget/NotFound.jsx";
import Apartment from "../apartment/Apartment.jsx";
import Contruction from "../construction/Construction.jsx";
import Window from "../window/Window.jsx";
// import Trade from "../trade/Trade.jsx";
import Abouts from "../about/About.jsx"

const Pages = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/huhsuvd" element={<Huhsuvd />} />
        <Route path="/apartment" element={<Apartment />} />
        <Route path="/contruction" element={<Contruction />} />
        {/* <Route path="/trade" element={<Trade />} /> */}
        <Route path="/window" element={<Window />} />
        <Route path="/about" element={<Abouts />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Pages;
