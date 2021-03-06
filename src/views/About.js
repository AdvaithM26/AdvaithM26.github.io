import React, { useEffect, useRef } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import GithubLogo from "../assets/img/github-logo.svg";
import InstaLogo from "../assets/img/instagram-logo.svg";
import MailLogo from "../assets/img/mail.svg";
import babyAdvaith from "../assets/img/baby-advaith.jpg";
import aboutBackdrop from "../assets/img/about-backdrop.jpeg";
import { Row } from "react-bootstrap";
import SkillSet from "../components/SkillSet";
import { onScroll } from "../util/onScroll";
const About = props => {
  const aboutRef = useRef();
  useEffect(() => {
    document.title = "About";
    window.addEventListener("scroll", () => onScroll(aboutRef, 120));

    return () => {
      window.removeEventListener("scroll", () => onScroll(aboutRef, 120));
    };
  }, []);

  const styles = {
    height: 370,
    backgroundColor: "#242424",
    backgroundImage: `url(${aboutBackdrop})`,
    backgroundSize: "cover",
    backgroundPosition: !window.matchMedia("(min-width: 1000px)").matches
      ? 0
      : `0px ${Math.round(window.scrollY * -0.5) - 120}px`,
  };
  return (
    <>
      <div
        ref={aboutRef}
        className="container-fluid text-center text-white flex items-center"
        style={styles}
      >
        <div className="mx-auto">
          <h1 className="text-7xl">About</h1>
        </div>
      </div>
      <div id="about" className="container mt-4 mx-auto f-raleway py-4">
        <div
          style={{ borderRadius: 5 }}
          className="card border-none custom-shadow mb-5 card-dark mx-auto px-2 pb-5"
          id="card"
        >
          <p
            className="card-title card-body ml-4 h2"
            style={{ marginBottom: -10 }}
          >
            Advaith Malka
          </p>
          <div className="row">
            <div className="col-md-4">
              <div className="container">
                <img
                  id="baby-advaith-pic"
                  className="b-round-5 ml-4 mt-1"
                  alt="baby advaith"
                  src={babyAdvaith}
                />
              </div>
            </div>
            <div className="col-md-8">
              <p className="card-body">
                Hello world! My name is Advaith Malka and thank you for visiting
                my website! This website was mainly built using React with the
                purpose of showcasing all of the projects that I've created over
                the years. I began programming ever since I was only 13 years
                old and have loved it ever since! As of right now I am
                experienced in a wide variety of languages including HTML, CSS,
                JS, PHP and SQL plus many frameworks and libraries like React,
                Django, Pandas, Sklearn ect. In my free time, when I'm not
                coding, I do track and enjoy playing basketball. Anyhow thank
                you for taking the time to view my website!{" "}
              </p>
            </div>
          </div>

          <SkillSet />

          <h4 className="card-body mt-5 mb-n2">Contact:</h4>
          <Row>
            <div className="col flex justify-center">
              <a
                className="ml-7 inline wd-max-content"
                href="mailto:advaithm06@gmail.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Tippy content="Contact me">
                  <img src={MailLogo} width={100} alt="Mail" />
                </Tippy>
              </a>
            </div>
            <div className="col flex justify-center">
              <a
                className="inline wd-max-content"
                href="https://www.instagram.com/advaith_malka/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Tippy content="Follow me on Instagram!">
                  <img
                    src={InstaLogo}
                    alt="Follow me on instagram"
                    width={100}
                  />
                </Tippy>
              </a>
            </div>
            <div className="col flex justify-center">
              <a
                className="inline wd-max-content"
                href="https://github.com/advaithmalka?tab=repositories"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Tippy content="Check out all of my projects!">
                  <img alt="view my github" src={GithubLogo} width={100} />
                </Tippy>
              </a>
            </div>
          </Row>
        </div>
      </div>
    </>
  );
};

export default About;
