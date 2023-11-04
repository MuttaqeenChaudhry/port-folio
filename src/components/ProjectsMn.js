import React from "react";
import "../stylesheets/ProjectsMn.css";
import SpaceStrz from "./SpaceStrz";

export default function ProjectsMn() {
  return (
   
    <>
      <div className="Project_Wrpr">
        <SpaceStrz numberofstars={50} Prim="My" Sec='Projects'/>
      </div>
    </>
  );
}
