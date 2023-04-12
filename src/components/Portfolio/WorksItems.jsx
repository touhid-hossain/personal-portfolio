import React from "react";
import { motion } from "framer-motion";

const WorksItems = ({ item, link }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="work__card"
      key={item.id}
    >
      <img src={item.image} alt="" className="work__img" />
      <div className="work__details">
        <span className="lang__text">{item.language}</span>
        <h3 className="work__title">{item.title}</h3>
        <p className="desc__text">{item.desc}</p>
        <a href={link} target="_" className="work__button">
          Check on github
          <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      </div>
    </motion.div>
  );
};

export default WorksItems;
