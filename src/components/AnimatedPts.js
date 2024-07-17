import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";

const AnimatedPts = (props) => {
  return (
    <div className="WScase_A">
            <h2 style={{ fontSize: "5vmin", color: "white" }} className="f-ub">
              {props.title}
            </h2>
            <ul>
              <ScrollAnimation
                animateIn="animate__fadeInUp"
                animateOut="animate__fadeOutUp"
              >
                <li className="f-sec c-prim" style={{ color: "white" }}>
                  1 - {props.p1}
                </li>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="animate__fadeInUp"
                animateOut="animate__fadeOutUp"
              >
                <li className="f-sec c-prim mt-5" style={{ color: "white" }}>
                  2 - {props.p2}
                </li>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="animate__fadeInUp"
                animateOut="animate__fadeOutUp"
              >
                <li className="f-sec c-prim mt-5" style={{ color: "white" }}>
                  3 - {props.p3}
                </li>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="animate__fadeInUp"
                animateOut="animate__fadeOutUp"
              >
                <li className="f-sec c-prim mt-5" style={{ color: "white" }}>
                  4 - {props.p4}
                </li>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="animate__fadeInUp"
                animateOut="animate__fadeOutUp"
              >
                <li className="f-sec c-prim mt-5" style={{ color: "white" }}>
                  5 - {props.p5}
                </li>
              </ScrollAnimation>
            </ul>
          </div>
  )
}

export default AnimatedPts
