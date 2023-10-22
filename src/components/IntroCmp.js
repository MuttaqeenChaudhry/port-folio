import React, { useEffect } from "react";
import "../stylesheets/IntroCmp.css";
import KbrdAnim from '../animations/NC2QHYnXLQ.json'
import lottie from "lottie-web";
import Typed from 'react-typed';

export default function IntroCmp() {
  let Anim_Cntnr = React.createRef();
  useEffect(()=>{
    lottie.destroy()
    lottie.loadAnimation({
      container : Anim_Cntnr.current,
      animationData : KbrdAnim,
      loop : true,
    })
  },[]);

  const strings = ["Muttaqeen", "a Web App Devloper", "a MERN stack developer"]
  return (
    <>
      <div className="IntroCmp-Wrpr">
        <div className="IntroCmp">
           
          <div>
            <p className="p_style">Hi I am</p>
            </div>
            <div>
            <h2><Typed strings={strings} typeSpeed={60} loop={true} /></h2>
            </div>
            <div ref={Anim_Cntnr} className="Anim_Cntnr"/>  
          
        </div>
      </div>
    </>
  );
}
