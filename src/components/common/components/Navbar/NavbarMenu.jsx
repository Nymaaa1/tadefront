import React from "react";
import { motion } from "framer-motion";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { nav } from "../../../data/Data";

const NavbarMenu = ({ toggle, setToggle }) => (
  <>
    {toggle && (
      <motion.div
        whileInView={{ x: [200, 0] }}
        transition={{ duration: 0.85, ease: "easeOut" }}
      >
        <HiX onClick={() => setToggle(false)} />
        <ul>
          {nav.map((list, index) => (
            <li key={index}>
              <Link to={list.path} onClick={() => setToggle(false)}>
                {list.text}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    )}
  </>
);

export default NavbarMenu;
