import React, { useEffect, useState } from "react";
import "../stylesheets/WorkScase.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import AnimatedPts from "./AnimatedPts";

export default function ProjectShowcase({
  title,
  points,
  images,
  interval = 4200,
  flexD,
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPreviousImage = () => {
    setActiveIndex((currentIndex) =>
      (currentIndex - 1 + images.length) % images.length
    );
  };

  const showNextImage = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
  };

  useEffect(() => {
    const sliderTimer = setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(sliderTimer);
  }, [interval, images.length]);

  return (
    <div className="WScase_Wrpr">
      <div className="WScase" style={{ flexDirection: flexD }}>
        <AnimatedPts title={title} points={points} />
        <div className="WScase_B">
          <div className="WScase_B_1">
            {images.map((image, index) => (
              <img
                key={`${title}-${index}`}
                className="Sliding_Imgs"
                src={image}
                alt={`${title} screenshot ${index + 1}`}
                style={{ display: index === activeIndex ? "block" : "none" }}
              />
            ))}
          </div>
          <div className="WScase_B_2">
            <button className="btn_rnd" type="button" onClick={showPreviousImage}>
              <FontAwesomeIcon icon={faLeftLong} size="3x" color="#fff" />
            </button>
            <button className="btn_rnd" type="button" onClick={showNextImage}>
              <FontAwesomeIcon icon={faRightLong} size="3x" color="#fff" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
