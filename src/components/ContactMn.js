import React, { useEffect } from 'react';
import '../stylesheets/ContactMn.css';
import SpaceStrz from './SpaceStrz';
import Robot from '../animations/Robo.json'
import Lottie from 'lottie-web';


export default function ContactMn() {
  let FmAnim = React.createRef();
  useEffect(()=>{
    Lottie.loadAnimation({
      container : FmAnim.current,
      animationData : Robot,
    })
  },[])
  return (
    <>
    <div className="ContactMnWrpr">
      <SpaceStrz numberofstars={5} Prim="Reach" Sec='Out'/>
      <div className="ContactMain">
        <div className='ContactCntnt'>
          <div className='CntctSec1'>
            <form action="">
              <fieldset>
              <legend>Fill out the form</legend>
              <label className='c-prim f-sec' htmlFor="Data1">Subject</label><br/>
              <span  style={{position:'relative'}}>
              <input placeholder='*' type="text" id='Data1' required /><br/>
              </span>
              <label className='c-prim f-sec'>Name</label><br/>
              <input type="text" name="" id="" /><br/>
              <label className='c-prim f-sec'>Email</label><br/>
              <span style={{position:'relative'}}>
              <input placeholder='*' type="email" name="" id="" required/><br/>
              </span>
              <label className='c-prim f-sec' htmlFor="">Your Message:</label><br/>
              <textarea rows='5' cols='100%' style={{resize:'none'}}></textarea><br/>
              <input className='c-prim f-sec hveffect' type="submit" value="Submit" />
              </fieldset>
            </form>

          </div>
          <div className='CntctSec2'>
          <div ref={FmAnim} />
          </div>
        </div>

      </div>
    </div>
  </>
  )
}
