import React from "react";
import Backend from "./Backend";
import Frontend from "./Frontend";
import Html from "../../assets/img/html5.png";
import Css from "../../assets/img/css.png";
import Js from "../../assets/img/js.png";
import Tailwind from "../../assets/img/tailwind.png";
import Node from "../../assets/img/node.png";
import Webpack from "../../assets/img/webpack.png";
import ReactJs from "../../assets/img/react.png";
import Chrome from "../../assets/img/chrome.png";
import NextJs from "../../assets/img/nextJs.png";
import Yarn from "../../assets/img/yarn.png";
import Vue from "../../assets/img/vue.png";
import Npm from "../../assets/img/npm.png";
import Slack from "../../assets/img/slack.png";
import Vscode from "../../assets/img/vscode.png";
import Discord from "../../assets/img/discord.png";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__sec container">
        <div className="skills__container grid">
          <Frontend />
          <Backend />
        </div>
        <div>
          <div className="tech__tools">
            <h3 className="tool__header">My Preferred Tech Tools :</h3>
            <div>
              <p className="tool__title">I love to work with :</p>
              <span title="HTML 5">
                <img src={Html} className="img_height" alt="" />{" "}
              </span>
              <span title="CSS 3">
                <img src={Css} className="img_height" alt="" />{" "}
              </span>
              <span title="Javascript">
                <img src={Js} className="img_height" alt="" />{" "}
              </span>
              <span title="React-JS">
                <img src={ReactJs} className="img_height" alt="" />{" "}
              </span>
              <span title="Tailwind CSS">
                <img src={Tailwind} className="img_height" alt="" />{" "}
              </span>
            </div>
            <div>
              <p className="tool__title">I also love :</p>
              <span title="Vue JS">
                <img src={Vue} className="img_height" alt="" />{" "}
              </span>
              <span title="Next JS">
                <img
                  src={NextJs}
                  className="img_height img__background"
                  alt=""
                />{" "}
              </span>
              <span title="Node">
                <img src={Node} className="img_height img__background" alt="" />{" "}
              </span>
              <span title="Yarn">
                <img src={Yarn} className="img_height" alt="" />{" "}
              </span>
            </div>
            <div>
              <p className="tool__title">For communication purpose I use :</p>
              <span title="Discord">
                <img src={Discord} className="img_height" alt="" />{" "}
              </span>
              <span title="Slack">
                <img src={Slack} className="img_height" alt="" />{" "}
              </span>
            </div>
            <div>
              <p className="tool__title">Tools I use :</p>
              <span title="Google Chrome">
                <img src={Chrome} className="img_height" alt="" />{" "}
              </span>
              <span title="Npm">
                <img src={Npm} className="img_height" alt="" />{" "}
              </span>
              <span title="Webpack">
                <img src={Webpack} className="img_height" alt="" />{" "}
              </span>
              <span title="Visual studio code">
                <img src={Vscode} className="img_height" alt="" />{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
