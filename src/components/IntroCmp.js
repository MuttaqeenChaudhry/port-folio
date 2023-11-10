import React, { useEffect } from "react";
import "../stylesheets/IntroCmp.css";
import DevMe from "../animations/ZonedIn.json";
import Astro from "../animations/Astro.json";
import Solar from "../animations/Solar.json";
import lottie from "lottie-web";
import Typed from "react-typed";

export default function IntroCmp() {
  let AnimCntnr = React.createRef();
  let AnimCntnr2 = React.createRef();
  let AnimCntnr3 = React.createRef();
  useEffect(() => {
    lottie.destroy();
    lottie.loadAnimation({
      container: AnimCntnr.current,
      animationData: Solar,
    });
    lottie.loadAnimation({
      container: AnimCntnr2.current,
      animationData: DevMe,
    });
    lottie.loadAnimation({
      container: AnimCntnr3.current,
      animationData: Astro,
    });
  }, []);

  const strings = ["Muttaqeen", "a Full Stack Web Dev"];
  return (
    <>
      <div className="IntroCmp-Wrpr">
        <div className="Section_One">
          <div ref={AnimCntnr} className="AnimCntnr" />
        </div>
        <div className="IntrCmp">
          <div className="Section_Two">
            <div>
              <p className="p_style">Hi I am</p>
            </div>
            <div>
              <h2>
                <Typed strings={strings} typeSpeed={60} loop={false} />
              </h2>
            </div>
            <div ref={AnimCntnr2} className="AnimCntnr2" />
          </div>
          <div className="Section_Three">
            <div ref={AnimCntnr3} className="AnimCntnr3" />
          </div>
        </div>
      </div>
    </>
  );
}
