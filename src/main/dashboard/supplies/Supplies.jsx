import React from "react";
import { motion } from "framer-motion";
import "./Supplies.scss";
import { images } from "../../../components/main/constants";
import { NavLink, useLocation } from "react-router-dom";

const Supplies = () => {
  const location = useLocation();
  const id = location.state ? location.state.id : null;
  const abouts = [
    {
      title: "Хангамж",
      description: "",
      imgUrl:id==1?images.huhsuvd4: images.apartm8,
      href: "/dashboard/building",
      sCode: 1,
    },
  ];

  return (
    <>
      <div className="supplies">
        <h2 className="head-text-second">
          <span>Төрөл</span>
        </h2>

        <div className="app__profile_supplies">
          {abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-items"
              key={about.title + index}
            >
              <NavLink to={about.href} state={{ id: id, sCode: id }}>
                <img src={about.imgUrl} alt={about.title} />
              </NavLink>
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {about.title}
              </h2>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Supplies;
