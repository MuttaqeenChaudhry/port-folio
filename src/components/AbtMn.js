import React, { useEffect } from "react";
import SpaceStrz from "./SpaceStrz";
import 'animate.css';
import "../stylesheets/AbtMn.css";
import Lottie from "lottie-web";
import Dev from '../animations/Dev2.json';
import QualData from '../animations/Stdnt.json';
import ExpWkinC from '../animations/ExpWkin.json';


export default function AbtMn() {
  let DevMe = React.createRef();
  let QualificationContainer = React.createRef();
  let ExpWkin = React.createRef();
  useEffect(()=>{
    Lottie.loadAnimation({
      container : DevMe.current,
      animationData : Dev 
    });
    Lottie.loadAnimation({
      container : QualificationContainer.current,
      animationData : QualData
    });
    Lottie.loadAnimation({
      container : ExpWkin.current,
      animationData : ExpWkinC
    });
  },[])
  useEffect(()=>{
    const TlSegment1 = document.querySelector('#TlSegment1');
    const TlSegment2 = document.querySelector('#TlSegment2');
    const TlSegment3 = document.querySelector('#TlSegment3');
    const options = {
      root : null,
      rootMargin : '0px',
      threshold : 0.7
    }
    const observer1 = new IntersectionObserver(callback, options);
    const observer2 = new IntersectionObserver(callback2, options);
    const observer3 = new IntersectionObserver(callback3, options);
    observer1.observe(TlSegment1);
    observer2.observe(TlSegment2);
    observer3.observe(TlSegment3);
    function callback(entries) {
      console.log(entries)
      entries.forEach(entry => {
        if(entry.isIntersecting)
        {
          TlSegment1.classList.add('BderFadeIn')
        }
        else
        {
          // Do Nothing
        }
        
      });
    };
    function callback2(entries) {
      entries.forEach(entry => {
        if(entry.isIntersecting)
        {
          TlSegment2.classList.add('BderTwoFadeIn')
        }
        else
        {
          // Do Nothing
        }
        
      });
    };function callback3(entries) {
      entries.forEach(entry => {
        if(entry.isIntersecting)
        {
          TlSegment3.classList.add('BderThreeFadeIn')
        }
        else
        {
          // Do Nothing
        }
        
      });
    };
  },[])
  return (
    <>
      <div className="Abt_Wrpr">
        <SpaceStrz numberofstars={5} Prim="About" Sec="Me" />
        <div className="Abt_Main">
          <div className="Abt_Mn_Sec1">
            <div className="TimelineContainer">
              <div id='TlSegment1' className="TimeLineSegment">
                <div className="Timeline">
                  <h4 style={{color: '#007791'}} className="f-sec">Introduction</h4>
                  <p className="f-ub">
                    Hello there, I'm Muhammad Muttaqeen, a 23-year-old Muslim
                    with a fervent passion for Web Application Development. My
                    enthusiasm lies in the art of crafting distinctive websites
                    that not only captivate but also stand out from the rest.
                    Join me on a journey where creativity meets functionality,
                    and together, we can bring unique digital experiences to
                    life .
                  </p>
                </div>
                <div style={{ width: "50%" }}>
                  <div ref={DevMe} />
                </div>
              </div>
              <div id='TlSegment2' className="TimeLineSegment">
                <div className='Timeline2'>
                  <h4 style={{color: '#0076CE'}} className="f-sec">Qualifications</h4>
                  <p className="f-ub">
                    I completed my Matriculation with a focus on Computer
                    Science, laying the foundation for my academic journey.
                    Building upon these fundamentals, I pursued my Higher
                    Secondary School Certificate (HSSC) in Computer Science, through which I deepened my understanding of the
                    field. Driven by a passion for software engineering, I
                    further honed my skills by enrolling in the Bachelor of
                    Science program in Software Engineering. This
                    advanced course equipped me with comprehensive knowledge and
                    practical experience, providing a robust framework for my
                    future endeavors in the dynamic world of technology .
                  </p>
                </div>
                <div style={{ width: "50%" }}>
                  <div ref={QualificationContainer} />
                </div>
              </div>
              <div id='TlSegment3' className="TimeLineSegment">
                <div className='Timeline3'>
                  <h4 className="c-prim f-sec">Experience</h4>
                  <p className="f-ub">
                    I began my web development journey with my Final Year
                    Project (FYP), transitioning from prior experience in mobile
                    development. Focused on HTML, CSS, JavaScript, and PHP, my
                    FYP laid the foundation for web development fundamentals.
                    Subsequently, I embraced React.js, creating multiple
                    applications to refine my UI development skills. In my
                    recent role as a Full Stack Web Developer, I
                    contributed to diverse projects, gaining comprehensive
                    experience across the entire development stack.
                    Collaborating with a skilled team, I worked on scalable web
                    applications, solidifying my passion for innovative web
                    solutions and continuous skill enhancement .
                  </p>
                </div>
                <div style={{ width: "50%" }}>
                  <div ref={ExpWkin}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
