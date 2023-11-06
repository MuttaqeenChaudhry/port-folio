import React from "react";
import "../stylesheets/ProjectsMn.css";
import SpaceStrz from "./SpaceStrz";
import WorkScase from "./WorkScase";

export default function ProjectsMn() {
  return (
   
    <>
      <div className="Project_Wrpr">
        <SpaceStrz numberofstars={50} Prim="Work" Sec='Folio'/>
        <WorkScase/>
      </div>
    </>
  );
}
