import React, { useEffect } from "react";
import "../stylesheets/SpaceStrz.css";
import SpcShip from '../svgs/abc.gif'

export default function SpaceStrz(props) {
  useEffect(() => {
    const container = document.getElementById("stars-container");
    function createRandomStar() {
      const star = document.createElement("div");
      star.classList.add("star");
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      star.style.left = x + "px";
      star.style.top = y + "px";
      container.appendChild(star);
      star.addEventListener("animationend", () => {
        container.removeChild(star);
        createRandomStar()
      });
    }

    function createRandomSpaceship () {
        const spaceship = document.createElement('img');
        spaceship.setAttribute('src', SpcShip);
        spaceship.setAttribute('alt', 'Error')
        spaceship.classList.add('S51');
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        spaceship.style.left = x + "px";
        spaceship.style.top = y + "px";
        container.appendChild(spaceship);
        spaceship.addEventListener('animationend', ()=>{
            container.removeChild(spaceship);
            createRandomSpaceship();
        })

    }
    function createRandomSpaceships() {
        for (let i = 0; i < 1; i++) createRandomSpaceship();
    }
    createRandomSpaceships()

    function createRandomStars(number) {
      for (let i = 0; i < number; i++) createRandomStar();
    }

    createRandomStars(props.numberofstars);
  }, []);
  return (
    <>
      <div className="stars-container" id="stars-container"></div>
    </>
  );
}
