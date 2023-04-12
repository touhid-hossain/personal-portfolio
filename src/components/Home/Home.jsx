import React from "react";
import "./Home.css";
import Social from "./Social";
import Date from "./Date";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          <div className="home__img"></div>

          <Date />
        </div>

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
