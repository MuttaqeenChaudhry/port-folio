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
          <div style={{width:'50%', padding:'5px'}}>
            <form action="">
              <fieldset>
              <legend>Fill out the form</legend>
              <label className='c-prim f-sec' htmlFor="Data1">Subject</label><br/>
              <input placeholder='*' type="text" id='Data1' required /><br/>
              <label className='c-prim f-sec'>Name</label><br/>
              <input type="text" name="" id="" /><br/>
              <label className='c-prim f-sec'>Email</label><br/>
              <input placeholder='*' type="email" name="" id="" required/><br/>
              <label className='c-prim f-sec' htmlFor="">Your Message:</label><br/>
              <textarea rows='5' cols='100%' style={{resize:'none'}}></textarea><br/>
              <input className='c-prim f-sec hveffect' type="submit" value="Submit" />
              </fieldset>
            </form>

          </div>
          <div style={{width:'50%', padding:'5px'}}>
          <div ref={FmAnim} />
          </div>
        </div>

      </div>
    </div>
  </>
  )
}
