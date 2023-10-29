import React, { useEffect } from "react";
import "../stylesheets/NavBar.css";
import webdev from '../svgs/web_dev.svg'
import 'animate.css';

export default function NavBar() {
  
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      const Nav_Bar = document.querySelector('.Nav-Wrapper')
      if(window.scrollY>0)
      {
       Nav_Bar.classList.add('anim_d_down')
      }
      else
      {
        Nav_Bar.classList.remove('anim_d_down')        
      }

    })
  },[])
  
  return (
    <>
      <header>
        <nav>
        <div className="Nav-Wrapper ">
          <div className="Nav-Bar">
            <div className="Nav-Left">
                <a className="Main_Title" href="" rel="noreferrer noopener">
                  @muttaqeen_231
                </a>
                <img src={webdev} alt="Dev." />
            </div>
            <div className="Nav-Right">
              <a href="" rel="noreferrer noopener">
                Home
              </a>
              <a href="" rel="noreferrer noopener">
                Projects
              </a>
              <a href="" rel="noreferrer noopener">
                About
              </a>
              <a href="" rel="noreferrer noopener">
                Contact
              </a>
            </div>
          </div>
          <div className='B_Grad mt-2'/>
        </div>
        </nav>
      </header>
      
    </>
  );
}
