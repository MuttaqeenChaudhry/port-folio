import React, { useEffect, useState } from "react";
import "../stylesheets/ProjectsMn.css";
import SpaceStrz from "./SpaceStrz";

export default function ProjectsMn() {
  var[spaceship, setSpacShips] = useState(0);
  const updSchip = () =>{
    setSpacShips(spaceship++)
  }
  return (
   
    <>
      <div className="Project_Wrpr">
        <div className="PW_S1">
          <div className="PW-Content">
            <h2 style={{zIndex:'2'}}><span style={{color:"grey"}}>MY</span> <span style={{color:"white"}}>Projects</span></h2>
          </div>
         <SpaceStrz numberofstars={15} InformCaptain={updSchip}/>  
        </div>
        <div className="PW_S1_b">
          <h2>-Ships Destroyed-</h2>
          <p style={{textAlign:"center"}}>{spaceship}</p>
        </div>
      </div>
    </>
  );
}
