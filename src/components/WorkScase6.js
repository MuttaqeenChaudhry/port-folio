import React, { useEffect } from "react";
import "../stylesheets/WorkScase.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong, faLeftLong } from "@fortawesome/free-solid-svg-icons";
import ScrollAnimation from "react-animate-on-scroll";
import AnimatedPts from "./AnimatedPts";

export default function WorkScase(props) {
  const AR_R = <FontAwesomeIcon icon={faRightLong} size="3x" color="#fff" />;
  const AR_L = <FontAwesomeIcon icon={faLeftLong} size="3x" color="#fff" />;

  useEffect(() => {
    const prevButton = document.getElementById("prevButton6");
    const nextButton = document.getElementById("nextButton6");
    const ImgContainer = document.getElementById("WScase_B_16");
    const Imgs = ImgContainer.querySelectorAll(".Sliding_Imgs");
    let InitIndex = 0;
    const showImage = (index) => {
      Imgs.forEach((Img, i) => {
        if (i === index) Img.style.display = "block";
        else Img.style.display = "none";
      });
    };

    prevButton.addEventListener("click", () => {
      InitIndex = (InitIndex - 1 + Imgs.length) % Imgs.length;
      showImage(InitIndex);
    });

    nextButton.addEventListener("click", () => {
      InitIndex = (InitIndex + 1) % Imgs.length;
      showImage(InitIndex);
    });

    setInterval(() => {
      InitIndex = (InitIndex + 1) % Imgs.length;
      showImage(InitIndex);
    }, 4800);

    showImage(InitIndex);
  }, []);
  return (
    <>
      <div className="WScase_Wrpr">
        <div className="WScase" style={{ flexDirection: props.flexD }}>
          <AnimatedPts
           title='GratisOglasi'
           p1='C2C E-comm site'
           p2='JWT/Local Storage Auth'
           p3='Post, Edit, Filter Ads'
           p4='Realtime Firebase Chat'
           p5='Next.js, Express, Mongo'
           />
          <div className="WScase_B">
            <div id="WScase_B_16" className="WScase_B_1">
              <img className="Sliding_Imgs" src={props.W1} alt="1" />
              <img className="Sliding_Imgs" src={props.W2} alt="2" />
              <img className="Sliding_Imgs" src={props.W3} alt="3" />
              <img className="Sliding_Imgs" src={props.W4} alt="4" />
              <img className="Sliding_Imgs" src={props.W5} alt="5" />
              <img className="Sliding_Imgs" src={props.W6} alt="6" />
              <img className="Sliding_Imgs" src={props.W7} alt="7" />
              <img className="Sliding_Imgs" src={props.W8} alt="8" />
              <img className="Sliding_Imgs" src={props.W9} alt="9" />
            </div>
            <div className="WScase_B_2">
              <button className="btn_rnd" id="prevButton6">
                {AR_L}
              </button>
              <button className="btn_rnd" id="nextButton6">
                {AR_R}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
