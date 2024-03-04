import React from "react";
import { motion } from "framer-motion";
import "./services.scss";
import { images } from "../../components/main/constants";

const Services = () => {
  const abouts = [
    {
      title: "Хөх сувд",
      description: "Төсөл",
      imgUrl: images.about,
      href: "/group/huhsuvd",
    },
    {
      title: "Web development",
      description: "Im good",
      imgUrl: images.about02,
      href: "/",
    },
  ];

  return (
    <>
      <div className="top"></div>
      <h2 className="head-text-second">
        ТИ ЭЙ ДИ И <span>КОНСТРАКШН</span> <br />
        Хийгдэж буй <span>Төслүүд</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
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
    </>
  );
};

export default Services;
