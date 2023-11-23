import React, { useEffect, useState } from 'react';
import '../stylesheets/ContactMn.css';
import SpaceStrz from './SpaceStrz';
import Robot from '../animations/Robo.json'
import Lottie from 'lottie-web';
import Confetti from '../animations/Confetti.json'


export default function ContactMn() {
  const[confetti, setConfetti] = useState('none');
  let FmAnim = React.createRef();
  let ConfettiCnt = React.createRef(null);

  useEffect(()=>{
    Lottie.loadAnimation({
      container : FmAnim.current,
      animationData : Robot,
    })
  },[])

  function LoadConfetti() {
    const ConfetiCntnr = document.querySelector('#ConfetiCntnr');
    ConfetiCntnr.classList.remove('imgFadeo');
    setConfetti('block');
    Lottie.loadAnimation({
      name: confetti,
      container: ConfettiCnt.current,
      animationData : Confetti,
    });
    setTimeout(() => {
      ConfetiCntnr.classList.add('imgFadeo')
    }, 7000);
    setTimeout(() => {
      Lottie.destroy(confetti);
      setConfetti('none');
    }, 8000);}

  const SendInfo = (e) => {
    e.preventDefault();
    LoadConfetti();
  }
  return (
    <>
    <div className="ContactMnWrpr">
      <SpaceStrz numberofstars={5} Prim="Reach" Sec='Out'/>
      <div className="ContactMain">
        <div className='ContactCntnt'>
          <div className='CntctSec1'>
            <form onSubmit={SendInfo}>
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
              <input className='c-prim f-sec hveffect' type="submit" value="Submit"/>
              </fieldset>
            </form>

          </div>
          <div className='CntctSec2'>
          <div ref={FmAnim} />
          </div>
        </div>
        <div className="ConfettiContainer" id='ConfetiCntnr' style={{display: confetti }}>
         <div className='ConfetiDimen' ref={ConfettiCnt}/> 
        </div>

      </div>
    </div>
  </>
  )
}
