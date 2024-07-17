import React from "react";
import "../stylesheets/ProjectsMn.css";
import SpaceStrz from "./SpaceStrz";
import WorkScase from "./WorkScase";
import WorkScase2 from "./WorkScase2";
import WorkScase3 from "./WorkScase3";
import WorkScase4 from "./WorkScase4";
import WorkScase5 from "./WorkScase5";
import WorkScase6 from "./WorkScase6";
import EC1 from '../assets/images/1.png'
import EC2 from '../assets/images/2.png'
import EC3 from '../assets/images/3.png'
import EC4 from '../assets/images/4.png'
import EC5 from '../assets/images/5.png'
import EC6 from '../assets/images/6.png'
import EC7 from '../assets/images/7.png'
import EC8 from '../assets/images/8.png'
import EC9 from '../assets/images/1.png'
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
import GG1 from '../assets/images/Gratis/1.png'
import GG2 from '../assets/images/Gratis/2.png'
import GG3 from '../assets/images/Gratis/3.png'
import GG4 from '../assets/images/Gratis/4.png'
import GG5 from '../assets/images/Gratis/5.png'
import GG6 from '../assets/images/Gratis/6.png'
import GG7 from '../assets/images/Gratis/7.png'
import GG8 from '../assets/images/Gratis/8.png'





export default function ProjectsMn() {
  return (
   
    <>
      <div className="Project_Wrpr">
        <SpaceStrz numberofstars={5} Prim="Work" Sec='Folio'/>
        <WorkScase6 W1={GG1} W2={GG2} W3={GG3} W4={GG4} W5={GG5} W6={GG6} W7={GG7} W8={GG8} W9={GG4}/>    
        <WorkScase5 W1={EC1} W2={EC2} W3={EC3} W4={EC4} W5={EC5} W6={EC6} W7={EC7} W8={EC8} W9={EC9}/>
        <WorkScase  W1={W1} W2={W2} W3={W3} W4={W4} W5={W5} W6={W6} W7={W7} W8={W8} W9={W9}/>      
        <WorkScase2 W1={NA1} W2={NA2} W3={NA3} W4={NA4} W5={NA5} W6={NA6} W7={NA7} W8={NA8} W9={NA9}/>    
        <WorkScase3 W1={EE1} W2={EE2} W3={EE3} W4={EE4} W5={EE5} W6={EE6} W7={EE7} W8={EE8} W9={EE9}/>    
        <WorkScase4 W1={AT1} W2={AT2} W3={AT3} W4={AT4} W5={AT5} W6={AT6} W7={AT7} W8={AT8} W9={AT9}/>    
      </div>
    </>
  );
}
