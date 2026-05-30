import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";

const AnimatedPts = (props) => {
  const points = props.points || [props.p1, props.p2, props.p3, props.p4, props.p5];

  return (
    <div className="WScase_A">
            <h2 style={{ fontSize: "5vmin", color: "white" }} className="f-ub">
              {props.title}
            </h2>
            <ul>
              {points.map((point, index) => (
                <ScrollAnimation
                  key={`${props.title}-${point}`}
                  animateIn="animate__fadeInUp"
                  animateOut="animate__fadeOutUp"
                >
                  <li
                    className={`f-sec c-prim${index === 0 ? "" : " mt-5"}`}
                    style={{ color: "white" }}
                  >
                    {index + 1} - {point}
                  </li>
                </ScrollAnimation>
              ))}
            </ul>
          </div>
  )
}

export default AnimatedPts
