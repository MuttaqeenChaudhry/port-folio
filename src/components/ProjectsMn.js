import React, { useEffect } from "react";
import "../stylesheets/ProjectsMn.css";
import SpaceStrz from "./SpaceStrz";

export default function ProjectsMn() {
  
  return (
    <>
      <div className="Project_Wrpr">
        <div className="PW_S1">
          <div className="PW-Content">
            <h2 style={{zIndex:'2'}}><span style={{color:"grey"}}>MY</span> <span style={{color:"white"}}>Projects</span></h2>
          </div>
         <SpaceStrz numberofstars={15}/>  
        </div>
      </div>
    </>
  );
}
