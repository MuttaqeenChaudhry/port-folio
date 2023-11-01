import React, { useEffect } from "react";
import "../stylesheets/IntroCmp.css";
import KbrdAnim from '../animations/NC2QHYnXLQ.json'
import lottie from "lottie-web";
import Typed from 'react-typed';
import SpcShip from '../svgs/abc.gif';

export default function IntroCmp() {
  let Anim_Cntnr = React.createRef();
  useEffect(()=>{
    lottie.destroy()
    lottie.loadAnimation({
      container : Anim_Cntnr.current,
      animationData : KbrdAnim,
      loop: 1,   
    })
  },[]);

  const strings = ["Muttaqeen", "a Full Stack Web Dev"]
  return (
    <>
      <div className="IntroCmp-Wrpr">
        <span style={{marginLeft:'80px'}}>
      <img src={SpcShip} alt="" width="50px" height="50px"/>
      </span>
        <div className="IntroCmp">
          <div>
            <p className="p_style">Hi I am</p>
            </div>
            <div>
            <h2><Typed strings={strings} typeSpeed={60} loop={false} /></h2>
            </div>
            <div ref={Anim_Cntnr} className="Anim_Cntnr"/>  
          
        </div>
      </div>
    </>
  );
}
