import React from "react";
import "./hero.scss";
import videoBg from "../../assets/homevideo.mp4";

const Hero = () => {
  return (
    <>
      <div className="top"></div>
      <section className="hero">
        <video src={videoBg} autoPlay loop muted/>
        <div className="content">
            <h1>ТИ ЭЙ ДИ И КОНСТРАКШН</h1>
            <div className="solid-divider"></div>
            <p>Интериэр дизайны дэлхийн чиг хандлага, Европ стандарт</p>
        </div>
      </section>
    </>
  );
};

export default Hero;
