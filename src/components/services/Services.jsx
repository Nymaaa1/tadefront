import React from "react";
import { motion } from "framer-motion";
import "./services.scss";
import { images } from "../../components/main/constants";
import { AppWrapAbout, MotionWrap } from "../main/wrapper";

const Services = () => {
  const abouts = [
    {
      title: "Хөх сувд",
      description: "Төсөл",
      imgUrl: images.huhsuvd,
      href: "/group/huhsuvd",
    },
    {
      title: "Говь",
      description: "Төсөл",
      imgUrl: images.tadeApartment,
      href: "/group/apartment",
    },
  ];

  return (
    <>
      <div className="background_services">
      <div className="top"></div>
        <h2 className="head-text-second">
          ТИ ЭЙ ДИ И <span>КОНСТРАКШН</span> <br />
          Хийгдэж буй <span>Төслүүд</span>
        </h2>

        <div className="app__profiles">
          {abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={about.title + index}
            >
              <a href={`${about.href}`}>
                <img src={about.imgUrl} alt={about.title} />
              </a>
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

// export default Services;

export default AppWrapAbout(
  MotionWrap(Services, "app__wrapper_about_screen"),
  "about",
  ""
);
