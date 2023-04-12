import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Travel.css";
import Gallery from "./GalleryStorage";

// Pulling out single names from multiple similar same names, Using new Set function.
const singleName = [
  "AllPhotos",
  ...new Set(
    Gallery.map((item) => {
      return item.category;
    })
  ),
];

const Travel = () => {
  const [photos, setPhotos] = useState(Gallery);
  const [active, setActive] = useState("AllPhotos");
  const [uniqueName, setUniqueName] = useState(singleName);
  // console.log(Gallery);

  const filterPhotos = (currPicCat) => {
    console.log(currPicCat);
    if (currPicCat === "AllPhotos") {
      setPhotos(Gallery);
      setActive("AllPhotos");
      return;
    }
    // console.log(currPicCat);
    const updateGallery = Gallery.filter((currElem) => {
      return currElem.category === currPicCat;
    });

    setPhotos(updateGallery);
    setActive(currPicCat);
  };

  return (
    <section className="travel section" id="travel">
      <h2 className="section__title">Travel</h2>
      <span className="section__subtitle">My Traveling History</span>
      <div className="travel__container container">
        <div className="filter__container">
          <h3 className="gallery_title">Travel Gallery</h3>
          {/* Rendering places */}
          {uniqueName.map((item) => {
            return (
              <button
                className={
                  active === item
                    ? "gallery__btn active__gallery"
                    : "gallery__btn"
                }
                onClick={() => filterPhotos(item)}
              >
                {item}
              </button>
            );
          })}
        </div>
        {/* Rendering Images */}
        <motion.div layout className="gallery__photos">
          <AnimatePresence>
            {photos.map((picture) => {
              const { image, id } = picture;
              return (
                <motion.div
                  layout
                  key={id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="pic"
                >
                  <img src={image} alt="" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Travel;
