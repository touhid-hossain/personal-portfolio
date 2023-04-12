import React, { useEffect, useState } from "react";
import { projectsData } from "./Data";
import { projectsNav } from "./Data";
import WorksItems from "./WorksItems";
import { motion, AnimatePresence } from "framer-motion";
import "./Works.css";

const Works = () => {
  const [item, setItem] = useState({
    name: "all",
  });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          // console.log(item, index);
          return (
            <span
              onClick={(e) => handleClick(e, index)}
              className={`${active === index ? "active-work" : ""} work__item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <motion.div className="work__container container grid">
        <AnimatePresence>
          {projects.map((item) => {
            return <WorksItems item={item} key={item.id} link={item.link} />;
          })}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Works;
