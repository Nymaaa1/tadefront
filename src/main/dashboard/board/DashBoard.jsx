import React from "react";
import { motion } from "framer-motion";
import "./DashBoard.scss";
import { images } from "../../../components/main/constants";
import { NavLink } from "react-router-dom";

const DashBoard = () => {
  const abouts = [
    {
      title: "Хөх сувд",
      description: "Төсөл",
      imgUrl: images.huhsuvd,
      href: "/dashboard/supplies",
      id: 1,
    },
    {
      title: "Говь",
      description: "Төсөл",
      imgUrl: images.tadeApartment,
      href: "/dashboard/supplies",
      id: 2,
    },
  ];

  return (
    <>
      <div className="dashboard">
        <h4 className="head-text-second">
          ТИ ЭЙ ДИ И <span>КОНСТРАКШН</span> <br />
          Үндсэн <span>Төслүүд</span>
        </h4>

        <div className="app__profile_dashboard">
          {abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile_dashboard-item"
              key={about.title + index}
            >
              <NavLink to={about.href} state={{ id: about.id }}>
                <img src={about.imgUrl} alt={about.title} />
              </NavLink>
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

export default DashBoard;
