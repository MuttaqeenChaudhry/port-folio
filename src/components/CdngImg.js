import React from "react";
import "../stylesheets/CdngImg.css";
import cdimg from "../images/Coding.jpg";

export default function CdngImg() {
  return (
    <>
      <div class="stacked-divs">
        <div class="div1">
          <img className='blur Img_CDim' src={cdimg} alt="Code" />
        </div>
        <div class="div2">
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
        <div class="div3"></div>
      </div>
    </>
  );
}
