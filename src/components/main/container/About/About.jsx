import React from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import { AppWrapAbout, MotionWrap } from "../../../main/wrapper";

const About = () => {
  const abouts = [
    {
      title: "TADE APARTMENT",
      description: "Компани",
      imgUrl: images.tadeApartment,
      href: "/group/apartment",
    },
    {
      title: "TADE TRADE",
      description: "Компани",
      imgUrl: images.tadeTrade,
      href: "/group",
    },
    {
      title: "TADE WINDOW",
      description: "Компани",
      imgUrl: images.tadeWindow,
      href: "/group/window",
    },
    {
      title: "TADE CONTRUCTION",
      description: "Компани",
      imgUrl: images.tadeContruction,
      href: "/group/huhsuvd",
    },
  ];

  return (
    <>
      <div className="background">
        <div className="padd"></div>
        <h2 className="head-text-second">
          ТИ ЭЙ ДИ И <span>ГРУПП</span> <br />
        </h2>

        <div className="app__profileabout">
          {abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item_about"
              key={about.title + index}
            >
              <Link to={about.href}>
                <img src={about.imgUrl} alt={about.title} />
              </Link>
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrapAbout(
  MotionWrap(About, "app__wrapper_about_screen"),
  "about",
  ""
);
