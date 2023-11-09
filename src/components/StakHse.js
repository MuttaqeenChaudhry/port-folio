import React from "react";
import "../stylesheets/StakHse.css";
import cdimg from "../assets/images/Coding.jpg";
import "animate.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faM, faE, faR, faN } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export default function CdngImg() {
  const LG_M = <FontAwesomeIcon icon={faM} color="#89CFF0" />;
  const LG_E = <FontAwesomeIcon icon={faE} color="#191970" />;
  const LG_R = <FontAwesomeIcon icon={faR} color="#89CFF0" />;
  const LG_N = <FontAwesomeIcon icon={faN} color="#191970" />;

  useEffect(() => {
    const TargetElement = document.querySelector(".Stacked_Wrpr");
    let scrollTimeout;
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };
    const observer = new IntersectionObserver(callBack, options);
    observer.observe(TargetElement);
    function callBack(entries, observer) {
      console.log(entries);
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          TargetElement.classList.add('imgFade')
          document.addEventListener('scroll', DropStacks)
        } else {
          document.removeEventListener('scroll', DropStacks)

        }
      });
    }

    const DropStacks = () => {
        const M_div2 = document.querySelector("#M_div2");
        const M_div3 = document.querySelector("#M_div3");
        const Init_Mrg1 = 8;
        const Init_Mrg2 = 16;
        let scrollY = window.scrollY;

          if(window.innerWidth >= 1200)
          {
            M_div2.style.top = `calc(min(${Init_Mrg1}vmin + ${scrollY}px, 550px))`;
            M_div3.style.top = `calc(min(${Init_Mrg2}vmin + ${scrollY}px, 880px))`;
          }
          else {
            M_div2.style.top = `calc(min(${Init_Mrg1}vmin + ${scrollY}px, 295px))`;
          M_div3.style.top = `calc(min(${Init_Mrg2}vmin + ${scrollY}px, 590px))`;
        }
    }

  }, []);

  return (
    <>
      <div className="Stacked_Wrpr" id="Stacked_Wrpr">
        <div className="stacked-divs">
          <div className="div1">
            <img className="blur Img_CDim" src={cdimg} alt="Code" />
          </div>
          <div id="M_div2" className="div2">
            <div className="div2_lft">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/751678/skytsunami.png"
                alt="Muttaqeen"
              />
            </div>
            <div className="div2_rgt">
              <h3>I Work with,</h3>
              <ul>
                <ScrollAnimation
                  animateIn="animate__fadeInRight"
                  animateOnce={true}
                >
                  <li className="Sklls_bfr">{LG_M} MongoDB</li>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="animate__fadeInRight"
                  animateOnce={true}
                  delay={500}
                >
                  <li className="Sklls_bfr">{LG_E} Express.js</li>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="animate__fadeInRight"
                  animateOnce={true}
                  delay={1000}
                >
                  <li className="Sklls_bfr">{LG_R} React.js</li>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="animate__fadeInRight"
                  animateOnce={true}
                  delay={1500}
                >
                  <li className="Sklls_bfr">{LG_N} Node.js</li>
                </ScrollAnimation>
              </ul>
            </div>
          </div>
          <div id="M_div3" className="div3">
            <div style={{ border: "0px" }} className="div2_rgt">
              <h3 style={{ border: "0px" }}>I Work with,</h3>
              <ul>
                <li>MongoDB</li>
                <li>Express.js</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Full Stack Web Dev</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
