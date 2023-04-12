import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Header.css";

const Header = ({ toggleTheme, theme }) => {
  /*=============== Change background Header ===============*/
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    // When the scroll is higher than 200 viewport height, add the show-header class to a tag with the header tag
    if (this.scrollY >= 3) {
      // console.dir(this.scrollY)
      header.classList.add("scroll-header");
    } else {
      header.classList.remove("scroll-header");
    }
  });
  /*=============== Toggle Menu ===============*/
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Touhid
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link
                activeClass="active-link"
                smooth={true}
                spy={true}
                duration={100}
                to="home"
                onChange={() => setActiveNav("home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i>Home
              </Link>
            </li>

            <li className="nav__item">
              <Link
                activeClass="active-link"
                smooth={true}
                spy={true}
                duration={100}
                to="about"
                onChange={() => setActiveNav("about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i>About
              </Link>
            </li>

            <li className="nav__item">
              <Link
                activeClass="active-link"
                smooth={true}
                spy={true}
                duration={100}
                to="skills"
                onClick={() => setActiveNav("skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i class="bx bx-objects-vertical-bottom nav__icon"></i>Skills
              </Link>
            </li>

            <li className="nav__item">
              <Link
                activeClass="active-link"
                smooth={true}
                spy={true}
                duration={100}
                to="qualifications"
                onClick={() => setActiveNav("qualifications")}
                className={
                  activeNav === "#qualifications"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i> Qualifications
              </Link>
            </li>

            <li className="nav__item">
              <Link
                activeClass="active-link"
                smooth={true}
                spy={true}
                duration={100}
                to="portfolio"
                onClick={() => setActiveNav("portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </Link>
            </li>

            <li className="nav__item">
              <Link
                activeClass="active-link"
                smooth={true}
                spy={true}
                duration={100}
                y
                to="travel"
                onClick={() => setActiveNav("travel")}
                className={
                  activeNav === "#travel"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i class="bx bxs-plane-take-off nav__icon"></i> Travel
              </Link>
            </li>
            <li className="nav__item">
              <Link
                activeClass="active-link"
                smooth={true}
                spy={true}
                duration={100}
                to="resume"
                onClick={() => setActiveNav("resume")}
                className={
                  activeNav === "#resume"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i> Resume
              </Link>
            </li>
            <li className="nav__item">
              <Link
                activeClass="active-link"
                smooth={true}
                spy={true}
                duration={100}
                to="contact"
                onClick={() => setActiveNav("contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i> Contact
              </Link>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav__buttons">
          <i
            className={
              theme === "light-theme"
                ? "uil uil-moon change-theme"
                : "uil uil-brightness change-theme"
            }
            onClick={toggleTheme}
            id="theme-button"
          ></i>
          <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
