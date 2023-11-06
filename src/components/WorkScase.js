import React, { useEffect } from 'react'
import '../stylesheets/WorkScase.css'
import W1 from '../assets/images/W1.jpg'
import W2 from '../assets/images/W2.jpg'
import W3 from '../assets/images/W3.jpg'
import W4 from '../assets/images/W4.jpg'
import W5 from '../assets/images/W5.jpg'
import W6 from '../assets/images/W6.jpg'
import W7 from '../assets/images/W7.jpg'
import W8 from '../assets/images/W8.jpg'
import W9 from '../assets/images/W9.jpg'

export default function WorkScase() {
    useEffect(()=>{
        const prevButton = document.getElementById('prevButton')
        const nextButton = document.getElementById('nextButton')
        const ImgContainer = document.getElementById('WScase_B_1');
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
        }, 4200);
       
        showImage(InitIndex)
    },[])
  return (
    <>
    <div className="WScase_Wrpr">
        <div className="WScase">
            <div className='WScase_A'>
                <h2 style={{fontSize:"5vmin", color:'white'}} className='f-prim'>Traveler (Car Booking App)</h2>
                <ul>
                    <li className='f-sec c-prim' style={{color : "white"}}>1 -  Multilingual</li>
                    <li className='f-sec c-prim mt-5' style={{color : "white"}}>2 - App Landing Page</li>
                    <li className='f-sec c-prim mt-5' style={{color : "white"}}>3 - Services</li>
                    <li className='f-sec c-prim mt-5' style={{color : "white"}}>4 - About and Contact</li>
                </ul>
            </div>
            <div className='WScase_B'>
                <div id='WScase_B_1' className='WScase_B_1'>
                <img className='Sliding_Imgs' src={W1} alt="1" />
                <img className='Sliding_Imgs' src={W2} alt="2" />
                <img className='Sliding_Imgs' src={W3} alt="3" />
                <img className='Sliding_Imgs' src={W4} alt="4" />
                <img className='Sliding_Imgs' src={W5} alt="5" />
                <img className='Sliding_Imgs' src={W6} alt="6" />
                <img className='Sliding_Imgs' src={W7} alt="7" />
                <img className='Sliding_Imgs' src={W8} alt="8" />
                <img className='Sliding_Imgs' src={W9} alt="9" />
                </div>
                <div className='WScase_B_2'>
                    <button id='prevButton'>Previous</button>
                    <button id='nextButton'>Next</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
