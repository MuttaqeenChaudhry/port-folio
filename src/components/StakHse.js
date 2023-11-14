import React from "react";
import "../stylesheets/StakHse.css";
import cdimg from "../assets/images/Coding.jpg";
import "animate.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faM, faE, faR, faN } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import lottie from "lottie-web";
import Astro2 from "../animations/Astro2.json";
import Astro3 from "../animations/Asto3.json";
import Astro4 from "../animations/Astro5.json";
import ReactTyped from "react-typed";

export default function StakHse() {
  const LG_M = <FontAwesomeIcon icon={faM} color="#fff" />;
  const LG_E = <FontAwesomeIcon icon={faE} color="#fff" />;
  const LG_R = <FontAwesomeIcon icon={faR} color="#fff" />;
  const LG_N = <FontAwesomeIcon icon={faN} color="#fff" />;
  let AnimCntnr5 = React.createRef();
  let AnimCntnr6 = React.createRef();
  let AnimCntnr7 = React.createRef();

  useEffect(() => {
    const TargetElement = document.querySelector("#stacked-divs");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };
    const observer = new IntersectionObserver(callBack, options);
    observer.observe(TargetElement);

    function callBack(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          TargetElement.classList.add("imgFade");
          document.addEventListener("scroll", DropStacks);
        } else {
          document.removeEventListener("scroll", DropStacks);
        }
      });
    }

    const DropStacks = () => {
      const M_div2 = document.querySelector("#M_div2");
      const M_div3 = document.querySelector("#M_div3");
      const Init_Mrg1 = 8;
      const Init_Mrg2 = 16;
      let scrollY = window.scrollY;

      if (window.innerWidth >= 1200) {
        M_div2.style.top = `calc(min(${Init_Mrg1}vmin + ${scrollY}px, 550px))`;
        M_div3.style.top = `calc(min(${Init_Mrg2}vmin + ${scrollY}px, 995px))`;
      } else {
        M_div2.style.top = `calc(min(${Init_Mrg1}vmin + ${scrollY}px, 350px))`;
        M_div3.style.top = `calc(min(${Init_Mrg2}vmin + ${scrollY}px, 570px))`;
      }
    };
  }, []);

  useEffect(() => {
    lottie.loadAnimation({
      container: AnimCntnr5.current,
      animationData: Astro2,
    });
    lottie.loadAnimation({
      container: AnimCntnr6.current,
      animationData: Astro3,
    });
    lottie.loadAnimation({
      container: AnimCntnr7.current,
      animationData: Astro4,
    });
  }, []);

  return (
    <>
      <div className="Stacked_Wrpr" id="Stacked_Wrpr">
        <div className="AstroTwo">
          <div ref={AnimCntnr5} className="AnimCntnr5" />
        </div>
        <div className="stacked-divs" id="stacked-divs">
          <div className="div1">
            <img className="blur CodingImg" src={cdimg} alt="Code" />
          </div>
          <div id="M_div2" className="div2">
            <div ref={AnimCntnr6} className="div2_lft"></div>
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
            <div className="Stak3Left" style={{ width: "97%", margin: "auto" }}>
              <h3 className="f-prim">Personal Statement,</h3>
              <ScrollAnimation animateIn="animate__fadeInUp" animateOut="animate__fadeOutDown">
              <p style={{ lineHeight: "30px" }} className="f-sec">
                With unwavering commitment, I channel my passion for web
                development into crafting captivating online experiences for my
                clients. From inception to implementation, my dedication shines
                through every line of code and pixel perfected. Meticulously
                blending creativity with technical finesse, I aspire to
                transcend client expectations, ensuring each website I build
                stands as a testament to my relentless pursuit of excellence. In
                this ever-evolving digital landscape, I am steadfast in my
                mission to deliver not just websites, but digital masterpieces
                that leave a lasting impression and propel businesses forward.
              </p>
              </ScrollAnimation>
            </div>
            <div className="Stak3Right">
              <div ref={AnimCntnr7} className="AnimCntnr7" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
