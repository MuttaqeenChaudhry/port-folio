import React from "react";
import "../stylesheets/StakHse.css";
import cdimg from "../images/Coding.jpg";
import { useEffect } from "react";

export default function CdngImg() {
  let scrollTimeout;
  if(window.innerWidth >= 1200)
  {
    window.addEventListener('scroll', ()=>{
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const M_div2 = document.querySelector('#M_div2')
    const M_div3 = document.querySelector('#M_div3')
    const Init_Mrg1 = 8;
    const Init_Mrg2 = 16;
    let scrollY = window.scrollY;
    if(window.scrollY>0)
    {
      M_div2.style.top = `calc(min(${Init_Mrg1}vmin + ${scrollY}px, 550px))`
      M_div3.style.top = `calc(min(${Init_Mrg2}vmin + ${scrollY}px, 962px))`
    }    
    }, 5);  
  })
 }

 else if(window.innerWidth <1200) {
  
    window.addEventListener('scroll', ()=>{
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const M_div2 = document.querySelector('#M_div2')
    const M_div3 = document.querySelector('#M_div3')
    const Init_Mrg1 = 8;
    const Init_Mrg2 = 16;
    let scrollY = window.scrollY;
    if(window.scrollY>0)
    {
      M_div2.style.top = `calc(min(${Init_Mrg1}vmin + ${scrollY}px, 295px))`
      M_div3.style.top = `calc(min(${Init_Mrg2}vmin + ${scrollY}px, 590px))`
    }    
    }, 5);
   
  })

 }

 
  
  
  return (
    <>
    <div className="Stacked_Wrpr">
      <div className="stacked-divs">
        <div className="div1">
          <img className='blur Img_CDim' src={cdimg} alt="Code" />
        </div>
        <div id="M_div2" className="div2">
          <div className="div2_lft">
            <h3 className="float_anim" >SKILLS</h3>
            </div>
          <div className="div2_rgt">
            <h3>I Work with,</h3>
            <ul className="Sklls_bfr">
              <li className="Sklls_bfr">MongoDB</li>
              <li className="Sklls_bfr">Express.js</li>
              <li className="Sklls_bfr">React</li>
              <li className="Sklls_bfr">Node.js</li>
              <li className="Sklls_bfr">Full Stack Web Dev</li>
            </ul>
            </div>
        </div>
        <div id='M_div3'className="div3">
        <div style={{border:'0px'}} className="div2_rgt">
            <h3 style={{border:'0px'}}>I Work with,</h3>
            <ul >
              <li >MongoDB</li>
              <li >Express.js</li>
              <li >React</li>
              <li >Node.js</li>
              <li >Full Stack Web Dev</li>
            </ul>
            </div>
        </div>
      </div>
      </div>
    </>
  );
}
