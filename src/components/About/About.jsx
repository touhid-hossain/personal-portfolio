import React from "react";
import "./About.css";

import AboutImg from "../../assets/img/Asthetic.jpg";

const About = () => {
  // console.log(registerSection())
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />
        <div className="about__data">
          <div className="desc__part one">
            <h3 className="desc__title">Who I Am -</h3>
            <p className="about__description">
              Hello! I'm Touhid, a 23 years old{" "}
              <span className="special__text"> self-taught </span>
              front-end developer. Currently i'm living at in the beautiful city
              of Dhaka in Bangladesh. Basically, i'm developing my skills from
              home right now. Besides developing skills,
              <span className="special__text"> i'm seeking for a job </span> to
              begin my career to secure employment with a reputable organization
              to expand my skills, knowledge, and experience.
            </p>
          </div>
          <div className="desc__part two">
            <h3 className="desc__title">what I Do -</h3>
            <p className="about__description">
              Well As i said, Currently I'm working at home. Practicing and
              developing my skills. When i started learning coding at the
              beginning <span className="special__text"> 2 years ago </span>, i
              used to make Landing-pages with Html, Css, Bootstrap and a little
              help of Javascript.
              <p className="about__description">
                Well <span className="special__text"> here is the twist </span>,
                when i started using a little bit of Javascript for making some
                things functional like Navbar menu, image-sliders etc. What used
                to make me thrill more about Javascript mechanism like how it
                was working, how a tap in the keyboard could make the navbar
                open and close, how the images are swiping from one to another.
              </p>
              <p className="about__description">
                Later on i start dig in more deeper and keep searching and
                googling to find the answers about my questions. surprisingly i
                found a very interesting thing about Javascript and that is
                called <span className="special__text">React-Js </span>, Which
                is a <span className="special__text">frame-work </span> of
                Javascript. After doing some study on it, i fell in love with
                this frame-work and currently trying to learning more about it.
              </p>
              <p className="about__description">
                <span className="special__text"> Spoiler Alert!! </span> - I've
                a special place in my heart for
                <span className="special__text"> [ REACT-JS ] </span>.
              </p>
            </p>
          </div>
          <div className="desc__part three">
            <h3 className="desc__title">A Little Appreciation Note -</h3>
            <p className="about__description">
              A little appreciation note for them who helped and still helping
              touhid to climbing up in his carrier/ for his better future, They
              are none other than but his close friends and brother -
              <span className="special__text">
                [ Nahid Ferdous Mohit, Antareep Hasan(Zim), Asef Hossain Khan ]
              </span>
              and many others.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
