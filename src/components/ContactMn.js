import React, { useEffect, useRef, useState } from 'react';
import '../stylesheets/ContactMn.css';
import SpaceStrz from './SpaceStrz';
import Robot from '../animations/Robo.json'
import Lottie from 'lottie-web';
import Confetti from '../animations/Confetti.json'

const FORM_NAME = 'portfolio-contact';

const encodeFormData = (data) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

export default function ContactMn() {
  const[confetti, setConfetti] = useState('none');
  const [formStatus, setFormStatus] = useState('');
  const [formStatusColor, setFormStatusColor] = useState('#00FF00');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const FmAnim = useRef(null);
  const ConfettiCnt = useRef(null);

  useEffect(()=>{
    const robotAnimation = Lottie.loadAnimation({
      container : FmAnim.current,
      animationData : Robot,
    })
    return () => robotAnimation.destroy();
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

  function showFormStatus(message, color) {
    const FormMessage = document.querySelector('#FormMessage');
    setFormStatus(message);
    setFormStatusColor(color);
    FormMessage?.classList.remove('imgFadeo');
    setTimeout(() => {
      FormMessage?.classList.add('imgFadeo');
    }, 3000);
    setTimeout(() => {
      setFormStatus('');
    }, 4000);
  }

  const SendInfo = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    if (formData.get('bot-field')) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData({
          'form-name': FORM_NAME,
          subject: formData.get('subject'),
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      form.reset();
      LoadConfetti();
      showFormStatus('Submitted', '#00FF00');
    } catch (error) {
      showFormStatus('Could not send. Please try again.', '#ff6b6b');
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <>
    <div className="ContactMnWrpr">
      <SpaceStrz numberofstars={5} Prim="Reach" Sec='Out'/>
      <div className="ContactMain">
        <div className='ContactCntnt'>
          <div className='CntctSec1'>
            <form name={FORM_NAME} method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={SendInfo}>
              <input type="hidden" name="form-name" value={FORM_NAME} />
              <input type="hidden" name="bot-field" />
              <fieldset>
              <legend>Fill out the form</legend>
              <label className='c-prim f-sec' htmlFor="SubJect">Subject</label><br/>
              <span  style={{position:'relative'}}>
              <input placeholder='*' type="text" name="subject" id='SubJect' required /><br/>
              </span>
              <label className='c-prim f-sec' htmlFor="naMe">Name</label><br/>
              <input type="text" name="name" id="naMe" /><br/>
              <label className='c-prim f-sec' htmlFor="EmAil">Email</label><br/>
              <span style={{position:'relative'}}>
              <input placeholder='*' type="email" name="email" id="EmAil" required/><br/>
              </span>
              <label className='c-prim f-sec' htmlFor="CommenT">Your Message:</label><br/>
              <textarea rows='5' cols='100%' name="message" id='CommenT' style={{resize:'none'}} required></textarea><br/>
              <input className='c-prim f-sec hveffect' type="submit" value={isSubmitting ? 'Sending...' : 'Submit'} disabled={isSubmitting}/>
              <span id='FormMessage' className='f-sec' style={{color: formStatusColor, height:'55px', fontSize:'14px', width:'fit-content', display:'block', margin:'auto'}}>
                {formStatus && <h3>{formStatus}</h3>}
              </span>
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
