import React from "react";
import "../stylesheets/ProjectsMn.css";
import SpaceStrz from "./SpaceStrz";
import WorkScase from "./WorkScase";
import WorkScase2 from "./WorkScase2";
import WorkScase3 from "./WorkScase3";
import W1 from '../assets/images/W1.jpg'
import W2 from '../assets/images/W2.jpg'
import W3 from '../assets/images/W3.jpg'
import W4 from '../assets/images/W4.jpg'
import W5 from '../assets/images/W5.jpg'
import W6 from '../assets/images/W6.jpg'
import W7 from '../assets/images/W7.jpg'
import W8 from '../assets/images/W8.jpg'
import W9 from '../assets/images/W9.jpg'
import W10 from '../assets/images/W10.jpg'
import W21 from '../assets/images/W21.jpeg'
import W22 from '../assets/images/W22.jpeg'

export default function ProjectsMn() {
  return (
   
    <>
      <div className="Project_Wrpr">
        <SpaceStrz numberofstars={5} Prim="Work" Sec='Folio'/>
        <WorkScase flexD="row" W1={W1} W2={W2} W3={W3} W4={W4} W5={W5} W6={W6} W7={W7} W8={W8} W9={W9}/>      
        <WorkScase2 flexD='row-reverse' W1={W21} W2={W22} W3={W21} W4={W22} W5={W21} W6={W22} W7={W21} W8={W22} W9={W21}/>    
        <WorkScase3 flexD='row' W1={W21} W2={W22} W3={W21} W4={W22} W5={W21} W6={W22} W7={W21} W8={W22} W9={W21}/>    
      </div>
    </>
  );
}
