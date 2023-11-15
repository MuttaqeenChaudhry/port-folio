import React, { useEffect, useState } from "react";
import "../stylesheets/RocketArrow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";

export default function RedirectArrow(props) {
  useEffect(() => {
    const ArrowContainer = document.getElementById('Rocket_Wrpr');
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if(window.scrollY > 240)
      {
        ArrowContainer.style.display = 'block';
        ArrowContainer.style.opacity = Math.min(1.0 , scrollY / 480 )
      }  
      else
      {
        ArrowContainer.style.opacity = Math.max(0 , scrollY / 480)
        if(ArrowContainer.style.opacity == 0)
        ArrowContainer.style.display = 'none';
      }        
      }

    
    document.addEventListener('scroll', handleScroll)

  }, []);

  return (
    <>
      <div
        className="Rocket_Wrpr"
        id="Rocket_Wrpr"
        style={{display : 'none'}}
      >
        <div onClick={props.onClick} className="RocketContainer" id='ArrowContainer'>
          <span>
            <FontAwesomeIcon icon={faAnglesUp} color="#fff" size="2x" />
          </span>
        </div>
      </div>
    </>
  );
}
