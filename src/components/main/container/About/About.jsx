import React from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { images } from "../../constants";
import { Link } from "react-router-dom";

const About = () => {
  const abouts = [
    {
      title: "ТИ ЭЙ ДИ И КОНСТРАКШН",
      description: "Төсөл",
      imgUrl: images.about,
      href: "/group/huhsuvd",
    },
    {
      title: "Цонх",
      description: "Im good",
      imgUrl: images.about02,
      href: "/",
    },
    {
      title: "Гадаад",
      description: "Im good",
      imgUrl: images.about02,
      href: "/",
    },
    {
      title: "Дотоод",
      description: "Im good",
      imgUrl: images.about02,
      href: "/",
    },
  ];

  return (
    <>
      <div className="background">
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

export default About;
// export default AppWrap(
//   MotionWrap(About, "app__about"),
//   "about",
//   "app__whitebg"
// );
