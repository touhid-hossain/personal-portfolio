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
          <h3>Intro</h3>
          <p className="about__description">
            Touhid is a 23 year old, self-taught front-end developer, currently
            working at home, developing his skills. Besides developing skills,
            he is seeking for an Intern-level position to begin his career to
            secure employment with a reputable organization to expand my skills,
            knowledge, and experience. Spoiler alert: He has a special place in
            his heart for *REACT-JS*.
          </p>
          <br />
          <h3>Biography</h3>
          <p className="about__description">
            Touhid was born on 23th August of 1999 in the beautiful city of
            Dhaka in Bangladesh, where he currently lives with his family. His
            Grandmother got him his first computer at the age of 15. It was
            mostly used for playing video games, thanks to the widespread
            "unavailability" of the Internet. What used to make him thrill more
            than the fun playing games was their mechanism, e.g. how it was
            working, how a tap in the keyboard could get so many "physically
            untouchable" things done. When he got an Internet connection, he
            would research day and night in order to find the answers of his
            questions, gradually turning himself into a clog of the machines.
            Over a couple failed pet projects in school, he came to know about
            WordPress and fell in love with it, followed by php and modern
            javascript.
          </p>
          <br />
          <h3>Education</h3>
          <p className="about__description">
            At the age of 4, Touhid started junior school at Alhikma School and
            College, from which he graduated the Primary School Certificate
            examination on 2010 and the Junior School Certificate examination on
            2013. He then got himself admitted in Islamee Adarsha High School,
            where he graduated the Secondary School Certificate examination on
            2016. He continued high-school (a.k.a college locally) in Dhaka
            Commerce College institution and (surprisingly!) *dropped out* from
            the 11th class on 2017. Though, he plans to reboot his studies
            abroad when he gets enough time out of work.
          </p>
          <br />
          <h3>Dream's / Life Goal</h3>
          <p className="about__description">
            Though Touhid always wanted to join at Army or become a pilot from
            his childhood but God has planed something else for him, and here is
            he working as a front-end developer. This is now his main life goal
            and he is chasing his dream as best as he can with the help of his
            friends to achieve the goal of working a * REACT-JS * Developer in a
            reputed company.
          </p>
          <br />
          <h3>A Little Appreciation Note</h3>
          <p className="about__description">
            A little appreciation note for them who helped and still helping
            touhid to climbing up in his carrier/ for his better future, They
            are none other than but his close friends and brother - [ Nahid
            Ferdous Mohit, Antareep Hasan(Zim), Asef Hossain Khan] and many
            others.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
