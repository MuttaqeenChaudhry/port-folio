import React, { useEffect, useState } from "react";
import "../stylesheets/SpaceStrz.css";
import SpcShip from "../svgs/abc.gif";

export default function SpaceStrz(props) {
  useEffect(() => {
    const container = document.getElementById("stars-container");
    const container2 = document.getElementById("chickensContainer");

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

    function createRandomChicken() {
      const chicken = document.createElement("img");
      chicken.setAttribute("src", SpcShip);
      chicken.classList.add("S51");
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      chicken.style.left = x + "px";
      chicken.style.top = y + "px";
      container2.appendChild(chicken);
      chicken.addEventListener("animationend", () => {
        if(container2.contains(chicken))
        {
          container2.removeChild(chicken);
          createRandomChicken();
        }
      });
    }
    function createRandomChickens() {
      for (let i = 0; i < 2; i++) createRandomChicken();
    }

    createRandomChickens();

    function createRandomStars(number) {
      for (let i = 0; i < number; i++) createRandomStar();
    }

    createRandomStars(props.numberofstars);
  }, []);
  return (
    <>
      <div className="SS_Wrpr">
        <div className="SS_Content">
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
        <div className="chickensContainer" id="chickensContainer"></div>
      </div>
    </>
  );
}
