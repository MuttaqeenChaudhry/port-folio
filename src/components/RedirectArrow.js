import React, { useEffect, useState } from "react";
import "../stylesheets/RocketArrow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";

export default function RedirectArrow(props) {
  const [display, setDisplay] = useState("none");
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 900) {
        setDisplay("block");
      } else {
        setDisplay("none");
      }
    });
  }, []);

  return (
    <>
      <div
        className="Rocket_Wrpr"
        id="Rocket_Wrpr"
        style={{ display: display }}
      >
        <div onClick={props.onClick} className="RocketContainer">
          <span>
            <FontAwesomeIcon icon={faAnglesUp} color="#fff" size="2x" />
          </span>
        </div>
      </div>
    </>
  );
}
