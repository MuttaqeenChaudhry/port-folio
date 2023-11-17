import React, { useEffect, useState } from "react";
import "../stylesheets/SpaceStrz.css";
import Lottie from "lottie-web";
import Waves from '../animations/Waves.json'

export default function SpaceStrz(props) {
  let WavesCntnr = React.createRef();
  useEffect(() => {
    const container = document.getElementById("stars-container");
    Lottie.destroy();
    Lottie.loadAnimation({
      container : WavesCntnr.current,
      animationData : Waves 
    });

    function createRandomStar() {
      const star = document.createElement("div");
      star.classList.add("star");
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      star.style.left = x + "px";
      star.style.top = y + "px";
      container.appendChild(star);
      star.addEventListener("animationend", () => {
        if(container.contains(star))
        {container.removeChild(star);
        createRandomStar();}
      });
    }


    function createRandomStars(number) {
      for (let i = 0; i < number; i++) createRandomStar();
    }

    createRandomStars(props.numberofstars);
  }, []);
  return (
    <>
      <div className="SS_Wrpr">
        <div className="SS_Content">
        <div className="WavesContainer">
        <div ref={WavesCntnr} className="WavesIter"/>
       </div>
      
          <h2 style={{ zIndex: "2" }}>
            <span className="Fnt_Uu" style={{ color: "white" }}>
              {props.Prim}
            </span>{" "}
            <span className="txtStroke">
    <span className="shadwToogle">{props.Sec}</span>
  </span> 
          </h2>
        </div>
        <div className="stars-container" id="stars-container"></div>
      </div>
    </>
  );
}
