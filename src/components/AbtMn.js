import React from "react";
import SpaceStrz from "./SpaceStrz";
import "../stylesheets/AbtMn.css";

export default function AbtMn() {
  return (
    <>
      <div className="Abt_Wrpr">
        <SpaceStrz numberofstars={5} Prim="About" Sec="Me" />
        <div className="Abt_Main">
          <div className="Abt_Mn_Sec1">
       
            <div className="TimelineContainer">
              <div className="TimeLineSegment Timeline ">
                <div style={{width:'50%'}}>
                  <h4>Intro</h4>
                  <p>Hello there, I'm Muhammad Muttaqeen, a 23-year-old Muslim with a fervent passion for Web Application Development. My enthusiasm lies in the art of crafting distinctive websites that not only captivate but also stand out from the rest. Join me on a journey where creativity meets functionality, and together, we can bring unique digital experiences to life.</p>
                </div>
                <div style={{width:'50%'}}>HmmAnim</div>
              </div>
              <div className="TimeLineSegment Timeline">
                <div style={{width:'50%'}}>
                  <h4>Qualifications</h4>
                  <p>Hi 2 Content</p>
                </div>
                <div style={{width:'50%'}}>HmmAnim</div>
              </div>
              <div className="TimeLineSegment Timeline">
                <div style={{width:'50%'}}>
                  <h4>Hi 3</h4>
                  <p>Hi 3 Content</p> 
                </div>
                <div style={{width:'50%'}}>HmmAnim</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
