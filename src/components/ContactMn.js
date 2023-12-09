import React, { useEffect, useState } from 'react';
import '../stylesheets/ContactMn.css';
import SpaceStrz from './SpaceStrz';
import Robot from '../animations/Robo.json'
import Lottie from 'lottie-web';
import Confetti from '../animations/Confetti.json'


export default function ContactMn() {
  const[confetti, setConfetti] = useState('none');
  let FmAnim = React.createRef(null);
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

  function cleanUp() {
    const SubJect = document.querySelector('#SubJect');
    const naMe = document.querySelector('#naMe');
    const EmAil = document.querySelector('#EmAil');
    const CommenT = document.querySelector('#CommenT');
    const FormMessage = document.querySelector('#FormMessage');
    SubJect.value = null;
    naMe.value = null;
    EmAil.value = null;
    CommenT.value = null;
    FormMessage.classList.remove('imgFadeo');
    FormMessage.innerHTML = '<h3>Submitted</h3>';
    setTimeout(() => {
    FormMessage.classList.add('imgFadeo');  
    }, 3000);
    setTimeout(() => {
    FormMessage.innerHTML = '';
    }, 4000);
  } 

  const SendInfo = (e) => {
    e.preventDefault();
    LoadConfetti();
    cleanUp();
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
              <input placeholder='*' type="text" id='SubJect' required /><br/>
              </span>
              <label className='c-prim f-sec'>Name</label><br/>
              <input type="text" name="" id="naMe" /><br/>
              <label className='c-prim f-sec'>Email</label><br/>
              <span style={{position:'relative'}}>
              <input placeholder='*' type="email" name="" id="EmAil" required/><br/>
              </span>
              <label className='c-prim f-sec' htmlFor="">Your Message:</label><br/>
              <textarea rows='5' cols='100%' id='CommenT' style={{resize:'none'}}></textarea><br/>
              <input className='c-prim f-sec hveffect' type="submit" value="Submit"/>
              <span id='FormMessage' className='f-sec' style={{color:'#00FF00 ', height:'55px', fontSize:'14px', width:'fit-content', display:'block', margin:'auto'}}></span>
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
