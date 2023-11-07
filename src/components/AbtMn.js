import React from 'react';
import SpaceStrz from './SpaceStrz'
import WorkScase from './WorkScase';
import WorkScase2 from './WorkScase2';
import '../stylesheets/AbtMn.css'
import W1 from '../assets/images/W1.jpg'
import W2 from '../assets/images/W2.jpg'
import W3 from '../assets/images/W3.jpg'
import W4 from '../assets/images/W4.jpg'
import W5 from '../assets/images/W5.jpg'
import W6 from '../assets/images/W6.jpg'
import W7 from '../assets/images/W7.jpg'
import W8 from '../assets/images/W8.jpg'
import W9 from '../assets/images/W9.jpg'


export default function AbtMn() {
  return (
    <>
    <div className="Project_Wrpr">
      <SpaceStrz numberofstars={50} Prim="About" Sec='Me'/>
      <WorkScase flexD='row-reverse' id='WSCASE1' W1={W1} W2={W2} W3={W3} W4={W4} W5={W5} W6={W6} W7={W7} W8={W8} W9={W9}/>
    </div>
  </>
  )
}
