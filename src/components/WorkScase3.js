import React, { useEffect } from 'react'
import '../stylesheets/WorkScase.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong, faLeftLong } from "@fortawesome/free-solid-svg-icons";
import ScrollAnimation from 'react-animate-on-scroll';
import AnimatedPts from './AnimatedPts';

export default function WorkScase(props) {
    const AR_R = <FontAwesomeIcon icon={faRightLong} size='3x' color="#fff" />;
    const AR_L = <FontAwesomeIcon icon={faLeftLong} size='3x' color="#fff" />;
    
    useEffect(()=>{
        const prevButton = document.getElementById('prevButton3')
        const nextButton = document.getElementById('nextButton3')
        const ImgContainer = document.getElementById('WScase_B_13');
        const Imgs = ImgContainer.querySelectorAll('.Sliding_Imgs')
        let InitIndex = 0;
        const showImage = (index) => {
            Imgs.forEach((Img, i)=>{
                if(i === index)
                Img.style.display = 'block';
                else
                Img.style.display = 'none';

            })
        }

        prevButton.addEventListener('click', ()=>{
            InitIndex = (InitIndex - 1 + Imgs.length) % Imgs.length; 
            showImage(InitIndex) 
        })

        nextButton.addEventListener('click', ()=>{
            InitIndex = (InitIndex + 1) % Imgs.length; 
            showImage(InitIndex) 
        })

        setInterval(() => {
            InitIndex = (InitIndex + 1) % Imgs.length; 
            showImage(InitIndex) 
        }, 4600);
       
        showImage(InitIndex)

    },[])
  return (
    <>
    <div className="WScase_Wrpr">
        <div className="WScase" style={{flexDirection : props.flexD}}>
            <AnimatedPts
                title='EditEase'
                p1='Text Editor'
                p2="Light/Dark Modes"
                p3='Fully Responsive'
                p4='Text -> Speech'
                p5='Vanilla Css, BStrap'
            />
            <div className='WScase_B'>
                <div id='WScase_B_13' className='WScase_B_1'>
                <img className='Sliding_Imgs' src={props.W1} alt="1" />
                <img className='Sliding_Imgs' src={props.W2} alt="2" />
                <img className='Sliding_Imgs' src={props.W3} alt="3" />
                <img className='Sliding_Imgs' src={props.W4} alt="4" />
                <img className='Sliding_Imgs' src={props.W5} alt="5" />
                <img className='Sliding_Imgs' src={props.W6} alt="6" />
                <img className='Sliding_Imgs' src={props.W7} alt="7" />
                <img className='Sliding_Imgs' src={props.W8} alt="8" />
                <img className='Sliding_Imgs' src={props.W9} alt="9" />
                </div>
                <div className='WScase_B_2'>
                    <button className='btn_rnd' id='prevButton3'>{AR_L}</button>
                    <button className='btn_rnd' id='nextButton3'>{AR_R}</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
