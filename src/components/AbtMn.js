import React from 'react';
import SpaceStrz from './SpaceStrz'
import WorkScase from './WorkScase';
import '../stylesheets/AbtMn.css'


export default function AbtMn() {
  return (
    <>
    <div className="Project_Wrpr">
      <SpaceStrz numberofstars={50} Prim="About" Sec='Me'/>
      <WorkScase/>
    </div>
  </>
  )
}
