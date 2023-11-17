import React from "react";
import "../stylesheets/ProjectsMn.css";
import SpaceStrz from "./SpaceStrz";
import WorkScase from "./WorkScase";
import WorkScase2 from "./WorkScase2";
import WorkScase3 from "./WorkScase3";
import WorkScase4 from "./WorkScase4";
import W1 from '../assets/images/W1.jpg'
import W2 from '../assets/images/W2.jpg'
import W3 from '../assets/images/W3.jpg'
import W4 from '../assets/images/W4.jpg'
import W5 from '../assets/images/W5.jpg'
import W6 from '../assets/images/W6.jpg'
import W7 from '../assets/images/W7.jpg'
import W8 from '../assets/images/W8.jpg'
import W9 from '../assets/images/W9.jpg'
import NA1 from '../assets/images/NA1.jpg'
import NA2 from '../assets/images/NA2.jpg'
import NA3 from '../assets/images/NA3.jpg'
import NA4 from '../assets/images/NA4.jpg'
import NA5 from '../assets/images/NA5.jpg'
import NA6 from '../assets/images/NA6.jpg'
import NA7 from '../assets/images/NA7.jpg'
import NA8 from '../assets/images/NA8.jpg'
import NA9 from '../assets/images/NA9.jpg'
import EE1 from '../assets/images/EE1.jpg'
import EE2 from '../assets/images/EE2.jpg'
import EE3 from '../assets/images/EE3.jpg'
import EE4 from '../assets/images/EE4.jpg'
import EE5 from '../assets/images/EE5.jpg'
import EE6 from '../assets/images/EE6.jpg'
import EE7 from '../assets/images/EE7.jpg'
import EE8 from '../assets/images/EE8.jpg'
import EE9 from '../assets/images/EE9.jpg'
import AT1 from '../assets/images/AT1.jpg'
import AT2 from '../assets/images/AT2.jpg'
import AT3 from '../assets/images/AT3.jpg'
import AT4 from '../assets/images/AT4.jpg'
import AT5 from '../assets/images/AT5.jpg'
import AT6 from '../assets/images/AT6.jpg'
import AT7 from '../assets/images/AT7.jpg'
import AT8 from '../assets/images/AT8.jpg'
import AT9 from '../assets/images/AT9.jpg'





export default function ProjectsMn() {
  return (
   
    <>
      <div className="Project_Wrpr">
        <SpaceStrz numberofstars={5} Prim="Work" Sec='Folio'/>
        <WorkScase  W1={W1} W2={W2} W3={W3} W4={W4} W5={W5} W6={W6} W7={W7} W8={W8} W9={W9}/>      
        <WorkScase2 W1={NA1} W2={NA2} W3={NA3} W4={NA4} W5={NA5} W6={NA6} W7={NA7} W8={NA8} W9={NA9}/>    
        <WorkScase3 W1={EE1} W2={EE2} W3={EE3} W4={EE4} W5={EE5} W6={EE6} W7={EE7} W8={EE8} W9={EE9}/>    
        <WorkScase4 W1={AT1} W2={AT2} W3={AT3} W4={AT4} W5={AT5} W6={AT6} W7={AT7} W8={AT8} W9={AT9}/>    
      </div>
    </>
  );
}
